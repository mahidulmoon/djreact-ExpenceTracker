import React, { Component } from 'react';
import IncExp from './IncExp';
import History from './History';
import Transaction from './Transaction';
class Expencetracker extends Component {
    render() {
        return (
            <div>
                

                <div class="container">
                    <h2>Expense Tracker</h2>
                    <h4>Your Balance</h4>
                    <h1 id="balance">$0.00</h1>

                    <React.Fragment>
                        <IncExp />

                        <History />

                        <Transaction />
                    </React.Fragment>

                </div>
            </div>
        );
    }
}

export default Expencetracker;