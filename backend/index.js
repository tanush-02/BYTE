import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { Server } from "socket.io";
import http from "http";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();

const app = express();
const server = http.createServer(app); // Wrap express app with http server

// Parse JSON bodies
app.use(express.json());

// CORS
app.use(cors({
  origin: "http://localhost:3000",
  credentials: true
}));

// Test route
app.get("/", (req, res) => res.send("Backend running"));

// Auth routes
app.use("/api/auth", authRoutes);

// --- Crop Price Data (Starter data) ---
let crops = [
  { name: "Wheat", price: 2200 },
  { name: "Rice", price: 3100 },
  { name: "Maize", price: 1800 },
  { name: "Cotton", price: 5500 },
  { name: "Sugarcane", price: 3000 },
  { name: "Tomato", price: 25 },
  { name: "Potato", price: 18 },
  { name: "Onion", price: 30 },
  { name: "Chili", price: 120 },
  { name: "Coriander", price: 80 }
];

// Crop API
app.get("/api/crops", (req, res) => {
  res.json(crops);
});

// --- Socket.IO for real-time updates ---
const io = new Server(server, {
  cors: { origin: "http://localhost:3000", credentials: true }
});

io.on("connection", socket => {
  console.log("Client connected:", socket.id);

  // Send initial data
  socket.emit("priceUpdate", crops);

  socket.on("disconnect", () => console.log("Client disconnected:", socket.id));
});

// Simulate price changes every 5 seconds
setInterval(() => {
  crops = crops.map(crop => ({
    ...crop,
    price: Math.max(1, crop.price + (Math.random() * 100 - 50))
  }));

  // Broadcast updated prices to all clients
  io.emit("priceUpdate", crops);
}, 5000);

// --- MongoDB connection ---
const PORT = process.env.PORT || 8000;
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("✅ MongoDB connected");
    server.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  })
  .catch(err => console.error("❌ MongoDB connection failed:", err));
