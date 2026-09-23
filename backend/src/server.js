import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();

connectDB();

const PORT=process.env.PORT || 5001;

app.use("/api/notes", notesRoutes);


app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});


//mongodb+srv://charindumadhusanka801_db_user:oR1WdpnXyvM0DyCC@cluster0.wkth6sd.mongodb.net/?appName=Cluster0