import React from 'react';
import ReactDOM from 'react-dom';
import './modules/rem'
import App from './App';
import * as serviceWorker from './serviceWorker';
import './modules/rem.js'
import 'antd-mobile/lib/date-picker/style/css';
import './stylesheets/main.scss'
import { BrowserRouter as Router } from 'react-router-dom'
import store from './store'
import { Provider } from 'react-redux'
import { Component } from 'react'
import axios from 'axios'
Component.prototype.$http = axios
ReactDOM.render(
    <Provider store = {store}>
        <Router>
        <App />
        </Router>
    </Provider>

, document.getElementById('app'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
