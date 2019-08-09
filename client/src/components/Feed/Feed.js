import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import './style.css';

function Feed(props) {
    return (
        <Card style={{ width: '100%'}}>
  <Card.Img variant="top" {...props.img} />
  <Card.Body>
    <Card.Title>{props.title}</Card.Title>
    <Card.Text>
      {props.summary}
    </Card.Text>
    {/* eslint-disable-next-line */}
    <Button variant="primary"><a target="_blank" href={props.link}>Check It out</a></Button>
  </Card.Body>
</Card>
    )};

export default Feed;