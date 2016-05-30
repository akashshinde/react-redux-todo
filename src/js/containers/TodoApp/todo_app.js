/**
 * Created by akash on 29/05/16.
 */

import React from 'react'
import TodoNavbar from './../TodoNavbar/navbar'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

export default class TodoApp extends React.Component {
  render() {
    return (
      <div class="container">
        <TodoNavbar/>
        <TodoForm></TodoForm>
        <TodoList/>
      </div>
    )
  }
}
