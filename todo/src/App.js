import React, {useReducer} from 'react';
import ReactDOM from 'react-dom';
// import { createStore, applyMiddleware } from 'redux';
//  import { Provider } from 'react-redux';
// import logger from 'redux-logger';
import './App.css';
import ToDoForm from './ToDoForm'
import {initialState, reducer} from './Components/ToDoReducer'
import ToDoList from './TodoList'


export default function App(){
const [state, dispatch] = useReducer (reducer, initialState)
  return(
    
    <div className ='App'>
      <header><h1>To Do List</h1></header>
       <ToDoForm
       dispatch = {dispatch}/>
       <ToDoList
       state={state} 
       dispatch={dispatch}
       />
      
    </div>
    
  )
}

const rootElement = document.getElementById('root');
ReactDOM.render(
    <App />,
  rootElement
);