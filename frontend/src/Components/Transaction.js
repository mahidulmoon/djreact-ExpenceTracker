import React, { Component } from 'react';
import axios from 'axios';
class Transaction extends Component {
    state = {
        expanse: [],
        userid:[],
        transaction:{
            text:'',amount:0,
        }
    }
    componentDidMount(){
        const userid = parseInt(localStorage.getItem('expanseid'));
        axios.get(`http://127.0.0.1:8000/expensetracker/expanselist/${userid}/`).then(response => this.setState({expanse: response.data}))

            
        
    }
    inputchange = e =>{
        const tran = this.state.transaction;
        tran[ e.target.name ] = e.target.value;
        this.setState({transaction:tran});
    }
    addtransaction = e =>{
        e.preventDefault();
        const userid = parseInt(localStorage.getItem('expanseid'));
        //console.log(this.state.transaction);
        const value = this.state.expanse;
        if(parseInt(this.state.transaction.amount)>0){
            value["totalbalance"] = parseInt(this.state.expanse.totalbalance) + parseInt(this.state.transaction.amount);
            value["income"] = parseInt(this.state.expanse.income) + parseInt(this.state.transaction.amount);
            this.setState({expanse: value});
        }else{
            value["totalbalance"] = parseInt(this.state.expanse.totalbalance) + parseInt(this.state.transaction.amount);
            value["expense"] = parseInt(this.state.expanse.expense) - parseInt(this.state.transaction.amount);
            this.setState({expanse: value});
        }
        //console.log(this.state.expanse);
        axios.put(`http://127.0.0.1:8000/expensetracker/expanselist/${userid}/`,this.state.expanse).then(response => {alert("Successfully add");window.location.reload(false);})
    } 
    render() {
        return (
            <div>
                <h3>Add new transaction</h3>
                <h6>UserId:{this.state.expanse.id}</h6>
                    <form id="form">
                        <div class="form-control">
                            <label for="text">Text</label>
                            <input type="text" id="text" name="text" value={this.state.transaction.text} onChange={this.inputchange} placeholder="Enter text..." />
                            </div>
                            <div class="form-control">
                            <label for="amount"
                                >Amount <br />
                                (negative - expense, positive - income)</label
                            >
                            <input type="number" id="amount" name="amount" value={this.state.transaction.amount} onChange={this.inputchange} placeholder="Enter amount..." />
                        </div>
                            <button class="btn" onClick={this.addtransaction}>Add transaction</button>
                    </form>
            </div>
        );
    }
}

export default Transaction;