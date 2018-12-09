import React from 'react';
export default class ChildColor extends React.Component {
    render() {
        return (
            <h1 style={{ color: this.props.color }}>ColorCombination</h1>

        )
    }

}