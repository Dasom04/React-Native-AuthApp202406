import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext, useState } from 'react';

export const AuthContext = createContext({
  isLoggedIn: false,
  userName: '',
  authenticate: (token) => {},
  logout: () => {},
});

const AuthContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const authenticate = async (token, userName, role) => {
    console.log('authenticate called!');
    await AsyncStorage.setItem('ACCESS_TOKEN', token.access_token);
    await AsyncStorage.setItem('REFRESH_TOKEN', token.refresh_token);
    await AsyncStorage.setItem('LOGIN_USERNAEM', userName);
    await AsyncStorage.setItem('USER_ROLE', role);
    setIsLoggedIn(true);
  };

  const logout = () => {
    setIsLoggedIn(false);
    AsyncStorage.clear();
  };

  const value = {
    isLoggedIn,
    authenticate,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
