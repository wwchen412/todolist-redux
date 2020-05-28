import { combineReducers } from 'redux'
import { SET_VISIBILITY_FILTER,
    ADD_TODO,
    TOGGLE_TODO,
    EDIT_TODO,
    UPDATE_TODO,
     VisibilityFilters } from './actions';

const {SHOW_ALL} = VisibilityFilters

const initialState = [
    {
      text: 'Use React',
      completed: false,
      id: 0,
      editing:false
    },
    {
        text: 'Learn English',
        completed: true,
        id: 1,
        editing:false
      },
      {
        text: 'Use Redux',
        completed: false,
        id: 2,
        editing:false
      }
  ]
function VisibilityFilter(state = SHOW_ALL, action){
    switch (action.type){
        case SET_VISIBILITY_FILTER:
            return action.filter
        default:
            return state
    }
}

function todos(state = initialState  , action){
    switch (action.type){
        case ADD_TODO:
            return [
                ...state,
                    {
                        id:state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
                        text: action.text,
                        completed: false,
                        editing: false
                    }
                ]
        case TOGGLE_TODO:
            return state.map((todo) => 
            (todo.id === action.id)?{...todo, completed:!todo.completed} : todo
            )
        case EDIT_TODO:
            return state.map((todo) => 
                (todo.id === action.id)?{...todo, editing:!todo.editing} : {...todo, editing: false}    
            )
        case UPDATE_TODO:
            return state.map((todo) => 
                (todo.id === action.id)?{...todo, text:action.text,editing: false} :  todo
            )
        default:
            return state;
    }
}

const todoApp = combineReducers(
    {
    VisibilityFilter,
    todos
})

export default todoApp