import { Component } from "react";
import { v4 as uuidv4 } from 'uuid';

class ContactForm extends Component {
    state = {
        name: '',
        number: ''
    };

    handleInput = e => {
        this.setState({ [e.target.name]: e.target.value })
    };
    
    handleSubmit = e => {
        e.preventDefault();

        const newContact = { name: this.state.name, id: uuidv4(), number: this.state.number };

        this.props.onSubmit(newContact);

        this.resetInput('name');
        this.resetInput('number');
    };
    
    resetInput(nameInput) {
        this.setState({ [nameInput]: '' });
    };
    
    render() {
        const isTwoInputValue = this.state.name !== '' && this.state.number !== '';

        return (
        <form onSubmit={this.handleSubmit}>
            <label>Name
              <input
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                required
                value={this.state.name}
                onChange={this.handleInput}
              />
            </label>
            <label>Number
              <input
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                required
                value={this.state.number}
                onChange={this.handleInput}
              />
            </label>
            {isTwoInputValue ? <button type="submit">Add contact</button> : <button type="submit" disabled>Add contact</button>}
          </form>
        );
    }
    
}

export default ContactForm;