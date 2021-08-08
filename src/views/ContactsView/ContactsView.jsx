import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Loader from 'react-loader-spinner';

import { contactsSelectors, contactsOperations } from 'redux/contacts';

import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import ContactsList from 'components/ContactList';

import st from './ContactsView.module.css';

const ContactsView = () => {
  const isLoading = useSelector(contactsSelectors.getLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      <ContactsList />

      {isLoading && (
        <div className={st.loader}>
          <Loader type="ThreeDots" color="#00BFFF" width={150} height={100} />
        </div>
      )}
    </>
  );
};

export default ContactsView;
