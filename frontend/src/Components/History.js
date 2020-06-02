import React, { Component } from 'react';

class History extends Component {
    render() {
        return (
            <div>
                <h3>History</h3>
                    <ul id="list" class="list">
                         <li class="minus">
                        Cash <span>-$400</span><button class="delete-btn">x</button>
                        </li> 
                    </ul>
            </div>
        );
    }
}

export default History;