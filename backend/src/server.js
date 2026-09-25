import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import rateLimiter from "./middleware/rateLimiter.js";

dotenv.config();

const app = express();

app.use(express.json())//this middleware pass the json bodies
app.use(rateLimiter)

//custom middleware
// app.use((req,res,next)=>{
//   console.log("new request")
//   next();
// })

const PORT=process.env.PORT || 5001;

app.use("/api/notes", notesRoutes);

connectDB().then(()=>{
  app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
})



