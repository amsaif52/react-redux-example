import {ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER} from './action';
import {combineReducers} from 'redux';

function todos(state=[], action) {
  switch(action.type){
    case ADD_TODO:
       return [
         ...state,
         {
           text:action.text,
           completed: false
         }
       ]
    case TOGGLE_TODO:
      return state.map((todo, index) => {
        if(index === todo.index){
          return Object.assign({},todo,completed = !todo.completed)
        }
        return state
      })
    default:
        return state
 }
}

function visibilityFilter(state="SHOW_ALL",action){
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

const todoApp = combineReducers({todos, visibilityFilter});

export default todoApp
