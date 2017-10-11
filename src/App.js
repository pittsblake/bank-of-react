import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import AccountBalance from './components/AccountBalance';
import UserProfile from './components/UserProfile';
import axios from 'axios';
import DebitsPage from './components/DebitsPage';

class App extends Component {
  state = {
    user: {
      userName: "Bobby",
      membersince: 1910,
    },
    accountBalance: 12345.34,
    credits: [],
    debits: []
  }


  getDebits = () => {
    axios.get("http://localhost:4000/debits")
      .then((res) => {
        const debits = res.data
        this.setState({debits: debits})
      })
      .catch((error)=> {
        console.log(error)
      })
  }

  getCredits = () => {
    axios.get("http://localhost:4000/credits")
      .then((res) => {
        const credits = res.data
        this.setState({credits: credits})
      })
      .catch((error)=> {
        console.log(error)
      })
  }

  addDebitToDebitList = (newDebitItem) => {
    const newDebitList = [...this.state.debits]
    newDebitList.push(newDebitItem)
    this.setState({debits: newDebitList})
  }

  componentWillMount() {
    this.getDebits()
    this.getCredits()
  }

  render() {
    const AccountBalanceWrapper = () => {
    return(<AccountBalance accountBalance = {this.state.accountBalance} debits = {this.state.debits} credits = {this.state.credits} /> )
  }

    const UserProfileWrapper = () => {
      return(<UserProfile userName = {this.state.user.userName}  memberSince = {this.state.user.membersince} />)
    }
  
    const DebitWrapper = () => {
      return(<DebitsPage addDebitToDebitList = {this.state.addDebitToDebitList} accountBalance = {this.state.accountBalance} debits = {this.state.debits} credits = {this.state.credits}/>)
    }

    return (
        <Router>
          <Switch>
              <Route exact path= "/" component={Home} />
              <Route exact path= "/account" render={AccountBalanceWrapper} />
              <Route exact path= "/debits" render={DebitWrapper}/>
              <Route path= "/:user" render={UserProfileWrapper} />
          </Switch>
        </Router>
    );
  }
}

export default App;