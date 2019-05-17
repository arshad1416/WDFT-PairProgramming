import React, { Component } from 'react';
import './herotable.scss';

class Herotable extends Component {


    render () {
        const {place, time, mag} = this.props.quakedata.properties;
        const {longitude, latitude, depth} = this.props.quakedata.geometry;
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
                    <h3 className="earthquake__header--header4"
                        >Depth
                    </h3>
                </section>
                {this.props.quakedata.map((mag, date, place, coordinates, id) => (
                    <section className="eartquake__table">
                        <section className="earthquake__tableRow1">
                            <h4 className="earthquake__place">
                                {place}
                            </h4>
                            <h4 className="earthquake__date">
                                {date}
                            </h4>
                            <h4 className="earthquake__date">
                                {mag}
                            </h4>
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