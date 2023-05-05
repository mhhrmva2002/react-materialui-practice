import { useEffect, useState } from 'react';
import './App.css';
import BasicTable from './components/Main';

function App() {
  const [users, setUsers] = useState([])
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <>
  <BasicTable users={users}/>
    </>
  );
}

export default App;
