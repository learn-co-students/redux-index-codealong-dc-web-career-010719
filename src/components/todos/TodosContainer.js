import React, { Component } from 'react'
import { connect } from 'react-redux'
import Todo from './Todo'

class TodosContainer extends Component {

  render() {
    const { todos } = this.props
    return (
      <div>
        <ul>
          {todos.map((todo) => {
            return <Todo text={todo} key={todo.id} />
          })}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
}

export default connect(mapStateToProps)(TodosContainer)
