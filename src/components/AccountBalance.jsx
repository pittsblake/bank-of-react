import React, { Component } from 'react';
import { Link } from 'react-router-dom'


class AccountBalance extends Component {
  
    render() {

        const totalCredits = this.props.credits.reduce((totalCredits, credit) => {
            return totalCredits + credit.amount
          }, 0)
    
          const totalDebits = this.props.debits.reduce((totalDebits, debit) => {
            return totalDebits + debit.amount
          }, 0)

          const totalBalance = (totalCredits - totalDebits);
          const accountBalance = totalBalance.toFixed(2)

        return (
            <div>
                Your Balance is: {accountBalance}
                <br/>
                <br/>
                Credits: {totalCredits}
                <br/>
                <br/>
                Debits: {totalDebits}
                <br/>
                <br/>
                <Link to="/">Home </Link>
            </div>
        );
    }
}
export default AccountBalance;