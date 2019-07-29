import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import { Helmet } from "react-helmet";

import { randList, shuffle } from "./Functions";

import PhotoBox from "./PhotoBox";
import NavBar from "./NavBar";

const Characters = props => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${randList(493, 20)}`)
      .then(response => response.json())
      .then(jsonResponse => {
        setCharacters(shuffle(jsonResponse));
      });
    setLoading(false);
  }, []);
  console.log(characters);
  return (
    <div>
      <Helmet>
        <title>Character Viewer - Rick & Morty</title>
      </Helmet>

      <NavBar />

      {loading ? (
        <h1>loading...</h1>
      ) : (
        characters.map(character => (
          <Link to={`/characters/${character.id}`}>
            <PhotoBox character={character} width={250} height={450} />
          </Link>
        ))
      )}
    </div>
  );
};

// filter(photo => photo.name.toLowerCase().includes("rick") && photo.name !== "Morty Jr's interviewer").
export default Characters;
