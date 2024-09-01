import React from "react";

const Header = ({setDarkMode}) => {
    return (
        <div className="header">
            <h1>Notes</h1>
            <button className="save" onClick={() => setDarkMode((previousDarkMode) => !previousDarkMode)} >Toggle Mode</button>
        </div>
    )
}

export default Header;