import React, { useState } from 'react';
import './input.css';

function Input() {

  const [query, setQuery] = useState("");
  console.log(query);

  return (
    <div className="Input">
        <p>Agenda</p>
        <input
          className="search"
          placeholder="Procurar..."
          onChange={(e) => setQuery(e.target.value.toLowerCase())}
        />
    </div>
  );
}

export default Input;
