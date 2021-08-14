// import React, { useState, useEffect } from 'react';
// import React, { useEffect } from 'react';

import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Container from 'components/Container';
import Filter from 'components/Filter';
import Section from 'components/Section';
import Title from 'components/Title';

export default function App() {
  // useEffect(() => {
  //   window.localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  // const changeFilter = e => {
  //   setFiltered(e.currentTarget.value);
  // };

  return (
    <Section>
      <Container>
        <Title text="Phonebook" />
        <ContactForm />
        <Title text="Contacts" />
        <Filter />
        <ContactList />
      </Container>
    </Section>
  );
}
