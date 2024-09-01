import React, { useState } from "react";
import Notelist from "./notelist";
import {nanoid} from 'nanoid';
import Search from "./search";
import Header from "./Header";
function App() {
    const [notes, setNotes] = useState([
        {
            id:nanoid(),
            text: "this is my first note",
            date:'15/04/2024',
        }, 
        {
            id:nanoid(),
            text: "this is my second note",
            date:'15/04/2024',
        },
        {
            id:nanoid(),
            text: "this is my third note",
            date:'15/04/2024',
        },
        {
            id:nanoid(),
            text: "this is my fourth note",
            date:'20/04/2024',
        }
    ]);
    const addnote = (text) => {
        const date = new Date();
        const newNote = {
            id:nanoid(),
            text: text,
            date: date.toLocaleDateString()
        }
        const newNotes = [...notes, newNote];
        // console.log(notes);
        // console.log(newNotes);
        setNotes(newNotes);
    }
    const [darkMode, setDarkMode] = useState(false);
    console.log(darkMode);
    const deleteNote = (id)=>{
        const newNote = notes.filter((note) => note.id !== id);
        setNotes(newNote);
    }
    const [searchText, setSearchText] = useState('');

    return (
        <div className={darkMode ? 'dark-mode' : ''}>
            <div className="container">
                <Header setDarkMode = {setDarkMode}/>
                <Search setSearchText = {setSearchText}/>
                <Notelist 
                notes = {notes.filter((note) => note.text.toLowerCase().includes(searchText)) }
                addnote = {addnote}
                handleDeleteNote={deleteNote}
                ></Notelist>
            </div>
        </div>
    );
}

export default App;