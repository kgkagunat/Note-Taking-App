const express = require('express');
const fs = require('fs');
const path = require('path');

const { v4: uuidv4 } = require('uuid');

const app = express();
const PORT = process.env.PORT || 3001;

const dataBase = require('./db/db.json');

//===============================================

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

//======================================================================================
//* GET request to render index.html and notes.html

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/notes.html'));
});

//======================================================================================
//* GET request to get all notes from the db.json file

app.get('/api/notes', (req, res) => {
    fs.readFile('./db/db.json', 'utf8', (err, data) => {
        if (err) throw err;
        res.json(JSON.parse(data));
        console.log(data);      // for testing
    });
});

//======================================================================================
//* POST request to add a new note to the db.json file

app.post('/api/notes', (req, res) => {
    
  console.info(`${req.method} request received`);
  
  const newNote = req.body;
  newNote.id = uuidv4();

  
  fs.readFile('./db/db.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
    } else {
      const parsedData = JSON.parse(data);
      parsedData.push(newNote);

      fs.writeFile('./db/db.json', JSON.stringify(parsedData, null, 4), 'utf8',
        (err) => {
            if (err) {
                console.error(err);
            } else {
                console.info(`Note with id ${newNote.id} added successfully`);
                res.json(newNote);
            }
        }
      );
    }
  });
});


//======================================================================================
//* DELETE request to delete a note from the db.json file

app.delete('/api/notes/:id', (req, res) => {

  const notesId = req.params.id;

  fs.readFile('./db/db.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
    } else {
      const notesList = JSON.parse(data);
      const filteredNotesList = notesList.filter((note) => note.id !== notesId);
      
      fs.writeFile('./db/db.json', JSON.stringify(filteredNotesList, null, 4), 'utf8', 
        (err) => {
            if (err) {
                console.error(err);
            } else {
                console.info(`Note with id ${notesId} deleted successfully`);
                res.json({ message: `Note with id ${notesId} deleted successfully` });
            }
        }
      );
    }
  });
});


//======================================================================================
//* LISTEN request to listen for requests and start the server

app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`);
});