import React, {useState} from "react";

function Addnote({addnote}) {
    const [noteText, setNoteText] = useState('');
    const handleChange = (event) => {
        if(characterLimit - event.target.value.length >= 0) {
            setNoteText(event.target.value);
        }
    };
    const characterLimit = 200;
    const handleClick = () => {
        if(noteText.trim().length > 0) {
            addnote(noteText);
            setNoteText('')
        }
    }
    return (
        <div className="note new">
            <textarea
                rows='8' cols='10' placeholder="type to add note..."
                value={noteText}
                onChange={handleChange}
                
            ></textarea>
            <div className="note-footer">
                <small>{characterLimit - noteText.length} reamaining</small>
                <button className="save" onClick={handleClick}>
                    Save
                </button>
            </div>
        </div>
    );
}
export default Addnote; 