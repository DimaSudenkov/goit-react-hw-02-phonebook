import React, { Component } from 'react';

class ContactForm extends Component {
  state = { name: '', number: '' };

  handelChange = ({ target: { name, value } }) =>
    this.setState({ [name]: value });

  handelSubmit = e => {
    e.preventDefault();
    this.props.sendUserData(this.state);
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <>
        <form onSubmit={this.handelSubmit}>
          <fieldset>
            <legend>Name</legend>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handelChange}
              required
            />
            <legend>Number</legend>
            <input
              type="tel"
              name="number"
              value={this.state.number}
              onChange={this.handelChange}
              required
            />
            <button type="submit">Add Contact</button>
          </fieldset>
        </form>
      </>
    );
  }
}

export default ContactForm;
