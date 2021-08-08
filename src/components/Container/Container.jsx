import st from './Container.module.css';

function Container({ children }) {
  return <div className={st.Container}>{children}</div>;
}

export default Container;
