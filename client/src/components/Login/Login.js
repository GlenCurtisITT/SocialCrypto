import React, {Component} from 'react'
import axios from 'axios'
import config from '../Config/config'

class Login extends Component {

    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            error: null
        }

        this.change = this.change.bind(this);
        this.submit = this.submit.bind(this);
    }

    change(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    async submit(e){
        e.preventDefault();
        let res = await axios.post(`${config.domain}/users/login`, {
            email: this.state.email,
            password: this.state.password
        });
        if(res.data.error){
            this.setState({error: res.data.error})
        }else{
            localStorage.setItem('token_id', res.data.token);
            //window.location.reload();
            this.props.history.push({
                pathname: '/',
                state: {
                    success: 'Logged in successfully.'
                }
            });

        }

    }

    render(){
        const error = this.state.error;
        return (
            <React.Fragment>
                <div className="row">
                    <div className="col-lg-6">
                        {error &&
                        <div className="alert alert-danger">
                            {error}
                        </div>
                        }
                        <form onSubmit={e => this.submit(e)}>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Email address</label>
                                <input type="email" className="form-control" name="email" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={e => this.change(e)} value={this.state.email} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Password</label>
                                <input type="password" className="form-control" name="password" id="exampleInputPassword1" placeholder="Password" onChange={e => this.change(e)} value={this.state.password} />
                            </div>
                            <a href="/users/forgotPassword/">Forgot your password?</a><br/>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Login