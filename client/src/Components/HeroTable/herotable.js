import React, { Component } from 'react';
import './herotable.scss';

class Herotable extends Component {
    render () {
        return (
            <main className="earthquake">
                <h1 className="earthquake__title">
                    US Earthquake Information
                </h1> 
                <section className="earthquake__table">
                    <h3 className="earthquake__table--header1">
                        Place
                    </h3>
                    <h3 className="earthquake__table--header2">
                        Occurrence
                    </h3>
                    <h3 className="earthquake__table--header3">
                        Magnitude
                    </h3>
                    <h3 className="earthquake__table--header4"
                        >Depth
                    </h3>
                </section>
            </main>
        );
    }
}

export default Herotable;