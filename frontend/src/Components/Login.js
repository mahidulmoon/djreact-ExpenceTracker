import React, { Component } from 'react';
import axios from 'axios';
class Login extends Component {
    state = {
        logindata:{
            username:'',password:''
        },
        token:[]
    }

    inputchange= e =>{
        const cred = this.state.logindata;
        cred[ e.target.name ] = e.target.value;
        this.setState({ logindata: cred });
    }
    onsubmit = e =>{
        e.preventDefault();
        axios.post('http://127.0.0.1:8000/auth/',this.state.logindata).then(response => {
            this.setState({ token: response.data }); 
            localStorage.setItem('token', this.state.token.token);
            alert("Success");
            window.location.reload(false);
        }).catch( error => alert("Username And Password isnot matched!!!"))
    }
    render() {
        return (
            <div className="wrapper fadeInDown">
                <div id="formContent">
                    
                    <h2 className="active"> Sign In </h2>
                    <h2 className="inactive underlineHover">Sign Up </h2>

                    
                    <form>
                    <input type="text" id="login" className="fadeIn second" name="username" value={this.state.logindata.username} onChange={this.inputchange} placeholder="Username" />
                    <input type="text" id="password" className="fadeIn third" name="password" value={this.state.logindata.password} onChange={this.inputchange} placeholder="password" />
                    <input type="submit" className="fadeIn fourth" onClick={this.onsubmit} value="Log In" />
                    </form>

                    
                    <div id="formFooter">
                    <a className="underlineHover" href="/login">Forgot Password?</a>
                    </div>

                </div>
            </div>
        );
    }
}

export default Login;