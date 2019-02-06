import React, { Component } from 'react';

import { withRouter } from 'react-router-dom';

import { withAppContext } from '../Context';

class Home extends Component {
    
    componentWillMount() {
        document.title = this.props.title;
    }
    
    render() {
        return (
            <h1 className="text-center margin-top">{/* alpenCoffee*/}Things</h1>
        );
    }
}

export default withRouter(withAppContext(Home));
