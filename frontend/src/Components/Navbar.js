import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <div id='cssmenu'>
            <ul>
                <li><a href='/'><span>Home</span></a></li>
                <li><a href='/expencetracker'><span>Expense Tracker</span></a></li>
                <li><a href='/login'><span>LogIn</span></a></li>
                <li><a href='/register'><span>Register</span></a></li>
                <li><a href='/todolist'><span>ToDo</span></a></li>
                
            </ul>
            </div>
        );
    }
}

export default Navbar;