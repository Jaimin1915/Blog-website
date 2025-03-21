import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa6'

function Banner() {
    return(
        <div className='p-4 py-32 bg-black mx-auto'>   
            <div className='text-white text-center'>
                <h1 className='text-5xl lg:text-7xl font-bold mb-5'> Welcome to Our Blog</h1>
                <p className='text-gray-100 lg:w-3/5 mx-auto'> Start your blog today and Join a community of writers and creators who are
                    passionate about sharing their stories & ideas. we offer everything you need to 
                    get started, from helpful tips & tutorials.
                </p>
                <div>
                <Link to="/" className='font-medium hover:text-orange-500 pt-5 inline-flex'>Learn More 
                <FaArrowRight className='mt-1 ml-2'/></Link>
                </div>
            </div>
        </div>
    )
}

export default Banner