import "dotenv/config";
import express, { Application } from "express";
import cors from "cors";
import rateLimit from "express-rate-limit";
import errorHandler from "./middleware/error";
import apiRoutes from "./routes";

const PORT: number = parseInt(process.env.PORT || "5000", 10);

const app: Application = express();

// Rate Limiting
const limiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 mins
  max: 20,
});
app.use(limiter);
app.set("trust proxy", 1);

// Set static folder
app.use(express.static("public"));

// Routes
app.use("/api", apiRoutes);

// Enable cors
app.use(cors());

// Error handler middleware
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
