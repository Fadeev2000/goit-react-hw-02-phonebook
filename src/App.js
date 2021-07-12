//import logo from './logo.svg';
import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';

//import ContactForm from './components/ContactForm';
//import ContactList from './components/ContactList';

class App extends Component {
  state = {
    contacts: [],
    name: ''
  };

  handleInputName = (e) => {
    this.setState({ name: e.target.value })

    //this.validInput(e) ? this.setState({ name: e.target.value }) : console.log('Недопустимый символ');
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const newContact = { name: this.state.name, id: uuidv4() };

    this.setState(prevState => {
      return { contacts: [newContact, ...prevState.contacts] };
    });
    this.resetInputName();
  };

  resetInputName() {
    this.setState({ name: '' });
  };

  validInput(e) {
    const regexp = new RegExp(e.target.pattern);

    return regexp.test(e.target.value);
  }

  render() {
    const items = this.state.contacts;

    return (
      <>
        <div>
          <h1>Fhonebook</h1>
          <form onSubmit={this.handleSubmit}>
            <label>Name
              <input
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                required
                value={this.state.name}
                onChange={this.handleInputName}
              />
            </label>
            <button type="submit">Add contact</button>
          </form>
          <h2>Contacts</h2>
          <ul>
            {items.map(item => (<li key={item.id}>{item.name}</li>))}
          </ul>
        </div>
      </>
    );
  }
}

export default App;
