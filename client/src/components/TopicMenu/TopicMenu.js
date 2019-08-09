import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import InputGroup from "react-bootstrap/InputGroup";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import Button from "react-bootstrap/Button";
// import FormControl from "react-bootstrap/FormControl";

import './style.css';

function TopicMenu() {
  return (

<div className="container">


{/* <InputGroup className="mb-3"> */}


  <ButtonToolbar>
    <Button variant="primary" size="lg" onClick={props.scrape(value)}>
      Technology
    </Button>
    <Button variant="primary" size="lg" onClick={props.scrape(value)}>
      Political
    </Button>
  </ButtonToolbar>
    {/* <DropdownButton
      as={InputGroup.Prepend}
      variant="outline-secondary"
      title="Dropdown"
      id="input-group-dropdown-1"
    >
      <Dropdown.Item href="#">Business</Dropdown.Item>
      <Dropdown.Item href="#">Politics</Dropdown.Item>
      <Dropdown.Item href="#">Technology</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item href="#">Suggest a Topic</Dropdown.Item>
    </DropdownButton> */}
    {/* <FormControl aria-describedby="basic-addon1" /> */}
  {/* </InputGroup> */}

  </div>

  )}

  export default TopicMenu;