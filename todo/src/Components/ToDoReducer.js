
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
        case 'TOGGLE_ADD':
            return{
                ...state,
                task: action.payload,
                id: Math.random(),
                completed: false
               
            };
        case 'SET_ADD':
            return{
                ...state,
                completed: !state.completed
            };
        default:
            return state;
    }
}