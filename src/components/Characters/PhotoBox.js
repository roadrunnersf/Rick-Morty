import React from 'react'
import { Card, CardImg, CardText, CardBody, CardHeader } from 'reactstrap'
//import ContentLoader from "react-content-loader";

const PhotoBox = ({ width, height, character }) => (
  <div
    style={{
      display: 'inline-block',
      width: width,
      height: height,
      padding: 5
    }}
  >
    <Card style={{ width: '100%', height: '100%' }} outline color="secondary">
      <CardImg src={character.image} />
      <CardHeader tag="h6">{character.name}</CardHeader>
      <CardBody>
        <CardText>Species: {character.species}</CardText>
        <CardText>Gender: {character.gender}</CardText>
        <CardText>Status: {character.status}</CardText>
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
