import React, { Component } from 'react';
import './herotable.scss';

class Herotable extends Component {
    render () {
        return (
            <main className="earthquake">
            <div className="earthquake__title">US Earthquake Information</div> 
            <div className="earthquake__table">
                <div className="earthquake__table--header1">Place</div>
                <div className="earthquake__table--header2">Occurrence</div>
                <div className="earthquake__table--header3">Magnitude</div>
                <div className="earthquake__table--header4">Depth</div>
            </div>
            </main>
        );
    }
}

export default Herotable;