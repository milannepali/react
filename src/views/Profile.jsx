import {useEffect, useState} from 'react';
import {useUser} from '../hooks/apiHooks';

const Profile = () => {
  const [user, setUser] = useState(null);
  const {getUserByToken} = useUser();

  useEffect(() => {
    const getUser = async () => {
      try {
        const token = localStorage.getItem('token');

        if (!token) {
          return;
        }

        const userData = await getUserByToken(token);

        console.log(userData);

        setUser(userData.user);
      } catch (error) {
        console.error(error);
      }
    };

    getUser();
  }, []);

  if (!user) {
    return <h2>Profile</h2>;
  }

  return (
    <>
      <h2>Profile</h2>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
      <p>User ID: {user.user_id}</p>
    </>
  );
};

export default Profile;
