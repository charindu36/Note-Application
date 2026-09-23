import express from "express";
// const express = require('express')
import notesRoutes from "./routes/notesRoutes.js";
const app = express();

const PORT = 5001;

app.use("/api/notes", notesRoutes);

// app.get("/api/notes", (req,res)=>{
//     res.status(200).send("you got 5 notes");
// })

// app.post("/api/notes", (req,res)=>{
//     res.status(201).json({message:"note created successfully"});
// })

// app.put("/api/notes/:id", (req,res)=>{
//     res.status(200).json({message:"note updated successfully"});
// })

// app.delete("/api/notes/:id", (req,res)=>{
//     res.status(200).json({message:"note deleted successfully"});
// })

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
