import React from "react";
import Card from "react-bootstrap/Card";
import './style.css';

function Footer() {
    return (
      <div className="container">
        <Card bg="light" text="black" sticky="bottom">
  <Card.Header>Quote</Card.Header>
  <Card.Body>
    <blockquote className="blockquote mb-0">
      <p>
        {' '}
        “It had long since come to my attention that people of accomplishment rarely sat back and let things happen to them. They went out and happened to things."
 {' '}
      </p>
      <footer className="blockquote-footer">
      Leonardo Da Vinci <cite title="Source Title"></cite>
      </footer>
    </blockquote>
  </Card.Body>
</Card>
</div>
    )
}
export default Footer;