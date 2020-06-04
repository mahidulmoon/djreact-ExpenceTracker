import React, { Component } from 'react';
import axios from 'axios';
class IncExp extends Component {
    state = {
        expanselist: [],
        userid:[],
    }
    componentDidMount(){
        if(localStorage.getItem('token')){
            axios.get('http://127.0.0.1:8000/expensetracker/expanselist/').then(response => this.setState({expanselist: response.data}))
            this.setState({userid:localStorage.getItem('userid')})
        }else{
            alert("Please login first!!!");
        }
    }
    render() {
        return (
            <div>
                <h2>Expense Tracker</h2>
                    <h4>Your Balance</h4>
                    {this.state.expanselist.map(expanse =>{
                        if(parseInt(this.state.userid) === parseInt(expanse.user)){
                            return <div>
                                {localStorage.setItem('expanseid',expanse.id)}
                                <h1 id="balance">${expanse.totalbalance}</h1>
                                <div class="inc-exp-container">
                                    <div>
                                    <h4>Income</h4>
                                    <p id="money-plus" class="money plus">+${expanse.income}</p>
                                    </div>
                                    <div>
                                    <h4>Expense</h4>
                                    <p id="money-minus" class="money minus">-${expanse.expense}</p>
                                    </div>
                                </div>
                            </div>
                        }
                    })}
                 
            </div>
        );
    }
}

export default IncExp;