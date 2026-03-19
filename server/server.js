import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import postRoutes  from "./routes/postRoutes.js";

dotenv.config();

// ✅ connect mongo
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);

app.listen(5000, () => {
  console.log("Server running on 5000");
});