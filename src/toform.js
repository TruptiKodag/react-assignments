import React from 'react';
import TodoList from './todolistt';
import { Link } from 'react-router-dom';

export default class TodoApp extends React.Component {
  constructor() {
    super();
    this.state = { items: [], text: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div>
        <h3>TODO</h3>
        <Link to="/list" className="dkhzadkha">list</Link>
        <br />
        <Link to="/list/testimonial" className="testimonial">testimonial</Link>
        <br />
        <Link to="/color" className="testimonial">color</Link>
        <form onSubmit={this.handleSubmit}>
          <label >
            My Plan
            </label> <input type='text' onChange={this.handleChange}
            value={this.state.text}
          />
          <button>
            SUBMIT
            </button>

        </form>
        <TodoList items={this.state.items} />
      </div>
    );
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.text.length) {
      return;
    }
    var newItem = {
      text: this.state.text
    };
    this.setState(({
      items: this.state.items.concat(newItem),
      text: ''
    }));
  }
}