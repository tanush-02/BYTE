import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/auth", authRoutes);

// DB + Server
mongoose.connect(process.env.MONGO_URI || "mongodb://127.0.0.1:27017/hackathonAuth")
  .then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.log(err));

app.listen(process.env.PORT || 5000, () =>
  console.log(`🚀 Server running on http://localhost:${process.env.PORT || 5000}`)
);
