import React, { Component } from 'react';
import './herotable.scss';

class Herotable extends Component {


    render () {
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
                        Occurrence
                    </h3>
                    <h3 className="earthquake__header--header3">
                        Magnitude
                    </h3>
                    <h3 className="earthquake__header--header4"
                        >Depth
                    </h3>
                </section>
                {this.props.quakedata.map(earthquakes => (
                    <section className="eartquake__table">
                        <h4 className="earthquake__tableRow1">
                            test
                        </h4>
                        <h4 className="earthquake__tableRow2">
                            test
                        </h4>
                    </section>
                ))}
            </main>
        );
    }
}

export default Herotable;