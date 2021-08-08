import { Component } from 'react';
import { connect } from 'react-redux';
import { contactsOperations, contactsSelectors } from '../../redux/contacts';

import st from './ContactForm.module.css';

class Form extends Component {
  state = { name: '', number: '' };

  handleInputChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  findTheSameName = newName => {
    const { contacts } = this.props;
    const normalizedName = newName.toLowerCase();

    return contacts.find(({ name }) => name.toLowerCase() === normalizedName);
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name } = this.state;

    if (this.findTheSameName(name)) {
      return alert(`${name} is already in contacts`);
    }

    this.props.onSubmit(this.state);

    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form className={st.form} onSubmit={this.handleSubmit}>
        <label className={st.label}>
          Name
          <input
            className={st.input}
            type="text"
            name="name"
            value={name}
            onChange={this.handleInputChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </label>
        <label className={st.label}>
          Number
          <input
            className={st.input}
            type="tel"
            name="number"
            value={number}
            onChange={this.handleInputChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
          />
        </label>

        <button className={st.btn} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  contacts: contactsSelectors.getAllContacts(state),
});

const mapDispatchToProps = dispatch => ({
  onSubmit: contact => dispatch(contactsOperations.addContact(contact)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
