import './App.css';
import List from './components/List';
import {useEffect, useState} from 'react';
import axios from 'axios';

function App() {
  const [lists, setLists] = useState([]);

  useEffect( () => {
    getListsFromDB();
  }, [])

  const getListsFromDB = () => {
    axios.get("http://localhost:8000/api/lists")
      .then(res => {
        console.log(res.data.lists);
        setLists(res.data.lists);
      })
      .catch(err => console.log(err))
  }

  return (
    <div className="App">
      {
        lists.map( (list, i) => {
          const thisList = list;
          return(
            <List list={thisList} key={list._id}/>
            
          )
        })
      }
    </div>
  );
}

export default App;
