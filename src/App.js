//import logo from './logo.svg';
import { Component } from 'react';
//import { v4 as uuidv4 } from 'uuid';
import './App.css';

import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = newContact => {
    this.setState(prevState => (
      { contacts: [newContact, ...prevState.contacts] }
    ));
  };
  
  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = e => {
    this.setState({ [e.target.name]: e.target.value })
  };

  getVisibleContacts() {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    const items = filter === '' ?
      contacts :
      contacts.filter(item => item.name.toLowerCase().includes(normalizedFilter)
      );
    return items;
  };
  
  render() {
    const { filter, contacts } = this.state; 
    const visibleContacts = this.getVisibleContacts();

    return (
      <>
        <div>
          <h1>Fhonebook</h1>
          <ContactForm onSubmit={this.addContact} onCheck={contacts}/>
          
          <h2>Contacts</h2>
          {contacts.length !== 0 && (
            <>
              <Filter value={filter} onChange={this.changeFilter} />

              <ContactList items={visibleContacts} onDeleteContact={this.deleteContact} />
            </>
          )}
         
        </div>
      </>
    );
  }
}

export default App;
