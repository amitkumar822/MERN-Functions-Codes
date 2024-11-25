import express from "express";
import cors from "cors";
import morgan from "morgan";
import paymentRoutes from "./routes/payment.routes.js";
import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/payment", paymentRoutes);

const PORT = 5000;

// Database connection
connectDB();

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
