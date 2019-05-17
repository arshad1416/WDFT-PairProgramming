import React, { Component } from 'react';
import './herotable.scss';

class Herotable extends Component {

    render () {
        if (!this.props.quakeData[0].properties){
            // console.log(this.props.quakeData[0].properties)
            
            return <h1 className="test">Loading...</h1>
        }
        const {place, time, mag, url} = this.props.quakeData[0].properties;
        const {coordinates} = this.props.quakeData[0].geometry;
        let date = new Date(time)
        let dd = String(date.getDate()).padStart(2, '0');
        let mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
        let yyyy = date.getFullYear();
        date = mm + '/' + dd + '/' + yyyy;

        return (
            <main className="earthquake">
                <h1 className="earthquake__title">
                    US Earthquake Information
                </h1> 
                <section className="earthquake__header">
                    <h3 className="earthquake__header--header1">
                        Place
                    </h3>
                    <h3 className="earthquake__header--header2">
                        Date
                    </h3>
                    <h3 className="earthquake__header--header3">
                        Magnitude
                    </h3>
                    <h3 className="earthquake__header--header4">
                        Depth
                    </h3>
                    <h3 className="earthquake__header__header5">
                        Interative Map
                    </h3>
                </section>
                {this.props.quakeData.map(() => (
                    <section className="eartquake__table">
                        <section className="earthquake__tableRow1">
                            <h4 className="earthquake__place">
                                {place}
                            </h4>
                            <h4 className="earthquake__date">
                                {date}
                            </h4>
                            <h4 className="earthquake__mag">
                                {mag}
                            </h4>
                            <h4 className="earthquake__depth">
                                {coordinates[2]}
                            </h4>
                            {/* <h4 className="earthquake__link">
                                {url}
                            </h4> */}
                        </section>
                        <section className="earthquake__tableRow2">
                            
                        </section>
                    </section>
                ))}
            </main>
        );
    }
}

export default Herotable;