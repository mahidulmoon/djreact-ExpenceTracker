import React, { Component } from 'react';
import axios from 'axios';
class History extends Component {
    state = {
        history:[],
        userid:[]
    }
    componentDidMount(){
        if(localStorage.getItem('token')){
            axios.get('http://127.0.0.1:8000/expensetracker/history/').then(response => this.setState({history:response.data,userid:localStorage.getItem('userid')}))
        }
    }
    render() {
        return (
            <div>
                <h3>History</h3>
                    <ul id="list" className="list">
                        {this.state.history.map(singlehistory =>{
                            if(parseInt(this.state.userid) === parseInt(singlehistory.user)){
                                if(parseInt(singlehistory.amount)>0){
                                    return <li className="plus">
                                    {singlehistory.text} <span>${singlehistory.amount}</span><button className="delete-btn">x</button>
                                    </li> 
                                }else{
                                    return <li className="minus">
                                    {singlehistory.text}({singlehistory.date}) <span>${singlehistory.amount}</span><button className="delete-btn">x</button>
                                    </li> 
                                }
                            }
                        })}
                        
                    </ul>
            </div>
        );
    }
}

export default History;