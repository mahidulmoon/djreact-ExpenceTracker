import React, { Component } from 'react';
import axios from 'axios';
class Todoapp extends Component {
    state = {
        token:[],
        title:'',
        islogin: false,
        todolist:[],
        userid:[],
    }
    componentDidMount(){
        if(localStorage.getItem('token')){
            this.setState({token:localStorage.getItem('token'),islogin:true,userid:localStorage.getItem('userid')});
            axios.get('http://127.0.0.1:8000/todoapp/todolist/').then(response => this.setState({ todolist: response.data }))
        }else{
            alert("Please Login");
        }
    }
    addtodo= e =>{
        if(this.state.islogin){
            axios.post('http://127.0.0.1:8000/todoapp/todo/',this.state).then(response => {
            //this.setState({ token: response.data }); 
            //localStorage.setItem('token', this.state.token.token);
            alert("Success");
            window.location.reload(false);
            }).catch( error => alert("Error to save"+error))
            //console.log(this.state);
        }else{
            alert("please login first");
        }
    }
    inputchange = e =>{
        this.setState({title: e.target.value});
    }
    deletebutton = (e,todo) =>{
        e.preventDefault();
        axios.delete('http://127.0.0.1:8000/todoapp/delete/'+todo+'/').then(response=> alert("done"));
        window.location.reload(false);
    }
    render() {
        return (
            <div id="todoapp">
                <div id="myDIV" className="header">
                    <h2>My To Do List</h2>
                    {/* <h2 style="margin:5px">My To Do List</h2> */}
                    <input type="text" id="myInput" onChange={this.inputchange} placeholder="Title..." />
                    <span className="addBtn" onClick={this.addtodo}>Add</span>
                    </div>

                    <ul id="myUL">
                        
                        
                        {this.state.todolist.map(todo =>{
                            if(parseInt(this.state.userid) === parseInt(todo.user)){
                                return <li>{todo.title} <button onClick={e => this.deletebutton(e, todo.id)}>X</button></li>
                            }
                            
                        })}
                    </ul>
            </div>
        );
    }
}

export default Todoapp;