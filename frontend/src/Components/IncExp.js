import React, { Component } from 'react';

class IncExp extends Component {
    render() {
        return (
            <div>
                 <div class="inc-exp-container">
                        <div>
                        <h4>Income</h4>
                        <p id="money-plus" class="money plus">+$0.00</p>
                        </div>
                        <div>
                        <h4>Expense</h4>
                        <p id="money-minus" class="money minus">-$0.00</p>
                        </div>
                    </div>
            </div>
        );
    }
}

export default IncExp;