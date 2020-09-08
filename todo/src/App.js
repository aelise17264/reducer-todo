import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import ToDoList from './List/ToDoList'
import './App.css';
import rootReducer from './Components/ToDoIndex'


const store = createStore(rootReducer, applyMiddleware(logger));
console.log(store);



export default function App(){
  return(
    <div className='App'>
      <header><h1>To Do List</h1></header>
      <ToDoList/>
    </div>
  )
}

const rootElement = document.getElementById('root');
ReactDOM.render(
    <App />,
  rootElement
);