import userContext from './Context/userContext';
import Home from './components/Home';
import UserInfo from './components/UserInfo';

function App() {
  const user = {
    name: 'Rahul Sharma',
    email: 'rahul@gmail.com',
    location: 'Chandigarh',
  };

  return (
    <>
      <userContext.Provider value={user}>
        <UserInfo />
        {/* <Home homeUser={user} /> */}
      </userContext.Provider>
    </>
  );
}

export default App;
