import { connect } from 'react-redux';
import { useEffect } from 'react';

import Loader from 'react-loader-spinner';

import { contactsSelectors, contactsOperations } from '../../redux/contacts';

import ContactForm from '../../components/ContactForm';
import Filter from '../../components/Filter';
import ContactsList from '../../components/ContactList';

const ContactsView = ({ fetchContacts, isLoading }) => {
  useEffect(() => {
    fetchContacts();
  }, [fetchContacts]);

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      <ContactsList />

      {isLoading && (
        <Loader type="Puff" color="#00BFFF" height={80} width={80} />
      )}
    </>
  );
};

const mapStateToProps = state => ({
  isLoading: contactsSelectors.getLoading(state),
});

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(contactsOperations.fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsView);
