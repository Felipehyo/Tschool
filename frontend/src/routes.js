import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Home from './Pages/Home';
import Event from './Pages/Event/index.js';
import Responsible from './Pages/Responsible';
import Student from './Pages/Student';
import Class from './Pages/Class';
import EventByClass from './Pages/EventClass';
import Participants from './Pages/Participants';

/*Autenticação*/
import { isAuthenticated } from './Auth'
const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {... rest} render = { 
        props => isAuthenticated() ? (
            <Component {... props} />
        ) : (
            <Redirect to={{ pathname: '/', state: { from: props.location } }} />
        )
        }/>
);

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                {/* Rotas autenticadas */}
                <PrivateRoute exact path="/events" component={Event} />
                <PrivateRoute exact path="/responsibles" component={Responsible} />
                <PrivateRoute exact path="/students" component={Student}/>
                <PrivateRoute exact path="/classes" component={Class}/>
                <PrivateRoute exact path="/eventsbyclass" component={EventByClass}/>
                <PrivateRoute exact path="/participants" component={Participants}/>
                
            </Switch>
        </BrowserRouter>
    );
}