import React, { Component } from 'react';

class Navbar extends Component {
    state ={
        isLogin: false,
    }
    componentDidMount(){
        if(localStorage.getItem("token")){
            this.setState({ isLogin: true});
        }
    }
    logout(){
        localStorage.removeItem("token");
        localStorage.removeItem("userid");
        localStorage.removeItem("expanseid");
        window.location.reload(false);
    }
    render() {
        return (
            <div id='cssmenu'>
            <ul>
                <li><a href='/'><span>Home</span></a></li>
                <li><a href='/expencetracker'><span>Expense Tracker</span></a></li>
                {this.state.isLogin ===false && <li><a href='/login'><span>LogIn</span></a></li>}
                {this.state.isLogin && <li onClick={this.logout}><a><span>LogOut</span></a></li>}
                <li><a href='/register'><span>Register</span></a></li>
                <li><a href='/todolist'><span>ToDo</span></a></li>
                
            </ul>
            </div>
        );
    }
}

export default Navbar;