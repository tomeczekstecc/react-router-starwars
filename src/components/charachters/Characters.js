import React, { useEffect, useState, Fragment } from "react";
import { Link } from "react-router-dom";
import Spinner from "../layout/Spinner";
import Nav from "../layout/Nav";
import NavButton from "./NavButton";
import Box from "@material-ui/core/Box";

const Characters = () => {
  useEffect(() => {
    getPeople();
  }, []);

  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(0);
  const [page, setPage] = useState(1);

  const getPeople = async () => {
    await fetch(`https://swapi.co/api/people?page=${page}`)
      .then(res => res.json())
      .then(res => {
        setPeople(res.results);
        setCount(res.count);
      });
    setLoading(false);
  };

  const prevPage = async () => {
    setLoading(true);
setPage(page - 1);

    await getPeople();
  };

  const nextPage = async () => {
    setLoading(true);
    setPage(page + 1);
    await getPeople();
  };

  const lastPage = Math.ceil(count / 10 + 1);

  const styles = {
    box: {
      display: "none"
    }
  };
  return loading ? (
    <Spinner />
  ) : (
    <Fragment>
      <Nav />
      <p>{page}</p>
      <div className="main-container">
        <h3>Chose one of the Characters:</h3>
        {people.map((character, index) => (
          <div key={character.name}>
            <Link
              to={`/characters/${
                character.url
                  .split("https://swapi.co/api/people/")[1]
                  .split("/")[0]
              }`}
            >
              <h4>{character.name}</h4>
            </Link>

            <hr />
          </div>
        ))}
      </div>
      <Box component="div" style={page === lastPage ? styles.box : null}>
        <NavButton offset="right" text="Next" actionPage={nextPage} />
      </Box>

      <Box component="div" style={page === 1 ? styles.box : null}>
        <NavButton offset="left" text="Prev" actionPage={prevPage} />
      </Box>
    </Fragment>
  );
};

export default Characters;
