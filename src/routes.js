import React from 'react';

import Home from './screens/Home';
import Posts from './screens/Posts';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
// basename={window.location.pathname || ''}
const Routes = () => (
    <BrowserRouter >
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/noticias" component={Posts} /> 
        </Switch>
    
    </BrowserRouter>
);

export default Routes;