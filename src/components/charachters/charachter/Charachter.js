import React, { useEffect, useState, Fragment } from 'react';
import Spinner from '../../layout/Spinner';
import Nav from '../../layout/Nav'

const Character = ({ match }) => {
  useEffect(() => {
    getCharacter();

  }, []);
  const [character, setCharacter] = useState([]);
  const [loading, setLoading] = useState(true);



  const getCharacter = async () => {
    await fetch(`https://swapi.co/api/people/${match.params.id}`)
      .then(res => res.json())
      .then(res => {
        setCharacter(res);
        setLoading(false);
      });
  };


  return loading ? (
    <Spinner />
  ) : (
    <Fragment>
      <Nav/>
      <div className='main-container'>
        <h3>
          See API detail on <span>{character.name}</span> :{' '}
        </h3>
        <p>Mass: {character.mass}</p>
        <p>Height: {character.height}</p>
        <p>Hair color: {character.hair_color}</p>
        <p>page: {character.url}</p>
      </div>
    </Fragment>
  );
};

export default Character;
