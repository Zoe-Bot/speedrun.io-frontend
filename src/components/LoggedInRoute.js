import React from 'react'
import { Redirect, Route } from 'react-router'

const LoggedInRoute = (props) => {
    const condition = localStorage.getItem('auth_token')
    return condition ? (<Redirect to="/profile"/>) : (<Route path={props.path} exact={props.exact} component={props.component} />)
}
    
export default LoggedInRoute