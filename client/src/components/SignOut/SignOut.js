import React, {Component} from 'react'
import { Redirect } from 'react-router-dom'

class SignOut extends Component{
    componentDidMount(){
        localStorage.removeItem('token_id');
    }

    render(){
        return <Redirect to='/'/>
    }
}

export default SignOut