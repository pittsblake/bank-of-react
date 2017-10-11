import React, { Component } from 'react';


class NewDebitForm extends Component {

    state = {
        newDebit: {
            id: "",
            description: "",
            amount: '',
            date: "",
        }
    }

    handleChange = (event) => {
        const newDebit = { ...this.state.newDebit }

        newDebit[event.target.name] = event.target.value

        this.setState({ newDebit: newDebit })
    }


    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addDebitToDebitList(this.state.newDebit)

        const emptyForm = {
            description: "",
            amount: '',
            date: "",
        }
        this.setState({ newDebit: emptyForm })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <input onChange={this.handleChange} name="description" type="text" placeholder="Description" value={this.state.newDebit.description} />
                </div>
                <div>
                    <input onChange={this.handleChange} name="amount" type="text" placeholder="Price" value={this.state.newDebit.amount} />
                </div>
                <div>
                    <input onChange={this.handleChange} name="date" type="text" placeholder="Date" value={this.state.newDebit.date} />
                </div>
                <div>
                    <button>Create A Product</button>
                </div>
            </form>
        );
    }
}

export default NewDebitForm;