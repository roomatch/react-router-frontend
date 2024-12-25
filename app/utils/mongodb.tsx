// db.js
const { MongoClient, ServerApiVersion } = require("mongodb");
const PASSWORD = "zO6sROokX04mxU2h";
const uri = `roomatchoficial:${PASSWORD}@testdb.dvin4.mongodb.net/?retryWrites=true&w=majority&appName=Testdb`;

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
});

async function connectDB() {
    if (!client.isConnected) {
        await client.connect();
        console.log("Connected to MongoDB");
    }
    return client;
}

module.exports = { connectDB, client };
