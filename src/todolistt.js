import React from 'react';
export default class TodoList extends React.Component {
  render() {
    return (
      <ol>
        List Component
          {this.props.items.map(item => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ol>
    );
  }
}

TodoList.defaultProps = {
  items: [],
}

