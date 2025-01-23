import { MongoClient, ServerApiVersion } from "mongodb";
import express from "express";
import dotenv from "dotenv";
const app = express();
const port = 3000;

app.use(express.json());
dotenv.config();
const uri = process.env.STRING_URI;

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
      return res.status(500).send("Database not connected");
    }
    const posts = await db.collection("Name").find().toArray();
    res.json(posts);
  } catch (err) {
    console.error("Error fetching posts:", err);
    res.status(500).send("Error fetching posts");
  }
});

// Add data to server ("/insert")
app.post("/insert", async (req, res) => {
  try {
    if (!db) {
      return res.status(500).send("Database not connected");
    }

    // You can directly use newData here if you don't want to rely on req.body
    const newData = { 
      surname: "Don",
      firstName: "Jose", 
      birthday: "2024-02-28" 
    };

    const result = await db.collection("Name").insertOne(req.body || newData);
    console.log("New post inserted:", result);
    res.json(result);
  } catch (err) {
    console.error("Error inserting post:", err);
    res.status(500).send("Error inserting post");
  }
});

app.listen(port, async () => {
  await connectToDb();
  console.log(`Server is listening on port ${port}`);
});
