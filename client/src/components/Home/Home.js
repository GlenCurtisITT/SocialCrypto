import React, {Component} from 'react'
import TopTenCryptos from '../TopTenCryptos/TopTenCryptos'
import TopNewsArticles from '../TopNewsArticles/TopNewsArticles'

class Home extends Component{
    constructor(props){
        super(props);

        this.state = {
            error: undefined,
            success: undefined
        };

    }
    render(){
        return (
            <React.Fragment>
                <TopTenCryptos/>
                <TopNewsArticles/>
            </React.Fragment>
        )
    }
};

export default Home