import React, {useState} from 'react';


const TodoForm = ({dispatch}) => {
    const [newItem, setNewItem] = useState('')

const handleChanges = event => {
setNewItem(event.target.value)
}

const onSubmit = event => {
    event.preventDefault()
    const newTodo = {
        task: newItem,
        complete: false,
        id: Math.random()
    }
    dispatch({type: 'ADD_TODO', payload: newTodo})
}

const handleRemove = event => {
    event.preventDefault()
    dispatch({type: 'REMOVE_TODO'})
}

     return(
         <div>
             <form onSubmit={onSubmit}>
                 <label>Add a New Todo:</label>
                 <input
                onChange = {handleChanges}
                name='newTodo'
                type='text'
                />
                <button type='submit'>Submit</button>
                <button onClick={handleRemove}>Clear Completed</button>
             </form>
         </div>
     );
};
export default TodoForm