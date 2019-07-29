import React, { useState } from "react";
import { useDrop } from "react-dnd";
import ItemTypes from "./ItemTypes";
import { Card, CardImg, CardHeader, CardText, CardBody } from "reactstrap";

const Pic = ({ image, name, accept, lastDroppedItem, onDrop }) => {
  const [match, setMatch] = useState(false);
  const [{ canDrop, isOver }, drop] = useDrop({
    accept: ItemTypes.TITLE,
    drop: onDrop,
    collect: monitor => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop()
    })
  });
  const isActive = canDrop && isOver;
  let opacity = 1;
  if (isActive) {
    opacity = 0.8;
  } else if (canDrop) {
    opacity = 1;
  }

  // lastDroppedItem && setMatch(lastDroppedItem.name === name);
  // console.log(match);

  return (
    <div
      ref={drop}
      style={{ display: "inline-block", width: 250, height: 310, padding: 5 }}
    >
      <Card
        inverse
        color={
          (lastDroppedItem &&
            (lastDroppedItem.name == name ? "success" : "primary")) ||
          "primary"
        }
      >
        <CardImg src={image} style={{ opacity }} />
        <CardHeader className="text-center">
          {lastDroppedItem && lastDroppedItem.name}
        </CardHeader>
        {lastDroppedItem && (
          <CardHeader>
            {lastDroppedItem.name === name ? "true" : "false"}
          </CardHeader>
        )}
        {isActive ? <CardText>Release to drop</CardText> : ""}
      </Card>
    </div>
  );
};
export default Pic;
