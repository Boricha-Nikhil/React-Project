import React from 'react';
import { Route, Redirect } from 'react-router-dom';


const PubliceRoute = ({component: Component, ...rest}) => { 
    return (
        <Route {...rest} render={props => (
            localStorage.getItem("token") ?                
                <Redirect to="/dashboard" />
                :<Component {...props} /> 
        )} />
    );
};

export default PubliceRoute;