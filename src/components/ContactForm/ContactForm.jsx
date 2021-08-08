import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { contactsOperations, contactsSelectors } from 'redux/contacts';

import st from './ContactForm.module.css';

function Form() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(contactsSelectors.getAllContacts);
  const dispatch = useDispatch();

  const handleInputChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);

      // eslint-disable-next-line no-fallthrough
      default:
        return;
    }
  };

  const findTheSameName = newName => {
    const normalizedName = newName.toLowerCase();

    return contacts.find(({ name }) => name.toLowerCase() === normalizedName);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (findTheSameName(name)) {
      return alert(`${name} is already in contacts`);
    }

    dispatch(contactsOperations.addContact({ name, number }));

    setName('');
    setNumber('');
  };

  return (
    <form className={st.form} onSubmit={handleSubmit}>
      <label className={st.label}>
        Name
        <input
          className={st.input}
          type="text"
          name="name"
          value={name}
          onChange={handleInputChange}
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
          onChange={handleInputChange}
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

export default Form;
