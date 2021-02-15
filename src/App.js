import { useState, useEffect } from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import List from "./components/List/List";
import Modal from "./components/Modal/Modal";

const LOCAL_STORAGE_KEY = 'storage-myNotes';

function App() {
  
  const [notes, setNotes] = useState([]);

  const [editing, setEditing] = useState(false);
  
  const [currentNote, setCurrentNote] = useState({
    title: '',
    body: '',
    id: ''
  });


  console.log(notes);

  useEffect(() => {
    const storageNotes = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storageNotes) {
      setNotes(storageNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(notes));
  }, [notes]);


  function addNewNote(note) {
    setNotes([...notes, note]);
  }
  
  function deleteNote(id) {
    setNotes(notes.filter((note) => note.id !== id));
  };

  function editNote(note) {
    const { title, body, id } = note;
    setEditing(true);
    setCurrentNote({
      title: title,
      body: body,
      id: id
    });
  }

  function updateNote(id, updatedNote) {
    setEditing(false);
    setNotes(notes.map((note) => (note.id === id ? updatedNote : note)));
  }


  return (
    <div className="main-container">
      <Header />
      <main>
          {editing ? (
              <Modal currentNote={currentNote} updateNote={updateNote} />
            ) : null
          }
          <Form addNewNote={addNewNote} />
          <List notes={notes} deleteNote={deleteNote} editNote={editNote} />
      </main>
    </div>
  );
}

export default App;