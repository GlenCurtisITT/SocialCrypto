import React, {Component} from 'react'
import { css } from '@emotion/core'
import ClipLoader from 'react-spinners/RingLoader'
import styles from './TopNewsArticles.css'
import config from '../Config/config'

const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;

class TopNewsArticles extends Component{

    constructor(props){
        super(props);
        this.state = {
            newsArticles: [],
            isLoading: true
        };
    }

    componentDidMount(){
        fetch(`${config.domain}/topnewsarticles`)
            .then(response => response.json())
            .then(data => this.setState({ newsArticles: data, isLoading: false }))
    }

    render(){
        const {newsArticles, isLoading} = this.state;

        if(isLoading){
            return(
                <div className="row-lg-12">
                    <h4 className="text-center">Top News in Crypto-Currency</h4>
                    <ClipLoader
                        css={override}
                        sizeUnit={"px"}
                        size={150}
                        color={'#000000'}
                        loading={this.state.isLoading}
                    />
                </div>
            )
        }

        return (
            <React.Fragment>
                <div className="row">
                    <div className="col-lg-12">
                    <h4 className="text-center">Top News in Crypto-Currency</h4>
                    </div>
                </div>
                <div className="row">
                    <div className={"col-sm-12 col-md-6 col-lg-6  py-0 pl-3 pr-1" + styles.featcard}>
                        <div id="featured" className="carousel slide carousel-fade" data-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <div className="card bg-dark text-white">
                                        {newsArticles.featuredNewsArticle.map(news =>
                                            <React.Fragment>
                                                <img className="card-img img-fluid" src={news.imageurl} alt="" />
                                                <div className={"card-img-overlay d-flex" + styles.linkfeat}>
                                                    <a href={news.url} className="align-self-end" target="_blank" rel="noopener noreferrer">
                                                        <h4 className={styles["card-title"]}>{news.title}</h4>
                                                    </a>
                                                </div>
                                            </React.Fragment>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 py-0 px-1 d-none d-lg-block">
                        <div className="row">
                            {newsArticles.otherNewsArticles.map((news, index) =>
                                <React.Fragment>
                                    <div className={"col-6 pb-2 mg-" + (index +1)}>
                                        <div className="card bg-dark text-white">
                                            <img className="card-img img-fluid" src={news.imageurl} alt="" />
                                                <div className="card-img-overlay d-flex">
                                                    <a href={news.url} className="align-self-end" target="_blank" rel="noopener noreferrer">
                                                        <h6 className={styles["card-title"]}>{news.title}</h6>
                                                    </a>
                                                </div>
                                        </div>
                                    </div>
                                </React.Fragment>
                            )}
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
};

export default TopNewsArticles