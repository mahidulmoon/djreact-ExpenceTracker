import React, { Component } from 'react';
import axios from 'axios';
class Register extends Component {
    state={
        register:{
            username:'',password:'',email:'',firstname:'',lastname:''
        }
    }

    inputchange= e =>{
        const cred = this.state.register;
        cred[ e.target.name ] = e.target.value;
        this.setState({ register: cred });

    }
    onsubmit= e =>{
        e.preventDefault();
        axios.post('http://127.0.0.1:8000/todoapp/registration/',this.state.register).then(response => alert("Success")).catch(error => alert("Please Check Your Input"))
    }

    render() {
        return (
            <div class="wrapper fadeInDown">
                <div id="formContent">
                    
                    <h2 class="inactive underlineHover"> Sign In </h2>
                    <h2 class="active">Sign Up </h2>

                    
                    <form>
                    <input type="text" id="login" class="fadeIn second" name="username" value={this.state.register.username} onChange={this.inputchange} placeholder="username" />
                    <input type="text" id="password" class="fadeIn third" name="password" value={this.state.register.password} onChange={this.inputchange} placeholder="password" />
                    <input type="text" id="login" class="fadeIn second" name="email" value={this.state.register.email} onChange={this.inputchange} placeholder="email" />
                    <input type="text" id="password" class="fadeIn third" name="firstname" value={this.state.register.firstname} onChange={this.inputchange} placeholder="firstname" />
                    <input type="text" id="password" class="fadeIn third" name="lastname" value={this.state.register.lastname} onChange={this.inputchange} placeholder="lastname" />
                    <input type="submit" class="fadeIn fourth" onClick={this.onsubmit} value="Register" />
                    </form>

                    
                    <div id="formFooter">
                    <a class="underlineHover" href="/login">Login?</a>
                    </div>

                </div>
            </div>
        )
    }
}

export default Register;