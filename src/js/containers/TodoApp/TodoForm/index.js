/**
 * Created by akash on 30/05/16.
 */

import React from 'react'
import {FormGroup,
  ControlLabel,
  Button,
  FormControl} from 'react-bootstrap'

export default class TodoForm extends React.Component {


  render() {
    return (
      <div className="container">
        <form action="#">
          <FormGroup controlId="todoform">
              <ControlLabel>To Do</ControlLabel>
              <FormControl type="text" placeholder="Enter todo" />
          </FormGroup>
          <Button type="submit" bsStyle="danger">Create</Button>
        </form>
      </div>
    )
  }
}
