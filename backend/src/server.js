import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import rateLimiter from "./middleware/rateLimiter.js";
import cors from "cors";

dotenv.config();

const app = express();

app.use(cors({
  origin: "http://localhost:5173",
}))
app.use(express.json())//this middleware pass the json bodies
app.use(rateLimiter)


const PORT=process.env.PORT || 5001;

app.use("/api/notes", notesRoutes);

connectDB().then(()=>{
  app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
})



