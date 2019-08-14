// home.js contains an image — it’s a page we’ll redirect to after login. It’s not authenticated. The username will display with a greeting if they are logged in.

import React, { Component } from 'react';

class Home extends Component {

    constructor() {
        super()
    }

    render() {
        const imageStyle = {
            width: 960
        }
        return (
            <div>
                <p>Social Media Forums</p>
                <img style={imageStyle} src="https://images.pexels.com/photos/257360/pexels-photo-257360.jpeg?auto=compress&cs=tinysrgb&h=350" />
            </div>
        )
    }
}

export default Home;