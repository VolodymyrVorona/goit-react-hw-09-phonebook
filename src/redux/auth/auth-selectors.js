const getIsAuthenticated = state => state.auth.isAuthenticated;

const getUserEmail = state => state.auth.user.email;

const getUserName = state => state.auth.user.name;

const authSelectors = {
  getIsAuthenticated,
  getUserEmail,
  getUserName,
};

export default authSelectors;
