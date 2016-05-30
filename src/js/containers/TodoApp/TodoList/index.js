/**
 * Created by akash on 30/05/16.
 */

import React from 'react';
import {ListGroup,ListGroupItem} from 'react-bootstrap';
import store from '../../../reducers'

export default class TodoList extends React.Component {
  render() {
    return (
      <div class="container">
        <ListGroup>
        {store.todo.map(function(object, i){
          return <ListGroupItem obj={object} key={i} />;
        })}
        </ListGroup>
      </div>
    )
  }
}
