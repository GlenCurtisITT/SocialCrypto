import React, {Component} from 'react';
import jwt from '../../helpers/jwt'
import config from '../Config/config'
import axios from 'axios'

class AuthenticatedComponent extends Component{
    constructor(props){
        super(props);

        this.state = {
            user: undefined
        }
    }

    async componentDidMount(){
        const jwt = getJwt();
        if(!jwt){
            this.props.history.push('/login');
        }

        let res = jwt.getUserFromJwt();
        if(res.data.error){

        }


    }
}

export default AuthenticatedComponent;