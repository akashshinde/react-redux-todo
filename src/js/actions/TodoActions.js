/**
 * Created by akash on 29/05/16.
 */


import * as types from '../constants/ActionTypes';

export function addTodo(todo){
  return {
    type: types.ADD_TODO,
    todo
  };
}

export function removeTodo(id){
  return {
    type: types.REMOVE_TODO,
    id.
  };
}
