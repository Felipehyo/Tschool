import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//import Login from './Pages/Login';
import Register from './Pages/NewIncident';
import Event from './Pages/Event/index.js';
import NewEvent from './Pages/Event/NewEvent.js';
import Home from './Pages/Home';
import newIncident from './Pages/NewIncident';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/home" component={Home} />
                <Route path="/register" component={Register} />
                <Route exact path="/events" component={Event} />
                <Route exact path="/events/new" component={NewEvent} />
                <Route exact path="/newincident" component={newIncident} />
            </Switch>
        </BrowserRouter>
    );
}

//<Route path="/" exact component={Login} />