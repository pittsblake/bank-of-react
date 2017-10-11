import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NewDebitForm from './NewDebitForm'

class DebitPage extends Component {
    render() {

        const totalCredits = this.props.credits.reduce((totalCredits, credit) => {
            return totalCredits + credit.amount
          }, 0)
    
          const totalDebits = this.props.debits.reduce((totalDebits, debit) => {
            return totalDebits + debit.amount
          }, 0)

          const totalBalance = (totalCredits - totalDebits);
          const accountBalance = totalBalance.toFixed(2)

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
                <NewDebitForm addDebitToDebitList={this.props.addDebitToDebitList} />
                <div>
                    Account Balance: {accountBalance}
                </div>
        
                <ol>
                    {debitList}
                </ol>

                
            </div>
        )
    }
}

    export default DebitPage;