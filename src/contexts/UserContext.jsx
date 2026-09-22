import {createContext, useState} from 'react';
import {useAuthentication, useUser} from '../hooks/apiHooks';
import {useLocation, useNavigate} from 'react-router';

const UserContext = createContext(null);

const UserProvider = ({children}) => {
  const [user, setUser] = useState(null);

  const {postLogin} = useAuthentication();
  const {getUserByToken} = useUser();

  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = async (credentials) => {
    try {
      const loginResult = await postLogin(credentials);

      localStorage.setItem('token', loginResult.token);

      const userResult = await getUserByToken(loginResult.token);

      setUser(userResult.user);

      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };

  const handleLogout = () => {
    try {
      localStorage.removeItem('token');

      setUser(null);

      navigate('/login');
    } catch (error) {
      console.error(error);
    }
  };

  const handleAutoLogin = async () => {
    try {
      const token = localStorage.getItem('token');

      if (token) {
        const userResult = await getUserByToken(token);

        setUser(userResult.user);

        console.log('location', location);

        navigate(location.pathname);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <UserContext.Provider
      value={{
        user,
        handleLogin,
        handleLogout,
        handleAutoLogin,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export {UserProvider, UserContext};
