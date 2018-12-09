import React from 'react';
export default class Router extends React.Component {
    render() {
        return (
            <div>
                <button onChange={this.handleColor} onClick={() => { this.props.handleColor('pink') }}>PINK</button>
                <button onChange={this.handleColor} onClick={() => { this.props.handleColor('orange') }}> ORANGE</button >
            </div>
        )
    }
}