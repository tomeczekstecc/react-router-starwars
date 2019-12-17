import React, { useEffect, useState, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Spinner from '../layout/Spinner';

const Characters = () => {
  useEffect(() => {
    getPeople();
  }, []);
  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(0);
  const [page, setPage] = useState(2);

  const getPeople = async () => {
    setPage(2);
    await fetch(`https://swapi.co/api/people?page=${page}`)
      .then(res => res.json())
      .then(res => {
        setPeople(res.results);
        setCount(res.count);
        console.log(res.results);
        console.log(res.count);
      });
    setLoading(false);
  };

  return loading ? (
    <Spinner />
  ) : (
    <Fragment>
      <div className='main-container'>
        <h3>Chose one of the Characters:</h3>
        {people.map((character, index) => (
          <div key={character.name}>
            <Link
              to={`/characters/${
                character.url
                  .split('https://swapi.co/api/people/')[1]
                  .split('/')[0]
              }`}
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
