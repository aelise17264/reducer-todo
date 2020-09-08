import React from 'react'
import {CardMaker} from './CardMaker'

const ToDoList = (props)=> {
let listItem = props.state
console.log(listItem)
// console.log(`item${props.item.completed ? "completed" : ""}`)
        return (
          <div>
            {/* {
              listItem.map(item => {
                return <CardMaker
                item={item}
                key={item.id}
                dispatch={props.dispatch}
                />
              })
            } */}
              
          </div>
        );

        }


export default ToDoList