import { useState } from "react";
import searchStyles from "./searchBar.module.css";

export default function SearchBar({ onSearch }) {
  const [id, setId] = useState("");
  const [idnumber, setIdNumber] = useState([]);

  const handleChange = (event) => {
    setId(event.target.value);
  };
  
  const handleAdd = () => {
    if (idnumber.includes(id)) {
      alert("¡El personaje con el id digitado ya existe!");
    } else {
      setIdNumber([...idnumber, id]);
      onSearch(id);
      setId('')
    }
  };

  const handleKeyDown = (event) => {
    if(event.keyCode === 13){
      if (idnumber.includes(id)) {
        alert("¡El personaje con el id digitado ya existe!");
      } else {
        setIdNumber([...idnumber, id]);
        onSearch(id);
        setId('')
      }
    }
  }

  return (
    <div className={searchStyles.searchContainer}>
      <input
        className={searchStyles["searchContainer-input"]}
        type="search"
        placeholder="Search character by ID"
        onChange={handleChange}
        value={id}
        onKeyDown={handleKeyDown}
      />
      <button
        className={searchStyles["searchContainer-button"]}
        onClick={handleAdd}
      >
        Agregar
      </button>
    </div>
  );
}
