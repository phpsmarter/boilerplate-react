import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import R from 'ramda';

import { addTodo, toggleCompleteTodo } from '../actions/todos';
import AddTodo from '../components/AddTodo';
import TodoList from '../components/TodoList';

export class TodoPage extends Component {
  static propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired,
    addTodo: PropTypes.func.isRequired,
    toggleCompleteTodo: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.props = props;
  }

  handleAddClick = text => this.props.addTodo(text);

  toggleComplete = id => this.props.toggleCompleteTodo(id);

  render() {
    return (
      <div className="todo-page">
        <div className="container">
          <div className="section todo-section">
            <h1 className="title is-1 has-text-centered">Todo List:</h1>
            <div className="columns">
              <div className="column is-8 is-offset-2 text-center">
                <AddTodo onAddClick={this.handleAddClick} />
              </div>
            </div>
            <div className="columns">
              <div className="column is-8 is-offset-2 text-left">
                <TodoList todos={this.props.todos} toggleComplete={this.toggleComplete} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = R.pick(['todos']);

const mapDispatchToProps = dispatch => {
  return {
    addTodo: text => dispatch(addTodo(text)),
    toggleCompleteTodo: id => dispatch(toggleCompleteTodo(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoPage);
