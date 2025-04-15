'use client'


import { useState } from "react";

export default function SearchBar() {

  const [ term, setTerm ] = useState(); 
  const [searchTerm, setSearchTerm ] = useState(); 

  const handleInput = (event) => {
    const input = event.target.value.toLowerCase();
    setTerm(input);
    
  };
  
  
  const handleSearch = () => {
    if (!term || term.trim() === "") {
      alert("Search cannot be empty");
      setQuery("");
    } else {
      setSearchTerm(term);
      setTerm("");
    }
  };


  return (
    <div className="row m-3 col-md-4 ">
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control "
          placeholder="Search Key word here"
          value={term}
          onChange={handleInput}
        />
        <button
          className="btn btn-outline-secondary"
          type="button"
          id="button-addon2"
        onClick={handleSearch}
        >

          Button
        </button>
      </div>{" "}
      <div className="container col-md-3">
        <img src="C:\Users\mlees\coding\projects\nasa-api-practice\public\NASA-Logo-Large.jpg" alt="NASA Logo" />
      </div>
    </div>
  );
}
