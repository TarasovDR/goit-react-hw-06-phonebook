// import React, { useState, useEffect } from 'react';
// import React, { useEffect } from 'react';
// import { v4 as uuidv4 } from 'uuid';

import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Container from 'components/Container';
// import Filter from 'components/Filter';
import Section from 'components/Section';
import Title from 'components/Title';

// import store from './redux/store/store';
// console.log(store);

export default function App() {
  // const [contacts, setContacts] = useState(() => {
  //   return (
  //     JSON.parse(window.localStorage.getItem('contacts')) ?? [
  //       { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  //       { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //       { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //       { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  //     ]
  //   );
  // });
  // const [filtered, setFiltered] = useState('');

  // useEffect(() => {
  //   window.localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  // const addContact = (name, number) => {
  //   const newContact = {
  //     id: `id-${uuidv4()}`,
  //     name,
  //     number,
  //   };

  //   contacts.find(
  //     contact =>
  //       contact.name.toLowerCase() === newContact.name.toLowerCase() &&
  //       contact.number === newContact.number,
  //   )
  //     ? alert(`${name} is already in contacts`)
  //     : setContacts([newContact, ...contacts]);
  // };

  // const deleteContact = contactId => {
  //   setContacts(contacts.filter(contact => contact.id !== contactId));
  // };

  // const changeFilter = e => {
  //   setFiltered(e.currentTarget.value);
  // };

  // const visibleContacts = () => {
  //   const normalizedFilter = filtered.toLowerCase();
  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(normalizedFilter),
  //   );
  // };

  return (
    <Section>
      <Container>
        <Title text="Phonebook" />
        <ContactForm />
        <Title text="Contacts" />
        {/* <Filter value={filtered} onChange={changeFilter} /> */}
        <ContactList />
      </Container>
    </Section>
  );
}
