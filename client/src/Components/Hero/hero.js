import React, { Component } from 'react';
import heroImage1 from '../../Assets/earthquake.jpeg';
import heroImage2 from '../../Assets/seismograph_color.jpg';
import './hero.scss';

class hero extends Component {
    render () {
        return (
            <main className='hero'>
                <section className='hero__image1'>
                    <img src={heroImage1} alt='heroImage1' className='hero__image' />
                </section>
                <section className='hero__image2'>
                    <img src={heroImage2} alt='heroImage2' className='hero__image' />
                </section>
            </main>
        );
    }
}

export default hero;