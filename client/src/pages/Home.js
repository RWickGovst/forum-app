// dependencies
import React, { Component } from 'react';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
//import API
// eslint-disable-next-line
// import API from '../services/API';
import Button from "react-bootstrap/Button";
// any components you want to display
import HelloBootstrap from '../components/HelloBootstrap/HelloBootstrap';
import CurrentUsers from '../components/CurrentUsers/CurrentUsers';
// import TopicMenu from '../components/TopicMenu/TopicMenu';
import Feed from '../components/Feed/Feed';
import Footer from '../components/Footer/Footer';
import API from "../utils/API"
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Image from 'react-bootstrap/Image';
// import router from '../../routes/api/post';


class Home extends Component {
    state = {
        books: [],
        posts: [],
        message: '',
        postInfo: "",
        loggedIn: false,
        username: null
    };
    createPost = () => {
        console.log("inside the create post function")
        API.createPost(this.state.postInfo).then(res=> console.log(res)).catch( (err) => console.log(err))
    }


    componentDidMount = () => {
       
        this.setState({
            message: 'Component Loaded',
        });
    };

    //
    scrapeCategory = () => {
        console.log(`this.scrape category hit`)
        API.scrapeCategory("technology")
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
    
    handleInputChange =event => {
        const {name, value} =event.target;
        this.setState({
            [name]: value
        })
    }
    handleFormSubmit = event => {
        event.preventDefault();
        this.createPost();
    }

    render(){
        console.log(this.state);

        return (
<div className="container">
    <HelloBootstrap />
<Row>
    <Col xs={2}>
    <Button variant="primary" size="lg" onClick={() => this.scrapeCategory()}>Business</Button>
    <Button variant="primary" size="lg" onClick={() => this.scrapeCategory()}>Technology</Button>
    <Button variant="primary" size="lg" onClick={() => this.scrapeCategory()}>Politics</Button>
    <Button variant="primary" size="lg" onClick={() => this.scrapeCategory()}>Add a Topic</Button>
    
    </Col>
    {/* <Col xs={2}><TopicMenu scrape={(category) => this.scrapeCategory}/></Col> */}
    <Col xs={6}>
    
    <InputGroup>
    
    <InputGroup.Prepend>
    <Col xs={6} md={4}>
      <Image src="/favicon.ico" roundedCircle />
    </Col>
    <Button variant="primary" size="lg" onClick={() => this.createPost()}>Create a Post</Button>
      {/* <InputGroup.Text>Create a Post</InputGroup.Text> */}
    </InputGroup.Prepend>
    <FormControl as="textarea" aria-label="With textarea" handleinputchange = {this.handleInputChange}
    handleFormSubmit ={this.handleformsubmit}/>
  </InputGroup>
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