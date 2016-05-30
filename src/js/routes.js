import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';

import App from './components/App';
import TodoApp from '../js/containers/TodoApp/todo_app'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={TodoApp} />
  </Route>
);
