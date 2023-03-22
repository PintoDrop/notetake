const express = require('express');
const PORT = 3001;
const app = express();
const path = require('path');
const fs = require('fs');
// const notes = require('./db/db.json');


app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true}));


app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"))
});

app.get("/notes", (req,res) => {
  res.sendFile(path.join(__dirname, "public", "notes.html"))
});




app.listen(PORT, () => 
  console.log(`Go to http://localhost:${PORT}`)
);