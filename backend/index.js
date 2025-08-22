import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";

import authRoutes from "./routes/authRoutes.js";

// Load env variables
dotenv.config();

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

if (!uri) {
  console.error("❌ MONGO_URL is missing. Check your .env file.");
  process.exit(1);
}

const app = express();

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/api/auth", authRoutes);

// Connect to MongoDB
mongoose.connect(uri)
  .then(() => {
    console.log("✅ MongoDB connected");
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ MongoDB connection failed:", err.message);
  });
