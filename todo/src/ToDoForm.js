import React, {useState, useReducer} from 'react';
import {connect} from 'react-redux';
import {todoData, reducer} from './Components/ToDoReducer'
import List from './ToDoList'
import Todo from './Todo';

const TodoForm = () => {
    const [newItem, setNewItem] = useState('')
    const [state, dispatch] = useReducer(reducer, todoData)
console.log(state[0].task)

const handleChanges = event => {
    setNewItem(event.target.value)
}

const toggleList = (addedItem) => {
  state.map((item) => {
        if(item.id === addedItem){
          return{
            ...item,
            completed: !item.completed
          };
        }else{
          return item
        }
      })
    
  }

     return(
         <>
         <h2>Don't Forget To Do:</h2>
              <div>  
             {!state.editing?(
                <h2>{state.task}{''}
                <i 
                onClick = {() => 
                    dispatch({type: 'SET_ADD'})
                }
               />
                 </h2>
             ) : (
                <div>
               <input 
              placeholder='add todo'
               className='todo-item'
               type='text'
               name='newItem'
               value={newItem}
               onChange = {handleChanges}

               />
               
               <button onClick={() => 
                   dispatch({ type: 'TOGGLE_ADD', payload: newItem})
               }
               >
                  Add To Do Item
              </button>  
             
           </div> 
           )}
    <div className='list'>
        {state.map((item, index) => {
           return <p>Write These Down: {state[index].item}</p> 
            
        })}
    </div>
    
      </div>
     </>
     );
};
export default TodoForm