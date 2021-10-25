import React from "react";
import s from './Phonebook.module.css'
function Contacts({contact, onDeleteContact}) {
      return (

        <ul className={s.contactsList}>
            {contact.map(contact=>
               <li key={contact.name}>
                   <span className={s.contactText}>{contact.name}: {contact.number}</span>
                   <button type='button' onClick={() => onDeleteContact(contact.name)}>Delete</button>
               </li> )}
        </ul>
    )
}

export default Contacts