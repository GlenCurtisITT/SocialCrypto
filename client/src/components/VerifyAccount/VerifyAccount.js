import React, {Component} from 'react';
import { Redirect } from 'react-router-dom'

class VerifyAccount extends Component{

    constructor(props){
        super(props);

        this.state = {
            email: props.match.params.email,
            authCode: props.match.params.authCode
        };
    }

    render(){
        return <Redirect to='/'/>
    }
}

export default VerifyAccount