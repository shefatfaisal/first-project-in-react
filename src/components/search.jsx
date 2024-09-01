import React from "react";
import { MdSearch } from "react-icons/md";

const Search = ({setSearchText}) =>{
    return (
        <div className="search">
            <MdSearch className="search-icons" size = '1.3rem'/>
            <input onChange={(event) => {
                setSearchText(event.target.value);
            }} type="text" placeholder="type to search" />
        </div>
    );
};
export default Search;