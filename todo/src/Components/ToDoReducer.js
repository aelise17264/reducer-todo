import { TOGGLE_ADD, SET_ADD} from '../Actions/ToDoActions';

const todoData =[
    {
      task: 'Organize Garage',
      id: 1528817077286,
      completed: false
    }
]

export const ToDoReducer = (state = todoData, action) => {
    console.log(action.type)
    switch(action.type){
        case TOGGLE_ADD:
            return{
                ...state,
                editing: !state.editing
            };
        case SET_ADD:
            return{
                ...state,
                title: action.payload,
                editing: false
            };
        default:
            return state;
    }
}