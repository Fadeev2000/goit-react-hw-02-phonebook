import { Component } from "react";
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import css from './ContactForm.module.css';

class ContactForm extends Component {
    state = {
        name: '',
        number: ''
    };

    isNewContact(contact) {
        return !this.props.onCheck.some(el => el.name === contact);
    }

    handleInput = e => {
        this.setState({ [e.target.name]: e.target.value })
    };
    
    handleSubmit = e => {
        e.preventDefault();

        const newContact = { name: this.state.name, id: uuidv4(), number: this.state.number };
                
        if (this.isNewContact(newContact.name)) {
            this.props.onSubmit(newContact);
        } else {
            alert(`${newContact.name} is already in contacts`);
        }

        this.resetInput('name');
        this.resetInput('number');
    };
    
    resetInput(nameInput) {
        this.setState({ [nameInput]: '' });
    };    
    
    render() {
        const isTwoInputValue = this.state.name !== '' && this.state.number !== '';

        return (
            <form className={css.form} onSubmit={this.handleSubmit}>
            <label className={css.form__label}>Name
              <input
                type="text"
                name="name"
                className={css.form__input}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                required
                value={this.state.name}
                onChange={this.handleInput}
              />
            </label>
            <label className={css.form__label}>Number
              <input
                type="tel"
                name="number"
                className={css.form__input}
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                required
                value={this.state.number}
                onChange={this.handleInput}
              />
            </label>
                {isTwoInputValue ?
                    <button type="submit" className={css.form__button}>Add contact</button> :
                    <button type="submit" className={css.form__button} disabled>Add contact</button>
                }
          </form>
        );
    }
    
}

ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onCheck: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  })).isRequired
}

export default ContactForm;