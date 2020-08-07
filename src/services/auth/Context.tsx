import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { authenticateUser, logoutUser, isTokenValid } from './auth.service';

type AuthContextType = {
  isAuth: boolean;
  goToLoginPage: () => void;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
};

const AuthContext = React.createContext<AuthContextType>({} as AuthContextType);
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const history = useHistory();

  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    console.log(isTokenValid())
    setIsAuth(isTokenValid());
  }, []);

  const onAuthenticateUser = () => setIsAuth(isTokenValid());

  return (
    <AuthContext.Provider
      value={{
        isAuth,
        goToLoginPage: () => history.push('/login'),
        login: (email, password) => authenticateUser(email, password).then(onAuthenticateUser),
        logout: () => {
          logoutUser();
          setIsAuth(false);
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => React.useContext(AuthContext);
