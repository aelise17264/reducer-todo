import React, {useState, useReducer} from 'react';
import {connect} from 'react-redux';
import {todoData, reducer} from './Components/ToDoReducer'



const TodoForm = () => {
    const [newItem, setNewItem] = useState('')
    const [state, dispatch] = useReducer(reducer, todoData)

const handleChanges = event => {
    setNewItem(event.target.value)
}

     return(
         <>
         <h2>Don't Forget To Do:</h2>
              <div>  
             {!state.editing?(
                 <h2>
                {state.task}{''}
                
                <button 
                onClick = {() => 
                    dispatch({type: 'SET_ADD'})
                }
               >Add Item</button>
                 </h2>
             ) : (
                <div>
                    <h3>Add to your list:</h3>
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
        {state.map((item) => {
            console.log(item.task)
           return <p>Write These Down: 📌{item.task}</p> 
            
        })}
    </div>
    
      </div>
     </>
     );
};
export default TodoForm