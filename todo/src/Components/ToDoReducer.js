
export const todoData =[
    {
      task: 'Organize Garage',
      id: Math.random(),
      completed: false
    }
]

export const reducer = (state, action) => {
    // console.log(action.type)
    // console.log(action.payload)
    switch(action.type){
        case 'TOGGLE_COMPLETED': 
        return {
            ...state, 
            task: state.task.map(task => task.id === action.payload ? {...task, completed: !task.completed} : task) 
        }
        case 'ADD_TODO': 
        return {
            ...state, 
            task: [...state.task, action.payload]
        }
        case 'REMOVE_TODO': 
        return {
            ...state,
            task: state.task.filter(task => !task.completed)
        }
        default: 
        return state; 
    }
}