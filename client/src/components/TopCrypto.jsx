import React, { Component } from 'react';
import axios from "axios/index";

class TopCrypto extends React.Component {
    state = {
        title: "",
        count: 0
    }

    componentDidMount() {
        axios.get("http://localhost:3001")
            .then(res => {
                const t = res.data
                this.setState(t)
            })
    }

    render() {
        return (
            <h1>{this.state.title}</h1>
        );
    }
}

export default TopCrypto