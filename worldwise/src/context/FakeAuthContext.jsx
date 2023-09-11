/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer } from 'react';

const AuthContext = createContext();

const intialState = {
  user: null,
  isAuth: false,
};

function reducer(state, action) {
  switch (action.type) {
    case 'login':
      return { ...state, user: action.paylaod, isAuth: true };

    case 'logout':
      return { ...state, user: null, isAuth: false };

    default:
      throw new Error('Unknown action type');
  }
}

const FAKE_USER = {
  name: 'Jack',
  email: 'jack@example.com',
  password: 'qwerty',
  avatar: 'https://i.pravatar.cc/100?u=zz',
};

const AuthProvider = ({ children }) => {
  const [{ user, isAuth }, dispatch] = useReducer(reducer, intialState);

  function login(email, password) {
    if (email === FAKE_USER.email && password === FAKE_USER.password) {
      dispatch({ type: 'login', paylaod: FAKE_USER });
    }
  }

  function logout() {
    dispatch({ type: 'logout' });
  }

  return (
    <AuthContext.Provider
      value={{
        login,
        logout,
        user,
        isAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);

  if (context === undefined)
    throw new Error('Context was used outside the provider');

  return context;
};

export { AuthProvider, useAuth };
