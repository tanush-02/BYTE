import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();

const app = express();

// Parse JSON bodies
app.use(express.json());

// CORS
app.use(cors({
  origin: "http://localhost:3000", // React frontend
  credentials: true
}));

// Test route
app.get("/", (req, res) => res.send("Backend running"));

// Auth routes
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 8000;

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("✅ MongoDB connected");
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  })
  .catch(err => console.error("❌ MongoDB connection failed:", err));

  