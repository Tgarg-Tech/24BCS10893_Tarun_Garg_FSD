import userContext from '../Context/userContext';
import { useContext } from 'react';
function UserInfo({ infoUser }) {
  const user = useContext(userContext);
  return (
    <>
      <div>
        <h2>{user.name}</h2>
        <h2>{user.email}</h2>
        <h2>{user.location}</h2>
      </div>
      <div>
        <h2>{infoUser.name}</h2>
        <h2>{infoUser.email}</h2>
        <h2>{infoUser.location}</h2>
      </div>
    </>
  );
}

export default UserInfo;
