// dependencies
import React, { Component } from 'react';

//import API
import API from '../services/API';

// any components you want to display


class FindId extends Component {
    state = {
        books: [],
        message: ''
    };

    componentDidMount = () => {
        //what happens when we load
        this.getBookById()
    };

    getBookById = () => {
        //do the api call by id
        API.findAll()
            .then(res => {
                this.setState({
                    books: res.data 
                })
            })
            .catch(err => {
                this.setState({
                    message: err
                })
            })
    };

    render(){
        console.log(this.state);

        return (
            <div>
        {this.state.books ? this.state.books.map(oneBook => (
                    <div>
                        <p>{oneBook.title}</p>
                        <p>{oneBook.author}</p>
                    </div>
                )) : (
                    <h1>{this.state.message}</h1>
                )}
        </div>
        )
    }
}

export default FindId;