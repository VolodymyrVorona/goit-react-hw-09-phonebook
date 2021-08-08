import st from './ContactList.module.css';

const ContactListItem = ({ name, number, onDeleteContact }) => {
  return (
    <li className={st.listItem}>
      <span className={st.name}>{name}:</span>
      <span className={st.number}>{number}</span>
      <button className={st.btn} type="button" onClick={onDeleteContact}>
        Delete
      </button>
    </li>
  );
};

export default ContactListItem;
