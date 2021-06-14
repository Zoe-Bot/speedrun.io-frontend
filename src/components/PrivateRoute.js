import React from 'react'
import { Redirect, Route } from 'react-router'

const PrivateRoute = (props) => {
    const condition = localStorage.getItem('auth_token')
    return condition ? (<Route path={props.path} exact={props.exact} component={props.component} />) : (<Redirect to="/login"/>)
}
    
export default PrivateRoute