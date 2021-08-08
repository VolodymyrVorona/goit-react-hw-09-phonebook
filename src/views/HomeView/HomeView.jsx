import PhoneIcon from '../../icons/phone.svg';
import st from './HomeView.module.css';

function HomeView() {
  return (
    <div className={st.wrapper}>
      <h1>Phonebook App</h1>

      <img src={PhoneIcon} alt="" />
    </div>
  );
}

export default HomeView;
