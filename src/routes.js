import React from 'react';

import Home from './screens/Home';
// import Posts from './screens/Posts';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
// 
const Routes = () => (
    <BrowserRouter basename={window.location.pathname || ''}>

            <Route path="/" exact component={Home} />
            {/* <Route path="/noticias" component={Posts} />  */}

    
    </BrowserRouter>
);

export default Routes;