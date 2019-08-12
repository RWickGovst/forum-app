// dependencies
import React, { Component } from 'react';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
//import API
// eslint-disable-next-line
import API from '../services/API';

// any components you want to display
import HelloBootstrap from '../components/HelloBootstrap/HelloBootstrap';
import CurrentUsers from '../components/CurrentUsers/CurrentUsers';
// import TopicMenu from '../components/TopicMenu/TopicMenu';
import Feed from '../components/Feed/Feed';
import Footer from '../components/Footer/Footer';

class Home extends Component {
    state = {
        books: [],
        posts: [],
        message: ''
    };

    componentDidMount = () => {
        //what happens when we load
        // console.log(`component did mount started`)
        // this.scrapeCategory();
        // console.log(`component did mount launched scrape`)
        this.setState({
            message: 'Component Loaded'
        });
    };

    // scrapeCategory = () => {
    //     console.log(`this.scrape category hit`)
    //     API.scrapeCategory("technology")
    //     // API.scrapeCategory("politics")
    //         .then(dataScraped => {
    //             console.log(dataScraped);
    //             this.setState({
    //                 posts: dataScraped.data
    //             });
    //         })
    //         .catch(err => {
    //             console.log(err)
    //         })
    // }

    scrapeCategory = () => {
        console.log(`this.scrape category hit`)
        API.scrapeCategory("technology")
        // API.scrapeCategory("politics")
            .then(dataScraped => {
                console.log(dataScraped);
                this.setState({
                    posts: dataScraped.data
                });
            })
            .catch(err => {
                console.log(err)
            })
    }

   

    render(){
        console.log(this.state);

        return (
<div className="container">
    <HelloBootstrap />
<Row>
    <Col xs={2}>
        <button onClick={() => this.scrapeCategory()}>Scrape Technology</button>
        {/* <button onClick={() => this.scrapeCategory()}>Scrape Politics</button> */}
    </Col>
    {/* <Col xs={2}><TopicMenu scrape={(category) => this.scrapeCategory}/></Col> */}
    <Col xs={6}>
        {this.state.posts ? (
            this.state.posts.map((singlePost, i) => (
                <Feed key={i} img={singlePost.img} title={singlePost.title} summary={singlePost.summary} link={singlePost.link} />
            ))
        ) : (
            <h1>Data not loaded/loading</h1>
        )
        }
    </Col>
    <Col><CurrentUsers /></Col>
</Row>
    <Footer /> 
</div>

        )
    }
}

export default Home;