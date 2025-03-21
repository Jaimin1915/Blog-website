import React, { useEffect, useState } from 'react';

function CategorySelection({onSelectCategory, activeCategory}) {
    const categories = ['Health', 'Fintech', 'Startups', 'Security', 'AI', 'Tech'];


    return(
        <div className='gap-5 flex flex-wrap item-center border-b-2 py-5 text-gray-900 font-semibold'>
            <button 
            className={`lg:ml-12 ${activeCategory ? '' : 'active-button'}`}
            onClick={()=> (onSelectCategory(null))}>All</button>
            {
                categories.map((category) => (
                    <button 
                    onClick={() => onSelectCategory(category)}
                    className={`mr-2 space-x-16 ${activeCategory === category ? 'active-button':''}`}
                    key={category}>
                        {category} 
                    </button>
                ))
            }
        </div>
    )
}

export default CategorySelection