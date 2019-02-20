import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import jwt from '../../helpers/jwt'

class Header extends Component {
    constructor(props){
        super(props);
        this.state = {
            user: undefined,
        }
    }

    async componentDidMount(){
        let user = await jwt.getUserFromJwt();
        console.log('Component Did Mount')
        console.log(user);
        if(user){
            this.setState({user: user})
        }else{
            this.setState({user: undefined})
        }
    }

    async componentWillReceiveProps(){
        console.log('Component Receive Props')
        let user = await jwt.getUserFromJwt();
        console.log(user);
        if(user){
            this.setState({user: user})
        }else{
            this.setState({user: undefined})
        }
    }

    render() {
        const user = this.state.user;
        return (
            <React.Fragment>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
                    <div className="container">
                        <Link to='/' className="navbar-brand js-scroll-trigger">Social Crypto</Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarResponsive"
                                aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            {user &&
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <Link className="nav-link js-scroll-trigger" to="/signout">Sign-Out</Link>
                                </li>
                            </ul>
                            }
                            {!user &&
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <Link className="nav-link js-scroll-trigger" to="/signup">Sign-Up</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link js-scroll-trigger" to="/login">Login</Link>
                                </li>
                            </ul>
                            }
                        </div>
                    </div>
                </nav>
                <div id="navPadding">

                </div>
            </React.Fragment>
        )
    }
}

export default Header