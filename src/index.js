import React    from 'react';
import ReactDOM from 'react-dom';

import "antd/dist/antd.css";
import "./style.css";

// import * as serviceWorker from './serviceWorker';

import AppContext, { DEFAULT_VALUES } from './Context';

import App from './App';

ReactDOM.render(
    <AppContext.Provider value={DEFAULT_VALUES}>
        <App/>
    </AppContext.Provider>
    , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

// serviceWorker.unregister();
