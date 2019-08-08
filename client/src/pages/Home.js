// dependencies
import React, { Component } from 'react';

//import API
import API from '../services/API';

// any components you want to display
import HelloBootstrap from '../components/HelloBootstrap/HelloBootstrap';


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

    // getBookById = () => {
    //     //do the api call by id
    //     API.findAll()
    //         .then(res => {
    //             this.setState({
    //                 books: res.data 
    //             })
    //         })
    //         .catch(err => {
    //             this.setState({
    //                 message: err
    //             })
    //         })
    // };

    render(){
        console.log(this.state);

        return (
            <div>
                <HelloBootstrap />
                <div>
                    {this.state.message}

                </div>
        
        </div>
        )
    }
}

export default Home;