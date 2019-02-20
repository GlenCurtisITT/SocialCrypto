import React, {Component} from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../Home/Home'
import Login from '../Login/Login'
import SignUp from '../SignUp/SignUp'
import SignOut from '../SignOut/SignOut'
import VerifyAccount from '../VerifyAccount/VerifyAccount'


class Main extends Component {
    render() {
        return (
            <div className="container">
                    <main>
                        <Switch>
                            <Route exact path='/' component={Home} />
                            <Route path="/login" component={Login} />
                            <Route path="/signup" component={SignUp} />
                            <Route path="/signOut" component={SignOut} />
                            <Route path="/verifyPassword/:email/:authCode" component={VerifyAccount} />
                        </Switch>
                    </main>
            </div>
        )
    }
};

export default Main