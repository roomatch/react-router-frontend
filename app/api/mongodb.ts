import { MongoClient, ServerApiVersion } from "mongodb";

const client = new MongoClient(`roomatchoficial:${process.env.MONGODB_PASSWORD}@testdb.dvin4.mongodb.net/?retryWrites=true&w=majority&appName=Testdb`, {
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

module.exports = { connectDB, client };
