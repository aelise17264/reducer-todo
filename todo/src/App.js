import React from 'react';
import ReactDOM from 'react-dom';
// import { createStore, applyMiddleware } from 'redux';
//  import { Provider } from 'react-redux';
// import logger from 'redux-logger';
import './App.css';
import Form from './ToDoForm'



export default function App(){
  return(
    <div className='App'>
      <header><h1>To Do List</h1></header>
      <Form/>
    </div>
  )
}

// const rootElement = document.getElementById('root');
// ReactDOM.render(
//     <App />,
//   rootElement
// );