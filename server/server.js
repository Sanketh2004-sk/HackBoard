import express from "express";
import cors from "cors";
import userRoutes from "./routes/userRoutes.js"
import mongoose  from "mongoose";
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/users",userRoutes);

app.get("/", (req, res) => {
  res.send("HackBoard API running");
});
app.get("/users", async (req, res) => {
  const users = await prisma.user.findMany();
  res.json(users);
});

app.listen(5000, () => {
  console.log("Server running on 5000");
});
