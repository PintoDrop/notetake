const express = require('express');
const PORT = 3001;
const app = express();
const path = require('path');
const fs = require('fs');
const notes = require('./db/db.json');

// const api = require('./routes');

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true}));


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"))
});

app.get('/notes', (req,res) => {
  res.sendFile(path.join(__dirname, "public", "notes.html"))
});

app.get('/api/notes', (req, res) => {
  res.json(notes)
})

app.post('/api/notes', (req, res) => {
  let newNote = {
    title: req.body.title,
    text: req.body.text,
  }
  // notes.push(newNote)
  // fs.writeFileSync(path.join(__dirname, 'db.json'), JSON.stringify(notes), err => {
  //   if(err) { console.log('There was an error!') }
  //   res.json(newNote)
  // })
})

app.listen(PORT, () => 
  console.log(`Go to http://localhost:${PORT}`)
);



// app.get("/api/notes", (req, res) =>{
//   res.json(notes) 
// })

// app.get('../db/db.json', (req, res) => {
//   res.json(notes)
// })


// if(err) {
//   console.log(err)
// }
// console.log(notes)

// to add/read notes to db.json:
// fs.readFile("./db/db.json")

// const notes = JSON.parse(data)
// notes.push(newNote)

// fs.writeFile("./db/db.json", JSON.stringify(notes) => {
//   ? console.log(notes);
//   : console.log(notes);
// })
