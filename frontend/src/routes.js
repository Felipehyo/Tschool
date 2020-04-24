import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//import Login from './Pages/Login';
import Register from './Pages/Register';
import Profile from './Pages/Event';
import NewIncident from './Pages/NewIncident';
import Home from './Pages/Home';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/home" component={Home} />
                <Route path="/register" component={Register} />
                <Route path="/event" component={Profile} />
                <Route path="/incidents/new" component={NewIncident} />
            </Switch>
        </BrowserRouter>
    );
}

//<Route path="/" exact component={Login} />