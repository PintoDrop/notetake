const express = require("express");
const PORT = 3001;
const app = express();
const path = require("path");
const fs = require("fs");
const notes = require("./db/db.json");
const { v4: uuidv4 } = require('uuid');

const {
  readFromFile,
  readAndAppend,
  writeToFile,
} = require("./helpers/fsUtils");


app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));


app.get("/api/notes", (req, res) => {
  readFromFile("./db/db.json").then((data) => res.json(JSON.parse(data)));
});

app.post("/api/notes", (req, res) => {
  let { title, text } = req.body;
  if (req.body) {
    const newNote = {
      title,
      text,
      id: uuidv4(),
    }
    readAndAppend(newNote, './db/db.json');
    res.json('New note added')
  } else {
    res.errored('Error when adding new note');
  }
  });

  app.delete("/api/notes/:id", (req, res) => {
    const id = req.params.id
    readFromFile('./db/db.json')
    .then((data) => JSON.parse(data))
    .then((json)=>{
      const result = json.filter((note) => note.id !== id);
      writeToFile("./db/db.json", result);
      res.json('Note is removed');
    })
  })
  
  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
  });
  
  app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "notes.html"));
  });


app.listen(PORT, () => console.log(`Go to http://localhost:${PORT}`));

