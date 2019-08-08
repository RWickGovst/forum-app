import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import InputGroup from "react-bootstrap/InputGroup";
// import FormControl from "react-bootstrap/FormControl";

import './style.css';

function TopicMenu() {
  return (

<div className="container">


<InputGroup className="mb-3">
    <DropdownButton
      as={InputGroup.Prepend}
      variant="outline-secondary"
      title="Dropdown"
      id="input-group-dropdown-1"
    >
      <Dropdown.Item href="#">Business</Dropdown.Item>
      <Dropdown.Item href="#">Politics</Dropdown.Item>
      <Dropdown.Item href="#">Children</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item href="#">Suggest a Topic</Dropdown.Item>
    </DropdownButton>
    {/* <FormControl aria-describedby="basic-addon1" /> */}
  </InputGroup>

  </div>

  )}

  export default TopicMenu;