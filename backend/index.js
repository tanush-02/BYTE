import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";


const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;
const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/api/auth", authRoutes);



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