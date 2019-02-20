import React, {Component} from 'react'

class SignUp extends Component {

    render(){
        return (
            <React.Fragment>
                <div class="row">
                    <div className="col-lg-6">
                        <form action="/users/signup" method="post">
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Email address</label>
                                <input type="email" className="form-control" name="email" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Password</label>
                                <input type="password" className="form-control" name="password" id="exampleInputPassword1" placeholder="Password" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Password</label>
                                <input type="password" className="form-control" name="passwordConf" id="exampleInputPassword2" placeholder="Password Confirm" />
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default SignUp