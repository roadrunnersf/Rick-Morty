import React from "react";
import Guesser from "./Guesser";
import { DndProvider } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";

import { Helmet } from "react-helmet";

const Guess = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <Helmet>
        <title>Character Guesser - Rick & Morty</title>
      </Helmet>

      <Guesser />
    </DndProvider>
  );
};

export default Guess;
