import React, { Component } from 'react';
import Hero from '../Hero/hero';
import HeroTable from '../HeroTable/herotable';
<<<<<<< HEAD
import './main.scss';
import Axios from 'axios';
import URL from 'https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2014-01-01&endtime=2014-01-02';

class Main extends Component {

    state = {quakeData: {features:[]}}

    componentDidMount() {
        Axios
            .get(`${URL}`)
            .then(response => {
                this.setState({
                    quakeData: response.data.features
            });
        })
    }
=======

import './main.scss';
// import Axios from 'axios';

class Main extends Component {

    // componentDidMount {
        
    // }
>>>>>>> 6c7bd70373ebdeffad255e3c048b6c68a03ac7d8

    render() {
        return (
            <>
                <Hero />
<<<<<<< HEAD
                <HeroTable quakeData = {this.state.quakeData} />
=======
                <HeroTable />
>>>>>>> 6c7bd70373ebdeffad255e3c048b6c68a03ac7d8
            </>
        );
    }
}

export default Main;