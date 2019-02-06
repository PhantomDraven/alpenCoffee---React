import React, { Component } from 'react';

import { Route, withRouter } from 'react-router-dom';

import { withAppContext } from '../../Context';

import Login    from '../../pages/Login';
import Home    from '../../pages/Home';

class Http extends Component {
    constructor(props) {
        super(props);

        this.redirectToUnsecure = this.redirectToUnsecure.bind(this);
    }

    redirectToUnsecure() {
        if (this.props.app.isAuth) {
            this.props.history.push('/');
        } else {
            this.props.history.push('/login');
        }
    }

    componentDidMount() {
        this.redirectToUnsecure();
    }

    componentWillUnmount() {
        this.redirectToUnsecure = null;
    }

    componentWillUpdate() {
        // console.log(this.props.app);
    }


    render() {
        const { auth: isAuth, appName, userDidLogin } = this.props; 
        return(
            <React.Fragment>
                <Route exact path="/" render={() => <Home auth={isAuth} title={appName + "Home"}/> }/>
                <Route path="/login" render={() => <Login auth={isAuth} title={appName + "Login"} userDidLogin={userDidLogin}/> }/>
            </React.Fragment>
        )
    }
}

export default withRouter(withAppContext(Http));