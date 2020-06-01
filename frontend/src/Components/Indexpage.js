import React, { Component } from 'react';
import Expencetracker from './Expencetracker';
import Navbar from './Navbar';
import Footer from './footer';
class Indexpage extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <Expencetracker />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Indexpage;