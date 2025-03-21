import React, { useEffect, useState } from 'react';
import BlogCards from './BlogCards';
import Pagination from './Pagination';
import CategorySelection from './CategorySelection';
import SideBar from './SideBar';

function BlogPage() {

    const [blogs, setBlogs] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    // blogs per page
    const pageSize = 12;
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [activeCategory, setActiveCategory] = useState(null);

    useEffect(()=> {
        async function fetchBlogs(){
            let url = `http://localhost:5000/blogs?page=${currentPage}&limit=${pageSize}`;

            // fileter by category
            if(selectedCategory){
                url += `&category=${selectedCategory}`
            }
            const response = await fetch(url);
            const data = await response.json();
            setBlogs(data);
        }
        fetchBlogs();
    }, [currentPage, pageSize, selectedCategory])

    // page changing btn
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        setCurrentPage(1);
        setActiveCategory(category);
    }

    return(
        <div>
            {/* category section */}
            <div> 
                <CategorySelection onSelectCategory={handleCategoryChange}
                selectedCategory={selectedCategory}
                activeCategory={activeCategory} />
            </div>

            {/* blogcards section */}
            <div className='flex flex-col lg:flex-row gap-12'>
                <BlogCards blogs={blogs} 
                currentPage={currentPage}
                selectedCategory={selectedCategory} 
                pageSize={pageSize}
                />

                {/* sidebar section */}
                <div>
                    <SideBar />
                </div>
            </div>

            {/* pagination section */}
            <Pagination onPageChange={handlePageChange} 
            currentPage={currentPage}
            blogs={blogs}
            pageSize={pageSize} />
        </div>
    )
}

export default BlogPage