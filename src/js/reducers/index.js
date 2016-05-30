import { combineReducers } from 'redux';
import friendList from './friendList';
import todoList from './todoList'

const rootReducer = combineReducers({
  friendList,
  todo: todoList
});

export default rootReducer;
