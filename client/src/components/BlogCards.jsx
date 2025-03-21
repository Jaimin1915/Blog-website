import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';

function BlogCards({ blogs, currentPage, pageSize, selectedCategory }) {
    const filteredBlogs = blogs
        .filter((blog) => !selectedCategory || blog.category === selectedCategory)
        .slice((currentPage - 1) * pageSize, currentPage * pageSize);

    return (
        <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3 auto-rows-max'>
            {filteredBlogs.map((blog) => (
                <Link
                    to={`/blog/${blog.id}`}
                    key={blog.id}
                    className='p-5 shadow-lg rounded cursor-pointer h-90' // fixed height
                >
                    <div className='h-40'>
                        <img src={blog.image} alt={blog.title} className='w-full h-full object-cover' />
                    </div>
                    <h3 className='mt-4 mb-2 font-bold hover:text-blue-600 cursor-pointer text-ellipsis'>
                        {blog.title}
                    </h3>
                    <p className='mb-2 text-sm text-gray-600 flex items-center'>
                        <FaUser className='inline-flex item-center mr-2' />
                        {blog.author}
                    </p>
                    <p className='text-sm text-gray-500'>Published: {blog.published_date}</p>
                </Link>
            ))}
        </div>
    );
}

export default BlogCards;
