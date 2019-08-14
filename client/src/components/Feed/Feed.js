import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import './style.css';

function Feed(props) {
    return (
        <Card border="primary" style={{ width: '100%'}}>
  <Card.Img variant="top" {...props.img} />
  <Card.Body>
    <Card.Title>{props.title}</Card.Title>
    <Card.Text>
      {props.summary}
    </Card.Text>
    {/* eslint-disable-next-line */}
    <Button variant="link"><a target="_blank" href={props.link}>Link to article</a></Button>
    <InputGroup>
    <InputGroup.Prepend>
      <InputGroup.Text>Comment</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl as="textarea" aria-label="With textarea" />
  </InputGroup>
  </Card.Body>
</Card>
    )};

export default Feed;