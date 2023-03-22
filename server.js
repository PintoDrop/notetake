const express = require('express');
const PORT = 3001;
const app = express();
const path = require('path');


app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true}));



app.listen(PORT, () => 
  console.log(`Listening at https://localhost:${PORT}`)
);