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

// --- CORS setup ---
const allowedOrigins = [
  "http://localhost:3000",           // local frontend
  "https://byte-ten.vercel.app"      // deployed frontend
];

app.use(cors({
  origin: function(origin, callback){
    if(!origin) return callback(null, true); // allow Postman or server-to-server requests
    if(allowedOrigins.indexOf(origin) === -1){
      const msg = `The CORS policy for this site does not allow access from the specified Origin.`;
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  credentials: true
}));

// Test route
app.get("/", (req, res) => res.send("Backend running"));

// Auth routes
app.use("/api/auth", authRoutes);


// Crop API
app.get("/api/crops", (req, res) => res.json(crops));

// --- Socket.IO for real-time updates ---
const io = new Server(server, {
  cors: {
    origin: allowedOrigins,
    credentials: true
  }
});

io.on("connection", socket => {
  console.log("Client connected:", socket.id);
  socket.emit("priceUpdate", crops);
  socket.on("disconnect", () => console.log("Client disconnected:", socket.id));
});

// Simulate price changes every 5 seconds
setInterval(() => {
  crops = crops.map(crop => ({
    ...crop,
    price: Math.max(1, crop.price + (Math.random() * 100 - 50))
  }));
  io.emit("priceUpdate", crops);
}, 5000);

// --- MongoDB connection ---
const PORT = process.env.PORT || 8000;

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log("✅ MongoDB connected");
  server.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
})
.catch(err => console.error("❌ MongoDB connection failed:", err));
