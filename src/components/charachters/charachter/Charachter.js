import React, { useEffect, useState, Fragment } from "react";
import Spinner from '../../layout/Spinner'

const Character = ({match}) => {
  useEffect(() => {
    getCharacter();
    console.log(match);
  }, []);
  const [character, setCharacter] = useState([]);
  const [loading, setLoading] = useState(true)

  const getCharacter = async () => {
    const data = await fetch(`https://swapi.co/api/people/${match.params.id}`).then(res => res.json()).then(res => {
      setCharacter(res)
      setLoading(false)
    })
  };
console.log(character);



  return (
    loading ? (<Spinner/>) :
    <Fragment>
<h3>See API detail on <span>{character.name}</span> : </h3>
      <p>Mass: {character.mass}</p>
      <p>Height: {character.height}</p>
      <p>Hair color: {character.hair_color}</p>
 </Fragment>);
};

export default Character;
