import {useState} from 'react';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';

const Login = () => {
  const [showRegister, setShowRegister] = useState(false);

  return (
    <>
      {showRegister ? <RegisterForm /> : <LoginForm />}

      <button onClick={() => setShowRegister(!showRegister)}>
        {showRegister ? 'Show Login' : 'Show Register'}
      </button>
    </>
  );
};

export default Login;
