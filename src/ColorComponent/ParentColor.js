import React from 'react';
import ChildColor from './ChildColor';
//import Router from './Router';
import ChildrenColor from './ChildrenColor';
export default class ParentColor extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="Color-Wrap">
                <ChildColor />
                {/*  <Router handleColor={this.handleColor} />*/}
                <ChildrenColor />

            </div>
        );
    }
} 