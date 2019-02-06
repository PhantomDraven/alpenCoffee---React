import React, { Component } from 'react';

import AppContext, { DEFAULT_VALUES } from './Context';

import { BrowserRouter } from 'react-router-dom';

import Http from './components/Http';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            ...DEFAULT_VALUES,
            appName: "AlpenCoffee",
            separator: " - "
        };

        this.userDidLogin = this.userDidLogin.bind(this);
    }

    userDidLogin = () => {
        this.setState({isAuth: !this.state.isAuth}, () => {
            console.log(this.state);
        });
    }
    
    render() {
        const { appName, isAuth, separator } = this.state;
        const appCompleteName = appName + separator;
        return (
            <AppContext.Provider value={this.state}>
                <div className="main-wrapper">
                    <header className="header">
                    </header>
                    <main className="main">
                        <BrowserRouter>
                            <Http auth={isAuth} appName={appCompleteName} userDidLogin={this.userDidLogin}/>   
                        </BrowserRouter>
                    </main>
                </div>
            </AppContext.Provider>
        );
    }
}

export default App;
