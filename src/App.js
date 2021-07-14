//import logo from './logo.svg';
import { Component } from 'react';
//import { v4 as uuidv4 } from 'uuid';
import './App.css';

import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = newContact => {
    this.setState(prevState => {
      return { contacts: [newContact, ...prevState.contacts] };
    });
  }

  changeFilter = e => {
        this.setState({ [e.target.name]: e.target.value })
    };

  render() {
    
    const items = this.state.filter === '' ?
      this.state.contacts :
      this.state.contacts.filter(item => item.name.toLowerCase().includes(this.state.filter.toLowerCase())
      );

    return (
      <>
        <div>
          <h1>Fhonebook</h1>
          <ContactForm onSubmit={this.addContact}/>
          
          <h2>Contacts</h2>
          <Filter value={this.state.filter} onChange={this.changeFilter} />
          <ContactList items={items}/>
        </div>
      </>
    );
  }
}

export default App;
