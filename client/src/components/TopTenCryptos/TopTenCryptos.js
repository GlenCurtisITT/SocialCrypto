import React, {Component} from 'react'
import { css } from '@emotion/core'
import ClipLoader from 'react-spinners/RingLoader'
import styles from './TopTenCryptos.css'
import config from '../Config/config'

const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;

class TopTenCryptos extends Component{

    constructor(props){
        super(props);
        this.state = {
            coins: [],
            isLoading: true
        };
    }

    componentDidMount(){
        fetch(`${config.domain}/toptencryptos`)
            .then(response => response.json())
            .then(data => this.setState({ coins: data, isLoading: false }))
    }

    render(){
        const {coins, isLoading} = this.state;

        if(isLoading){
            return(
                <div className="row-lg-12">
                    <h4 className="text-center">Top 10 Cryptocurrencies by Market Capitalisation</h4>
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
            <div className="row-lg-12">
                <h4 className="text-center">Top 10 Cryptocurrencies by Market Capitalisation</h4>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Total Vol (24hr)</th>
                            <th scope="col">Market Cap</th>
                            <th scope="col">Change (24hr)</th>
                        </tr>
                    </thead>
                    <tbody>
                    {coins.map((coin, index) =>
                        <tr>
                            <th scope="row">{index + 1}</th>
                            <td><img className={styles.thumb} src={"https://www.cryptocompare.com" + coin.CoinInfo.ImageUrl} alt="" />{coin.CoinInfo.FullName} - {coin.CoinInfo.Name}</td>
                            <td>{coin.DISPLAY.USD.PRICE}</td>
                            <td>{coin.DISPLAY.USD.TOTALVOLUME24HTO}</td>
                            <td>{coin.DISPLAY.USD.MKTCAP}</td>
                            {coin.RAW.USD.CHANGEPCT24HOUR > 0 &&
                                <td className="text-success">{coin.RAW.USD.CHANGEPCT24HOUR}%</td>
                            }
                            {coin.RAW.USD.CHANGEPCT24HOUR < 0 &&
                            <td className="text-danger">{coin.RAW.USD.CHANGEPCT24HOUR}%</td>
                            }
                            {coin.RAW.USD.CHANGEPCT24HOUR === 0 &&
                            <td>{coin.RAW.USD.CHANGEPCT24HOUR}%</td>
                            }
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default TopTenCryptos