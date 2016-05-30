/**
 * Created by akash on 30/05/16.
 */

import * as types from '../constants/ActionTypes'

const initialState = {
  list :['First','Second','Third']
}

export default function (state = initialState, action) {
    switch (action.type){
      case types.ADD_TODO:
      {
        var l = Object.assign({}, state);
        l.list.push(action.todo);
        return l;
      }
      default:
            return state;
    }
}
