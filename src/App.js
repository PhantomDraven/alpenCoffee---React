import React, { Component } from 'react';

import { withRouter } from 'react-router-dom';
import { withAppContext } from './Context';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isAuth: this.props.isAuth
        };
    }

    componentWillMount() {
        document.title = this.props.title;
    }

    componentDidMount() {

    }
    
    componentWillUpdate() {
        if (this.props.app.logged) {
            this.props.history.push('/');
        } else {
            this.props.history.push('/login');
        }
    }
    
    render() {
        return (
        <div className="main-wrapper">
            <header className="header">
            </header>
            <main className="main">
                {this.props.children}
            </main>
        </div>
        );
    }
}

export default withRouter(withAppContext(App));
