import React, { Component } from 'react';
import Expencetracker from './Expencetracker';
import Navbar from './Navbar';
import Login from './Login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Register from './Register';
import Body from './Body';
import Footer from './footer';
class Indexpage extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <Router>
                    <Body>
                        <Switch>
                            <Route path='/expencetracker' exact component={Expencetracker} />
                            <Route path='/login' exact component={Login} />
                            <Route path='/register' exact component={Register} />
                        </Switch>
                    </Body>
                </Router>
                <Footer />
            </React.Fragment>
        );
    }
}

export default Indexpage;