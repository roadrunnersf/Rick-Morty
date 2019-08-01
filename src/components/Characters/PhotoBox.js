import React from 'react'
import { Card, CardImg, CardText, CardBody, CardHeader } from 'reactstrap'
//import ContentLoader from "react-content-loader";

const PhotoBox = props => (
  <div
    style={{
      display: 'inline-block',
      width: props.width,
      height: props.height,
      padding: 5
    }}
  >
    <Card style={{ width: '100%', height: '100%' }} outline color="secondary">
      <CardImg src={props.character.image} />
      <CardHeader tag="h6">{props.character.name}</CardHeader>
      <CardBody>
        <CardText>Species: {props.character.species}</CardText>
        <CardText>Gender: {props.character.gender}</CardText>
        <CardText>Status: {props.character.status}</CardText>
      </CardBody>
    </Card>
  </div>
)

// const PhotoBox = props => (
//   <ContentLoader style={{ height: props.height, width: props.width }}>
//     <rect x="5%" y="2%" rx="80" ry="16" width="90%" height="95%" />
//   </ContentLoader>
// );

export default PhotoBox
