import PropTypes from 'prop-types';
import css from './ContactList.module.css';

function ContactList({ items, onDeleteContact }) {
    return (
         <ul>
        {items.map(item => (<li key={item.id} className={css.li}>{item.name}: {item.number}
          <button className={css.button} type="button" onClick={() => onDeleteContact(item.id)}>Delete</button>
        </li>))}
          </ul>
    );
}

ContactList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  })).isRequired,
  onDeleteContact: PropTypes.func.isRequired
}

export default ContactList;