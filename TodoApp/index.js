import {createStore} from 'redux';
import todoApp from './reducer';
import {addTodo, toggleTodo, setVisibilityFilter, VisibilityFilters}

let store = createStore(todoApp);

console.log(store.getState);

let unsubscribe = store.subscribe(()=>{
  console.log(store.getState())
})

store.dispatch(addTodo('Learn about actions'))
store.dispatch(addTodo('Learn about reducers'))
store.dispatch(addTodo('Learn about stores'))
store.dispatch(toggleTodo(0))
store.dispatch(toggleTodo(1))
store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED)

unsubscribe();
