/*
 * @Author: samantha
 * @Date: 2019-03-19 11:08:05
 * @Last Modified by: Samantha
 * @Last Modified time: 2019-03-21 16:00:41
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Redirect, Route, Link } from 'react-router-dom';

import Layout from 'component/layout/index.jsx';
// 页面
import Home from 'page/home/index.jsx';

class App extends React.Component {
    render() {
        return (
            <Router>
                <Layout>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/product" component={Home} />
                        <Route exact path="/product-category" component={Home} />
                    </Switch>
                </Layout>
            </Router>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);