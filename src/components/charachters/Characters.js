import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom'

const Characters = () => {
  useEffect(() => {
    getPeople();
  }, []);
  const [people, setPeople] = useState([]);

  const getPeople = async () => {
    const data = await fetch("https://swapi.co/api/people?limit=20")
      .then(res => res.json())
      .then(res => setPeople(res.results));

  };

  return (
    <div className="container">
      <h3>Chose one of the Characters:</h3>
     {people.map(character => (

        <div key={character.url.substr(character.url.length - 2, 1)}>
          <Link to={`/characters/${character.url.substr(character.url.length - 2, 1)}`}><h4>{character.name}</h4></Link>
      <p>mass: {character.mass}</p>

      <hr/>
        </div>
      ))}
    </div>
  );
};

export default Characters;
