import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import defaultAvatar from '../../icons/default-avatar.png';

import st from './UserMenu.module.css';

export default function UserMenu() {
  const dispatch = useDispatch();
  const email = useSelector(authSelectors.getUserEmail);

  const avatar = defaultAvatar;

  return (
    <div className={st.container}>
      <img src={avatar} alt="" width="32" className={st.avatar} />
      <span className={st.name}>Добро пожаловать, {email}</span>
      <button type="button" onClick={() => dispatch(authOperations.logOut())}>
        Выйти
      </button>
    </div>
  );
}
