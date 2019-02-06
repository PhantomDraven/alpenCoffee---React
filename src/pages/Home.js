import React, { Component } from 'react';

import { withRouter } from 'react-router-dom';

import App from '../App';
import { withAppContext } from '../Context';

class Home extends Component {
    render() {
        return (
            <App title="AlpenCoffee - Homepage">
                <h1 className="text-center margin-top">alpenCoffee</h1>
            </App>
        );
    }
}

export default withRouter(withAppContext(Home));
