import React, { Component } from 'react';
import IncExp from './IncExp';
import History from './History';
import Transaction from './Transaction';
class Expencetracker extends Component {
    render() {
        return (
            <div>
                

                <div class="container">

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