import React from 'react';
import aboutImg from './img/about.jpg';

function About() {
    return(
        <div>
            <div className='py-40 bg-black text-center text-white px-4'>
                <h1 className='text-5xl lg:text-7xl font-bold mb-5'> About Us Page</h1> 
                <img src={aboutImg} 
                className='w-full'></img>
            </div>
        </div>
    )
}
export default About