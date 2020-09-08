import React from 'react';

import Home from './screens/Home';
// import Login from './screens/Login';
// import Dashboard from './screens/admin';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            {/* <Route exact path="/login" component={Login} />
            <Route exact path="/Dashboard" component={Dashboard} /> */}
        </Switch>
    
    </BrowserRouter>
);

export default Routes;