import React    from 'react';

const DEFAULT_VALUES = {
    pocket: 0,
    updateUserStatus: () => {
        this.logged = !this.logged;
    },
    drink: (context) => {
        const savePocket = this.pocket;
        this.pocket = savePocket - 0.2;
    },
    refill: (context, money) => {
        const savePocket = this.pocket;
        this.pocket = savePocket + money;
    }
}

const AppContext = React.createContext({DEFAULT_VALUES});

const withAppContext = Component => props => (
    <AppContext.Consumer>
      {app => <Component {...props} app={app} />}
    </AppContext.Consumer>
);

export default AppContext;

export { withAppContext, DEFAULT_VALUES };