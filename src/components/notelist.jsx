import React from "react";
import Note from "./note";
import Addnote from "./addnote";
function Notelist({notes, addnote, handleDeleteNote}) {
    return (
        <div className='note-list'>
            {notes.map((note) => (
                <Note handleDeleteNote = {handleDeleteNote} id = {note.id} text = {note.text} date = {note.date} />
            ))}
            <Addnote addnote = {addnote}/>
        </div>
    )
}
export default Notelist;