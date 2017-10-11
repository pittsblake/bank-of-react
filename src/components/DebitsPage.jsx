import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class DebitPage extends Component {
    render() {

        const debitList = this.props.debits.map((items) => {
            return (
                <li>
                    <div>{items.date}</div>
                    <div>{items.description}</div>
                    <div>{items.amount}</div>
                    <br/>
                </li>
            )
        })

        return (
            <div>
                <Link to="/"> Home </Link>
                <h3>Debits</h3>
                <ol>
                    {debitList}
                </ol>
                
            </div>
        )
    }
}

    export default DebitPage;