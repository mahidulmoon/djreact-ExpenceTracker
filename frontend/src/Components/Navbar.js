import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <div id='cssmenu'>
            <ul>
                <li><a href='/'><span>Home</span></a></li>
                <li><a href=''><span>Products</span></a></li>
                <li><a href=''><span>Company</span></a></li>
                <li><a href=''><span>Contact</span></a></li>
                
            </ul>
            </div>
        );
    }
}

export default Navbar;