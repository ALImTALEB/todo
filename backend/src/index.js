import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import "dotenv/config";
import usersRoutes from "./routes/users.js";
import authRoutes from "./routes/auth.js";

mongoose
  .connect(process.env.MONGODB_CONNECTION_STRING)
  .then(() => console.log("Connected to database!"))
  .catch((err) => console.error("Connection error", err));

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/users", usersRoutes);
app.use("/api/auth", authRoutes);

app.listen(2000, () => {
  console.log("Server started on localhost: 2000");
});
