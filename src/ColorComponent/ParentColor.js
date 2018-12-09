import React from 'react';
import ChildColor from './ChildColor';
//import Router from './Router';
import ChildrenColor from './ChildrenColor';
export default class ParentColor extends React.Component {
    constructor() {
        super();
        this.state = {
            color: 'Blue'
        }
        this.handleColor = this.handleColor.bind(this);

    }


    handleColor(newColor) {

        this.setState({
            color: newColor
        })
    }
    render() {
        return (
            <div className="Color-Wrap">
                <ChildColor color={this.state.color} />
                {/*  <Router handleColor={this.handleColor} />*/}
                <ChildrenColor handleColor={this.handleColor} />

            </div>
        );
    }
} 