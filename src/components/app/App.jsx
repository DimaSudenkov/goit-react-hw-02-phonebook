import React, { Component } from 'react';
import ContactForm from 'components/contactsForm/ContactForm';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    // name: '',
    // number: '',
  };

  // handelChange = ({ target: { name, value } }) =>
  //   this.setState({ [name]: value });

  // handelSubmit = e => {
  //   e.preventDefault();
  //   this.sendUserData(this.state);
  //   this.setState({
  //     name: '',
  //     number: '',
  //   });
  // };

  sendUserData = data => {
    const newUser = {
      ...data,
      id: nanoid(),
    };
    this.setState(prev => ({
      contacts: [...prev.contacts, newUser],
    }));
  };

  filterContacts = () => {
    const { filter, contacts } = this.state;
    const newArr = contacts.filter(el =>
      el.name.toLowerCase().includes(filter)
    );
    return newArr;
  };

  render() {
    return (
      <div>
        <h3>Phonebook</h3>
        <ContactForm sendUserData={this.sendUserData} />
        {/* <form onSubmit={this.handelSubmit}>
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
        </form> */}

        <h3>Contacts</h3>

        <legend>Find contacts by name</legend>
        <input
          type="search"
          name="filter"
          value={this.state.filter}
          onChange={this.handelChange}
        />
        <ul>
          {this.filterContacts().map(el => (
            <li key={el.id}>
              {el.name}: {el.number}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
