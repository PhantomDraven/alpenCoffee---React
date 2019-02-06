import React, { Component } from 'react';

import { withAppContext } from '../Context';

import LoginForm from '../components/LoginForm';

class Login extends Component {    
    componentWillMount() {
        document.title = this.props.title;
    }

    render() {
        const { userDidLogin } = this.props;
        return (
            <React.Fragment>
                <h1 className="text-center margin-top">{/* alpenCoffee */}Things</h1>
                <LoginForm userDidLogin={userDidLogin}/>
            </React.Fragment>
        );
    }
}

export default withAppContext(Login);
