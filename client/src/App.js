import './App.css';
import List from './components/List';
import {v4 as uuid} from 'uuid';
import {useEffect, useState} from 'react';
import store from './utils/store';
import StoreApi from './utils/StoreApi';

function App() {
  const [data, setData] = useState(store)

  const addNewTasks = (content, listId) => {
    const newTaskId = uuid();
    const newTask = {
      id: newTaskId,
      content,
    };
    console.log(content, listId, newTaskId);
    const list = data.lists[listId];
    list.tasks = [...list.tasks, newTask]

    const newState = {
      ...data,
      lists:{
        ...data.lists,
        [listId] : list,
      },
    };
    setData(newState);
  }


  return (
    <StoreApi.Provider value={{ addNewTasks }}>
      <div className="App">
        {data.listIds.map((listId) => {
          const list = data.lists[listId];
          return (
            <List list={list} key={listId}/>
          )
        })}
      </div>
    </StoreApi.Provider>
  );
}

export default App;
