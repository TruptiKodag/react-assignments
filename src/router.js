import { BrowserRouter, Route } from 'react-router-dom';
import React from 'react';
import TodoForm from './toform';
import Layout from './layout';
import TodoList from './todolistt';
import Testimonial from './test';

export default class Router extends React.Component {
    render() {
        return (
            <div className="DivRoute">
                <BrowserRouter>
                    <Layout path="/">

                        <Route exact={true} path="/" component={TodoForm} />
                        <Route exact={true} path="/list" component={TodoList} />
                        <Route path="/list/testimonial" component={Testimonial} />
                    </Layout>
                </BrowserRouter>
            </div>
        )
    }
}