import { MongoClient, ServerApiVersion } from "mongodb";
import express from "express";
import dotenv from "dotenv";

const app = express();
const port = 3000;

dotenv.config();
const uri = process.env.STRING_URI;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

let db;

async function connectToDb() {
  try {
    // Connect the client to the server
    await client.connect();
    db = client.db("employeeDatabase");
    console.log("Successfully connected to MongoDB!");
  } catch (err) {
    console.error("Failed to connect to MongoDB", err);
  }
}

app.get("/", async (req, res) => {
  try {
    if (!db) {
      res.status(500).send("Database not connected");
      return;
    }
    const posts = await db.collection("Name").find().toArray();
    console.log(posts);
    res.send(posts);
  } catch (err) {
    console.error("Error fetching posts:", err);
    res.status(500).send("Error fetching posts");
  }
});

// Add data to server ("/insert")
app.get("/insert", async (req, res) => {
  try {
    if (!db) {
      res.status(500).send("Database not connected");
      return;
    }

    // Sample data to insert. Modify this as needed.
    const newData = {
      surname: "Doe",
      firstnamen: "John",
      birthday: "2024-02-28",
    };

    const result = await db.collection("Name").insertOne(newData);
    console.log("New post inserted:", result);
    res.status(200).send(result);
  } catch (err) {
    console.error("Error inserting post:", err);
    res.status(500).send("Error inserting post");
  }
});

// Start server and connect to database
app.listen(port, async () => {
  await connectToDb(); // Connect to the database before starting the server
  console.log(`Server is listening on port ${port}`);
});
