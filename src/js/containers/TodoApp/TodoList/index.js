/**
 * Created by akash on 30/05/16.
 */

import React from 'react';
import {ListGroup,ListGroupItem} from 'react-bootstrap';
import store from '../../../reducers';
import {bindActionCreators} from 'redux'
import * as todoActions from '../../../actions/TodoActions'
import connect from 'react-redux'

export default class TodoList extends React.Component {

  // renderList() {
  //   return this.props.todos.map((todo,i) => (
  //       <ListGroupItem key={i} actions={this.props.actions}>{todo}</ListGroupItem>
  //     )
  //   );
  // }

  render() {
    console.log("props in todolist "+ this.props)
    let {todos,action} = this.props;
    return (
      <div class="container">
        <ListGroup>
        </ListGroup>
      </div>
    );
  }
}

function mapStateToProps(store) {
  console.log("store : ", store)
    return {
      todos: store.list
    }
}

function mapDispatchToProps(dispatch) {
  return{
    actions: bindActionCreators(todoActions,dispatch)
  }
}

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(TodoList);
