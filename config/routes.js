
import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Main from '../app/components/Main';
import Home from '../app/components/Home';

exports.routes = [{
    from: /^http:\/\/localhost\//,
    to: './'
}];

export default (
    <Router history={hashHistory}>
        <Route path='/' component={Main}>
            <IndexRoute component={Home} />
        </Route>
    </Router>
    );