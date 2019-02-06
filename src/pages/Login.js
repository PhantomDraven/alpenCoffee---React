import React, { Component } from 'react';

import { withRouter } from 'react-router-dom';

import App from '../App';
import { withAppContext } from '../Context';

import LoginForm from '../components/LoginForm';

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isAuth: false
        }
    }

    userDidLogin = () => {
        this.setState({isAuth: !isAuth});
    } 

    render() {
        const { isAuth } = this.state;
        return (
            <App title="AlpenCoffee - Login" isAuth={isAuth}>
                <h1 className="text-center margin-top">alpenCoffee</h1>
                <LoginForm userDidLogin={this.userDidLogin}/>
            </App>
        );
    }
}

export default withRouter(withAppContext(Login));
