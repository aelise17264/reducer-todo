import React from 'react'

const CardMaker = ({todo, dispatch}) =>{

return(
    <div onClick = {() => {dispatch({type: 'TOGGLE_COMPLETED', payload: todo.id})}}
    className={!todo.completed ? 'todo-card' : 'todo-card-completed'}>
        <p>{todo.task}</p>
    </div>
)

}
export default CardMaker