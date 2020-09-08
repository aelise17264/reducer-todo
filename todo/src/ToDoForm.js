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
         <div className='todo-form'>
             <form onSubmit={onSubmit}>
                 <p>Add a New Todo:</p>
                 <br/>
                 <input
                onChange = {handleChanges}
                name='newTodo'
                type='text'
                />
                <br/>
                <button type='submit'>Submit</button>
                <p>🐚Did you cross off some of your to-dos? Clear what you've finished from the list🐚</p>
                <button onClick={handleRemove}>Clear Completed</button>
             </form>
         </div>
     );
};
export default TodoForm