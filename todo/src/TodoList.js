import React from 'react'
import CardMaker from './CardMaker'

const ToDoList = (props)=> {
  console.log(props.state)
const {todos} = props.state
// console.log(`item${props.item.completed ? "completed" : ""}`)
        return (
          <div>
            {
              todos.map(todo => {
                return <CardMaker
                todo={todo}
                key={todo.id}
                dispatch={props.dispatch}
                />
              })
            }
              
          </div>
        );

        }


export default ToDoList