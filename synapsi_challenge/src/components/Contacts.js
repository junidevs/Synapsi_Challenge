import React from 'react'
import {useContacts} from '../contexts/ContactsProvider';

export default function Contacts() {
    const {contacts} = useContacts();
    return (
        <div>
             <ul>
                 <li>
                     {contacts.map( contact =>(
                        <h5>{contact.name}</h5>
                     ))}
                 </li>
             </ul>
        </div>
    )
}
