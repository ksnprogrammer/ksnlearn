// src/mongoClient.ts
import { MongoClient } from 'mongodb';

const connectionString = 'mongodb+srv://ksn:181221@ksnlearn.cfj4n.mongodb.net/?retryWrites=true&w=majority&appName=ksnlearn';
const client = new MongoClient(connectionString);

let dbInstance: any = null;

async function connectToMongo() {
  try {
    await client.connect();
    dbInstance = client.db("ksnlearn"); // Or your desired database name within the cluster
    console.log("Connected to MongoDB");
    return dbInstance;
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error; // Re-throw the error for handling in the calling function
  }
}

export { connectToMongo, dbInstance };
