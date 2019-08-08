// dependencies
import React, { Component } from 'react';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
//import API
// eslint-disable-next-line
import API from '../services/API';

// any components you want to display
import HelloBootstrap from '../components/HelloBootstrap/HelloBootstrap';
import TopicMenu from '../components/TopicMenu/TopicMenu';
import CurrentUsers from '../components/CurrentUsers/CurrentUsers';

class Home extends Component {
    state = {
        books: [],
        message: ''
    };

    componentDidMount = () => {
        //what happens when we load
        // this.getBookById()
        this.setState({
            message: 'Component Loaded'
        });
    };

    render(){
        console.log(this.state);

        return (
            <div>
                <HelloBootstrap />
                <Row>
    <Col><TopicMenu /></Col>
    <Col xs={6}>2 of 3</Col>
    <Col><CurrentUsers /></Col>
  </Row>
                 
                    

                </div>
        
        
        )
    }
}

export default Home;