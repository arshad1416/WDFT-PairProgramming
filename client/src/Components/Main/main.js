import React, { Component } from 'react';
import Hero from '../Hero/hero';
import HeroTable from '../HeroTable/herotable';
import './main.scss';
import Axios from 'axios';
// import url from 'https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2014-01-01&endtime=2014-01-02';

class Main extends Component {

    state = {
        quakeData: [{
        }]}

    componentDidMount() {
        Axios
            .get('https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2014-01-01&endtime=2014-01-02')
            .then(response => {this.setState({
                        quakeData: response.data.features
                    })
                })
        }

    render() {
        
        return (
            <>
                <Hero />
                <HeroTable quakeData = {this.state.quakeData} />
            </>
        );
    }
}

export default Main;