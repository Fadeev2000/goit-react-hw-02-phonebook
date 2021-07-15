function ContactList({items, onDeleteContact}) {
    return (
         <ul>
        {items.map(item => (<li key={item.id}>{item.name}: {item.number}
          <button type="button" onClick={() => onDeleteContact(item.id)}>Delete</button>
        </li>))}
          </ul>
    );
}

export default ContactList;