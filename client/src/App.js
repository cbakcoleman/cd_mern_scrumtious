import './components/style.css';
import './App.css';
import List from './components/List';
import {v4 as uuid} from 'uuid';
import {useEffect, useState} from 'react';
import store from './utils/store';
import StoreApi from './utils/StoreApi';
import InputContainer from './components/InputContainer';

function App() {
  const listStyle = {
    width: "300px"
  };

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

  const addNewLists = (content) => {
    const newListId = uuid();
    const newList = {
      id: newListId,
      title: content,
      tasks: []
    };
    const newState = {
      listIds: [...data.listIds, newListId],
      lists: {
        ...data.lists,
        [newListId] : newList
      }
    }
    setData(newState);
}


  return (
    <StoreApi.Provider value={{ addNewTasks, addNewLists }}>
      <div className="App container">
        {data.listIds.map((listId) => {
          const list = data.lists[listId];
          return (
            <List list={list} key={listId} />
          )
        })}
        <div style={listStyle}>
          <InputContainer type="list" style={listStyle} />
        </div>
      </div>
    </StoreApi.Provider>
  );
}

export default App;
