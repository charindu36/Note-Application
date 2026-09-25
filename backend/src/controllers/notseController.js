import Note from "../models/Note.js";

export async function getAllNotes(req, res) {
  try {
    const notes = await Note.find().sort({ createdAt: -1 });
    res.status(200).json(notes);
  } catch (error) {
    console.log("AllNotes error", error);
    res.status(500).json({ message: "internal server error" });
  }
}

export async function getNoteById(req, res) {
  try {
    const note = await Note.findById(req.params.id);
    if (!note) return res.status(404).json({ message: "note not found" });
    res.status(200).json(note);
  } catch (error) {
    console.log("get note error", error);
    res.status(500).json({ message: "internal server error" });
  }
}

export async function createNotes(req, res) {
  try {
    const { title, content } = req.body;
    const note = new Note({ title, content });
    const savedNote = await note.save();
    res.status(201).json(savedNote);
  } catch (error) {
    console.log("create note error", error);
    res.status(500).json({ message: "internal server error" });
  }
}

export async function updateNotes(req, res) {
  try {
    const { title, content } = req.body;
    const updatedNote = await Note.findByIdAndUpdate(
      req.params.id,
      { title, content },
      { new: true },
    );
    if (!updatedNote) {
      return res.status(404).json({ message: "note not found" });
    }
    res.status(200).json(updatedNote);
  } catch (error) {
    console.log("update note error", error);
    res.status(500).json({ message: "internal server error" });
  }
}

export async function deleteNotes(req, res) {
  try {
    const deletedNote = await Note.findByIdAndDelete(req.params.id);
    if (!deletedNote) {
      return res.status(404).json({ message: "note not found" });
    }
    res.status(200).json({ message: "note deleted successfully" });
  } catch (error) {
    console.log("delete note error", error);
    res.status(500).json({ message: "internal server error" });
  }
  res.status(200).json({ message: "note deleted successfully" });
}
