import { BrowserRouter, Route } from 'react-router-dom';
import React from 'react';
import Layout from './layout';
import TodoList from './todolistt';
import Testimonial from './test';
import TodoApp from './toform';
import ParentColor from './ColorComponent/ParentColor';

export default class Router extends React.Component {
    render() {
        return (
            <div className="DivRoute">
                <BrowserRouter>
                    <Layout path="/">

                        <Route exact={true} path="/" component={TodoApp} />
                        <Route exact={true} path="/list" component={TodoList} />
                        <Route path="/list/testimonial" component={Testimonial} />
                        <Route path="/color" component={ParentColor} />
                    </Layout>
                </BrowserRouter>
            </div>
        )
    }
}