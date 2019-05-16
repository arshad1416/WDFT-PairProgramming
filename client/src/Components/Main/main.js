import React, { Component } from 'react';
import Hero from '../Hero/hero';
import HeroTable from '../HeroTable/herotable';

import './main.scss';
// import Axios from 'axios';

class Main extends Component {

    // componentDidMount {
        
    // }

    render() {
        return (
            <>
                <Hero />
                <HeroTable />
            </>
        );
    }
}

export default Main;