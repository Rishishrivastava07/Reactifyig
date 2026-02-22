const express = require("express");
const app = express();
const Note = require("./models/notes.models");

app.use(express.json());

app.post("/notes", (req, res) => {
  const noteData = req.body;
  Note.create({
    title: noteData.title,
    description: noteData.description,
  })
    .then((note) => {
      res.status(201).json({
        message: "Note created successfully",
        note: note,
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/notes", async (req, res) => {
  const notes = await Note.find();
  res.status(200).json({
    notes,
  });
});

app.delete("/notes/:id", async (req, res) => {
  try {
    const noteId = req.params.id;
    const deletedNote = await Note.findOneAndDelete({ _id: noteId });

    if (!deletedNote) {
      return res.status(404).json({
        message: "Note not found",
      });
    }

    res.status(200).json({
      message: "Note deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting note:", error);
    res.status(500).json({
      message: "Error deleting note",
    });
  }
});

app.patch('/notes/:id', async (req, res) => {
   const id = req.params.id;
   const description = req.body.description;
    await Note.findOneAndUpdate({_id: id}, {description: description})

   res.status(200).json({
    message: "Note updated successfully"
   })
})

module.exports = app;
