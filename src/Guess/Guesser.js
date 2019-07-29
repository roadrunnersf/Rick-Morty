import React, { useState, useEffect, useCallback } from "react";
import update from "immutability-helper";
import { Container, Row, Col } from "reactstrap";

import { randList, shuffle } from "./../Functions";
import ItemTypes from "./ItemTypes";

import Pic from "./Pic";
import Title from "./Title";
import Score from "./Score";
import NavBar from "../NavBar";

const Guesser = () => {
  const [pics, setPics] = useState([]);
  const [titles, setTitles] = useState([]);
  const [scoreTotal, setScoreTotal] = useState(null);
  const [scoreMax, setScoreMax] = useState(null);

  const [droppedBoxTitles, setDroppedBoxTitles] = useState([]);
  function isDropped(boxTitle) {
    return droppedBoxTitles.indexOf(boxTitle) > -1;
  }

  const handleDrop = useCallback(
    (index, item) => {
      const { name } = item;
      setDroppedBoxTitles(
        update(droppedBoxTitles, name ? { $push: [name] } : { $push: [] })
      );
      setPics(
        update(pics, {
          [index]: {
            lastDroppedItem: {
              $set: item
            }
          }
        })
      );
      console.log(item.name);
      console.log(pics[index].name);
      console.log(item.name === pics[index].name);
    },
    [droppedBoxTitles, pics]
  );

  useEffect(() => {
    const charIDs = randList(493, 6);

    fetch(`https://rickandmortyapi.com/api/character/${charIDs}`)
      .then(response => response.json())
      .then(jsonResponse => {
        setPics(
          shuffle(jsonResponse).map(obj => ({
            ...obj,
            accepts: ItemTypes.TITLE,
            lastDroppedItem: null
          }))
        );
        setTitles(
          jsonResponse
            .slice()
            .sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0))
            .map(obj => ({ ...obj, type: ItemTypes.TITLE }))
        );
      });
  }, []);

  return (
    <div>
      <NavBar />
      <Container fluid={true}>
        <Row>
          <Col xs="10">
            {pics.map(({ accepts, lastDroppedItem, image, name }, index) => (
              <Pic
                image={image}
                name={name}
                accept={accepts}
                lastDroppedItem={lastDroppedItem}
                onDrop={item => handleDrop(index, item)}
                key={index}
              />
            ))}
          </Col>
          <Col xs="2">
            {titles.map(({ name, type }, index) => (
              <Row key={index}>
                <Title
                  name={name}
                  type={type}
                  isDropped={isDropped(name)}
                  key={index}
                />
              </Row>
            ))}
          </Col>
        </Row>
        <Row>
          <Col>
            <Score total={scoreTotal} max={pics.length} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Guesser;
