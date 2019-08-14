import React from "react";
import Card from "react-bootstrap/Card";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

import './style.css';

function CurrentUsers() {
  return (


<Card border="primary" style={{ width: '18rem' }}>
  
  <Card.Body>
    <Card.Title>Current Users</Card.Title>
    <Card.Text>
      UserOne < br />
      UserTwo < br />
      UserThree < br />
    </Card.Text>
    <InputGroup>
    <InputGroup.Prepend>
      <InputGroup.Text>Chat</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl as="textarea" aria-label="With textarea" />
  </InputGroup>
    
    {/* <Button variant="primary">Chat</Button> */}
  </Card.Body>
</Card>

  )}
  export default CurrentUsers;