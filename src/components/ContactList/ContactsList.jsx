import { useSelector, useDispatch } from 'react-redux';

import { contactsSelectors, contactsOperations } from 'redux/contacts';

import ContactListItem from './ContactListItem';

const ContactsList = () => {
  const contacts = useSelector(contactsSelectors.getVisibleContacts);
  const dispatch = useDispatch();

  return (
    <ul>
      {contacts.length > 0 &&
        contacts.map(({ name, number, id }) => (
          <ContactListItem
            key={id}
            name={name}
            number={number}
            onDeleteContact={() =>
              dispatch(contactsOperations.deleteContact(id))
            }
          />
        ))}
    </ul>
  );
};

export default ContactsList;
