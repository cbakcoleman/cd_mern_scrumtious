import './components/style.css';
import './App.css';
import List from './components/List';
import {v4 as uuid} from 'uuid';
import {useEffect, useState} from 'react';
import store from './utils/store';
import StoreApi from './utils/StoreApi';
import InputContainer from './components/InputContainer';
import {DragDropContext, Droppable} from 'react-beautiful-dnd';

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

const updateListTitle = (title, listId) => {
  console.log(title);
  const list = data.lists[listId];
  list.title = title;

  const newState = {
    ...data,
    lists: {
      ...data.lists,
      [listId]:list
    },
  };
  setData(newState);
}

const onDragEnd = (result) => {
  const {destination, source, draggableId} = result;
  console.log("destination", destination, "source", source, "draggableId", draggableId)

  if (!destination) {
    return;
  }
  const sourceList = data.lists[source.droppableId];
  const destinationList = data.lists[destination.droppableId]
  const draggingTask = sourceList.tasks.filter(
    (task) => task.id ===draggableId
  )[0];

  if (source.droppableId === destination.droppableId) {
    sourceList.tasks.splice(source.index, 1);
    destinationList.tasks.splice(destination.index, 0, draggingTask);
    const newState = {
      ...data,
      lists: {
        ...data.lists,
        [sourceList.id]: destinationList
      },
    };
    setData(newState);
  } else {
    sourceList.tasks.splice(source.index, 1);
    destinationList.tasks.splice(destination.index, 0, draggingTask);

    const newState = {
      ...data,
      lists: {
        ...data.lists,
        [sourceList.id] : sourceList,
        [destinationList.id] : destinationList,
      },
    };
    setData(newState);
  }
}

  return (
    <StoreApi.Provider value={{ addNewTasks, addNewLists, updateListTitle }}>
      <DragDropContext onDragEnd={onDragEnd}>
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
      </DragDropContext>
    </StoreApi.Provider>
  );
}

export default App;
