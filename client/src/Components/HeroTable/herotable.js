import React, { Component } from 'react';
import './herotable.scss';

class Herotable extends Component {
    timeFunction = (time) => {
        let date = new Date(time)
        let dd = String(date.getDate()).padStart(2, '0');
        let mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
        let yyyy = date.getFullYear();
        date = mm + '/' + dd + '/' + yyyy;
        return date;
    }
    render () {
        if (!this.props.quakeData){
            
            return <h1 className="test">Loading...</h1>
        } 
        // const {place, time, mag} = this.props.quakeData.properties;
        // const {coordinates} = this.props.quakeData.geometry;
        // let date = new Date(this.props.quakeData.properties.time)
        // console.log(this.props.quakeData)
        
        return (
            <main className="earthquake">
                <h1 className="earthquake__title">
                    US Earthquake Information
                </h1> 
                <section className="earthquake__header">
                    <h3 className="earthquake__column">
                        Place
                    </h3>
                    <h3 className="earthquake__column">
                        Date
                    </h3>
                    <h3 className="earthquake__column">
                        Magnitude
                    </h3>
                    <h3 className="earthquake__column">
                        Depth
                    </h3>
                    {/* <h3 className="earthquake__header__header5">
                        Interative Map
                    </h3> */}
                </section>
                {this.props.quakeData.map((datum) => (
                    <section className="eartquake__table">
                        <section className="earthquake__tableRow1">
                            <h4 className="earthquake__column">
                                {datum.properties.place}
                            </h4>
                            <h4 className="earthquake__column">
                                {this.timeFunction(datum.properties.time)}
                            </h4>
                            <h4 className="earthquake__column">
                                {datum.properties.mag}{datum.properties.magType}
                            </h4>
                            <h4 className="earthquake__column">
                                {datum.geometry.coordinates[2]}
                            </h4>
                            {/* <h4 className="earthquake__link">
                                {datum.properties.url}
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