import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

import ExchangeRate from './components/ExchangeRate';
import AboutPage from './components/AboutPage';

import reducers from './reducers';
import App from './components/App';

ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <Router history={hashHistory}>
            <Route component={App} path='/'>
                <IndexRoute component={AboutPage} />
                <Route component={AboutPage} path='/about' />
                <Route component={ExchangeRate} path='/rate'>
                    <Route component={ExchangeRate} path='/rate/:date'/>
                </Route>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
);