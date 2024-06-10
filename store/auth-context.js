import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext, useState } from 'react';
import AuthContext from '../components/Auth/AuthContext';

export const AuthContext = createContext({
  isLogiedin: '',
  userName: '',
  authenticate: (token) => {},
  logout: () => {},
});

const AuthcContextProvider = ({ children }) => {
  const [isLogiedin, setIsLogeddIn] = useState(false);

  const authenticate = (token) => {
    console.log('authenticate called!');
    AsyncStorage.setItem('ACCESS_TOKEN', token.access_token);
    AsyncStorage.setItem('REFRESH_TOKEN', token.refresh_token);

    setIsLogeddIn(true);
  };

  const logout = () => {
    setIsLogeddIn(false);
    AsyncStorage.clear();
  };

  const value = {
    isLogiedin,
    authenticate,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthcContextProvider;
