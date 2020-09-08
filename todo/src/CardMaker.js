import React from 'react'

const CardMaker = ({item, dispatch}) =>{

return(
    <div onClick = {() => {dispatch({type: 'TOGGLE_COMPLETED', payload: item.id})}}
    className={!item.completed ? 'todo-card' : 'todo-card completed'}>
        <p>{item.task}</p>
    </div>
)

}
export default CardMaker