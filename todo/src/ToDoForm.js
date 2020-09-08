import React, {useState, useReducer} from 'react';
import {connect} from 'react-redux';
import {todoData, reducer} from './Components/ToDoReducer'

const Form = () => {
    const [newItem, setNewItem] = useState('')
    const [state, dispatch] = useReducer(reducer, todoData)
console.log(state)

const handleChanges = event => {
    setNewItem(event.target.value)
}

    return(
        <>
        <div>
            <form>
            {!state.editing?(
                <h2>{state.task}{''}
                <i
                onClick = {() => dispatch({type: 'TOGGLE_ADD'})}
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
              <button onClick={() => {
                  dispatch({ type: 'SET_ADD', payload: newItem})
              }}
              >
                  Add To Do Item
              </button> 
              </div> 
            )}
            </form>
        </div>
        </>
    )
}
export default Form