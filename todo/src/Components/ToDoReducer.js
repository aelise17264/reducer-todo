
export const todoData =[
    {
      task: 'Organize Garage',
      id: 1528817077286,
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
                completed: !state.completed
            };
        case 'SET_ADD':
            return{
                ...state,
                task: action.payload,
                completed: false
            };
        default:
            return state;
    }
}