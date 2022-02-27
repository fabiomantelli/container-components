import axios from 'axios';
import { UserInfo } from './UserInfo';
import { DataSource } from './DataSource';

const getServerData = url => async () => {
  const response = await axios.get(url);
  return response.data;
}

const getLocalStorageData = key => () => {
  return localStorage.getItem(key); 
}

const Text = ({ message }) => <h1>{message}</h1>

function App() {
  return (
    <>
    <DataSource getDataFunc={getServerData('/users/234')} resourceName="user">
      <UserInfo />
    </DataSource>
    <DataSource getDataFunc={getLocalStorageData('message')} resourceName="message">
      <Text />  
    </DataSource>
    </>
  );
}

export default App;
