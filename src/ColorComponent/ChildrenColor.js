import React from 'react';
import Router from './Router';
export default class ChildrenColor extends React.Component {
    render() {
        return (
            <Router handleColor={this.props.handleColor} />
        )
    }
}