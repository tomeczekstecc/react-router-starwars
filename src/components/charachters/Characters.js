import React, { useEffect, useState, Fragment } from "react";
import { Link } from "react-router-dom";
import Spinner from "../layout/Spinner";

const Characters = () => {
  useEffect(() => {
    getPeople();
  }, []);
  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(true);

  const getPeople = async () => {
    const data = await fetch("https://swapi.co/api/people/")
      .then(res => res.json())
      .then(res => setPeople(res.results));
    setLoading(false);
  };

  return (
    loading ? <Spinner/> :
    <Fragment>

      <div className="container">
        <h3>Chose one of the Characters:</h3>
        {people.map(character => (
          <div key={character.url.substr(character.url.length - 2, 1)}>
            <Link
              to={`/characters/${character.url.substr(
                character.url.length - 2,
                1
              )}`}
            >
              <h4>{character.name}</h4>
            </Link>

            <hr />
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default Characters;
