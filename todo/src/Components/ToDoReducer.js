
export const initialState ={
   todos: [
    {
      task: 'Organize Garage',
      id: Math.random(),
      completed: false
    }
]
}

export const reducer = (state, action) => {
    // console.log(action.type)
    // console.log(action.payload)
    switch(action.type){
        case 'TOGGLE_COMPLETED': 
        return {
            ...state, 
            todos: state.todos.map(todo => 
                todo.id === action.payload ? 
                {...todo, completed: !todo.completed} : todo) 
        }
        case 'ADD_TODO': 
        return {
            ...state, 
            todos: [...state.todos, action.payload]
        }
        case 'REMOVE_TODO': 
        return {
            ...state,
            todos: state.todos.filter(todo => !todo.completed)
        }
        default: 
        return state; 
    }
}