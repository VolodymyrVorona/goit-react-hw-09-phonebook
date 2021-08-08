import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { contactsSelectors, contactsActions } from '../../redux/contacts';
import st from './Filter.module.css';

const Filter = ({ onContactsFilter, value }) => {
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

Filter.propTypes = {
  onContactsFilter: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  value: contactsSelectors.getFilter(state),
});

const mapDispatchToProps = dispatch => ({
  onContactsFilter: e =>
    dispatch(contactsActions.changeFilter(e.currentTarget.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
