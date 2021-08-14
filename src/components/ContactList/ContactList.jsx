import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteContact } from '../../redux/contacts/contacts-actions';
import { MdRemoveCircle } from 'react-icons/md';
import {
  ContactContainer,
  ContactItem,
  ContactButton,
} from './ContactList.styled';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ContactContainer>
      {contacts.map(({ id, name, number }) => (
        <ContactItem key={id} name={name} number={number}>
          <span>{name}:</span>
          <span>{number}</span>
          <ContactButton onClick={() => onDeleteContact(id)}>
            <MdRemoveCircle />
            Delete
          </ContactButton>
        </ContactItem>
      ))}
    </ContactContainer>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string,
      number: PropTypes.string,
    }),
  ),
  onDeleteContact: PropTypes.func.isRequired,
};

// const visibleContacts = () => {
//   const normalizedFilter = filtered.toLowerCase();
//   return contacts.filter(contact =>
//     contact.name.toLowerCase().includes(normalizedFilter),
//   );
// };

// const mapStateToProps = state => {

// console.log(state)
// contacts.find(
//       contact =>
//         contact.name.toLowerCase() === newContact.name.toLowerCase() &&
//         contact.number === newContact.number,
//     )
//       ? alert(`${name} is already in contacts`)
//       : setContacts([newContact, ...contacts]),
// };
const mapStateToProps = state => {
  const { filter, contacts } = state.contacts;
  const normalizedFilter = filter.toLowerCase();

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter),
  );

  return { contacts: visibleContacts };
};

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(deleteContact(id)),
});
// const mapDispatchToProps = dispatch => ({
//   onDeleteContact: id => dispatch(deleteContact(id)),
// });

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
