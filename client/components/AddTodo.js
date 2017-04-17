import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from './Button';

export default class AddTodoContainer extends Component {
  static propTypes = {
    addTodo: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.props = props;
  }

  state = {
    text: '',
  }

  componentDidMount() {
    window.addEventListener('keypress', this.keypress);
  }

  componentWillUnmount() {
    window.removeEventListener('keypress', this.keypress);
  }

  styles = {
    button: {
      width: '100%',
    },
  }

  updateText = e => this.setState({ text: e.target.value })

  keypress = e => {
    if (e.key === 'Enter') { this.addTodo(); }
  }

  handleClick = e => {
    e.preventDefault();
    this.addTodo();
  }

  addTodo = () => {
    const text = this.state.text;
    if (text) {
      this.props.addTodo(text);
      this.setState({ text: '' });
    }
  }

  render() {
    return (
      <div className="add-todo columns is-gapless">
        <div className="column is-10">
          <input className="input" type="text" value={this.state.text} onChange={this.updateText} />
        </div>
        <div className="column is-2">
          <Button style={this.styles.button} handleClick={this.handleClick} label="Add" type="success" />
        </div>
      </div>
    );
  }
}
