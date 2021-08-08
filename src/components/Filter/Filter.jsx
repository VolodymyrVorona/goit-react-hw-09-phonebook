import { useSelector, useDispatch } from 'react-redux';
import { contactsSelectors, contactsActions } from 'redux/contacts';
import st from './Filter.module.css';

const Filter = () => {
  const value = useSelector(contactsSelectors.getFilter);
  const dispatch = useDispatch();

  const onContactsFilter = e => {
    const { value } = e.currentTarget;
    dispatch(contactsActions.changeFilter(value));
  };

  return (
    <div className={st.wrapper}>
      <label className={st.label}>
        Find contacts by name
        <input
          className={st.input}
          type="text"
          name="name"
          value={value}
          onChange={onContactsFilter}
        />
      </label>
    </div>
  );
};

export default Filter;
