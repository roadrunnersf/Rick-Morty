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

  const [scorer, setScorer] = useState([]);

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

      setScorer(prevState =>
        prevState.map(obj => {
          if (obj.hasOwnProperty(pics[index].name)) {
            return { [pics[index].name]: item.name };
          } else {
            return obj;
          }
        })
      );
    },
    [droppedBoxTitles, pics]
  );
  useEffect(() => {
    const charIDs = [1, 2, 3]; //randList(493, 6);

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
        setScorer(jsonResponse.map(o => ({ [o.name]: undefined })));
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
            <Score scorer={scorer} total={6} max={pics.length} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Guesser;
