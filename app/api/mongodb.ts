import { MongoClient, ServerApiVersion } from "mongodb";
import type { RoomieInfo } from "./model";

const client = new MongoClient(import.meta.env.VITE_MONGODB_URI, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
});

async function connectDB() {
    await client.connect();
    console.log("Connected to MongoDB");
    return client;
}

export async function getUsersInfo(): Promise<RoomieInfo[]> {
    try {
        const database = client.db('roomatch');
        const collection = database.collection<RoomieInfo>('users');
        const result = await collection.find({}).toArray();
        return result
    } catch (err) {
        console.error('Error retrieving data: ', err);
        return []
    }
}

export async function findOrAddUser(cellphone: string, type: string, compatibles: Array<string>, submission_id: string) {
    try {
        const database = client.db('roomatch');
        const collection = database.collection('users');
        const existingUser = await collection.findOne({ cellphone });
        if (existingUser) {
            return existingUser;
        }
        await collection.insertOne({
            cellphone,
            type,
            compatibles,
            submission_id
        });
    } catch (err) {
        console.error('Error handling user:', err);
    }
}

export async function getUserInfo(cellphone: string): Promise<RoomieInfo> {
    try {
        const database = client.db('roomatch');
        const collection = database.collection<RoomieInfo>('users');
        const existingUser = await collection.findOne({ cellphone });
        if (!existingUser) {
            throw new Error(`User with cellphone ${cellphone} not found`);
        }
        return existingUser
    }
    catch (err) {
        console.error('Error getting user:', err);
        throw err
    }
}

export async function updateUserCompatibles(cellphone: string, compatibles: Array<string>) {
    try {
        const database = client.db('roomatch');
        const collection = database.collection('users');
        await collection.updateMany(
            { cellphone: cellphone },
            { $set: { compatibles: compatibles } }
        );
    } catch (err) {
        console.error('Error al insertar datos:', err);
    }
}





module.exports = { connectDB, client };
