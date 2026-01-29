const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

/* ================= DATABASE CONNECTION ================= */
mongoose.set('strictQuery', false);

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("DB Connected");
  } catch (err) {
    console.error("DB connection error:", err.message || err);
    console.error("Possible causes: incorrect MONGO_URL in server/.env, invalid credentials, or IP address not whitelisted in MongoDB Atlas.");
    console.error("Follow Atlas instructions: https://www.mongodb.com/docs/atlas/security-whitelist/");
    process.exit(1);
  }
};

connectDB();

mongoose.connection.on('error', (err) => {
  console.error('Mongoose connection error:', err && err.message ? err.message : err);
});

/* ================= MODELS ================= */
const Project = require("./models/Project");
const Client = require("./models/Client");
const Contact = require("./models/Contact");
const Subscriber = require("./models/Subscriber");

/* ================= ROUTES ================= */

// TEST ROUTE
app.get("/", (req,res)=> res.send("API Running"));

/* ----- PROJECT ----- */
app.post("/projects", async (req,res)=>{
  try {
    const data = await Project.create(req.body);
    res.json(data);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.get("/projects", async (req,res)=>{
  try {
    const data = await Project.find();
    res.json(data);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.delete("/projects/:id", async (req,res)=>{
  try {
    const data = await Project.findByIdAndDelete(req.params.id);
    res.json(data);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

/* ----- CLIENT ----- */
app.post("/clients", async (req,res)=>{
  try {
    const data = await Client.create(req.body);
    res.json(data);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.get("/clients", async (req,res)=>{
  try {
    const data = await Client.find();
    res.json(data);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.delete("/clients/:id", async (req,res)=>{
  try {
    const data = await Client.findByIdAndDelete(req.params.id);
    res.json(data);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

/* ----- CONTACT ----- */
app.post("/contacts", async (req,res)=>{
  try {
    const data = await Contact.create(req.body);
    res.json(data);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.get("/contacts", async (req,res)=>{
  try {
    const data = await Contact.find();
    res.json(data);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

/* ----- SUBSCRIBER ----- */
app.post("/subs", async (req,res)=>{
  try {
    const data = await Subscriber.create(req.body);
    res.json(data);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.get("/subs", async (req,res)=>{
  try {
    const data = await Subscriber.find();
    res.json(data);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

/* ================= SERVER START ================= */
const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`));