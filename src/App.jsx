
// import { useState } from 'react';
// import './App.css';
// import NotesLists from './components/NotesList';


// function App() {
// const [notes, setNotes] = useState([
//   { 
//   id: nanoid(),    
//   text: "This is my first mote!",
//   date : "15/04/2023"
// },
//   { 
//   id: nanoid(),    
//   text: "This is my second mote!",
//   date : "15/04/2023"
// },
// ]);

// const addNote = (text) => {
//   console.log(text);
// }

//   return (
//     <>
//      <div className='container'>
//       {/* <NotesList/> */}
//   <NotesLists notes={notes}/>
//      </div>
//     </>
//   )
// }

// export default App

import { useEffect, useState } from 'react';
import { nanoid } from "nanoid"
import './App.css';
import NotesLists from './components/NotesList';
import Search from './components/Search';
import Header from './components/Header';
const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "This is my first mote!",
      date: "20/10/2023"
    },
    {
      id: nanoid(),
      text: "This is my second mote!",
      date: "21/10/2023"
    },
    {
      id: nanoid(),
      text: "This is my third mote!",
      date: "21/10/2023"
    },
  ]);

  const [searchText, setSearchText] = useState('');

  const [darkMode, setDarkMode] = useState(false);

  // useEffect(() => {
  //   const savedNotes = JSON.parse(localStorage.getItem('Note-App'));

  //   if (savedNotes) {
  //     // Load saved notes from localStorage
  //     setNotes(savedNotes);
  //   }
  // }, []);




  // useEffect(() => {
  //   localStorage.setItem('Note-App', JSON.stringify(notes));
  // }, [notes]);


  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };

    // To create a new array for the note
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };


  return (
    <>
      <div className={`${darkMode && 'dark-mode'}`}>
        <div className="container">
          <Header handleToggleDarkMode={setDarkMode} />
          <Search handleSearchNote={setSearchText} />
          <NotesLists
            notes={notes.filter((note) =>
              note.text.toLowerCase().includes(searchText)
            )}
            handleAddNote={addNote}
            handleDeleteNote={deleteNote}
          />
        </div>
      </div>
    </>
  )
}

export default App



