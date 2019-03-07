import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from '@src/App';
import store from '@store';

ReactDOM.hydrate(
    <Provider store={store}>
        <Router>
            <App></App>
        </Router>
    </Provider>
    , document.getElementById('app'));