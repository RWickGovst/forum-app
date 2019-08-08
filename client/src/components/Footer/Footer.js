import React from "react";
import Card from "react-bootstrap/Card";
import './style.css';

function Footer() {
    return (
        <Card bg="dark" text="white" sticky="bottom">
  <Card.Header>Quote</Card.Header>
  <Card.Body>
    <blockquote className="blockquote mb-0">
      <p>
        {' '}
        You're gonna eat lightnin' and you're gonna crap thunder!
 {' '}
      </p>
      <footer className="blockquote-footer">
        Mickey <cite title="Source Title">From Rocky</cite>
      </footer>
    </blockquote>
  </Card.Body>
</Card>
    )
}
export default Footer;