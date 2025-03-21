import React from 'react';

function Pagination({ onPageChange, currentPage, blogs, pageSize }) {
    const totalPages = Math.ceil(blogs.length / pageSize);

    const renderPaginationLinks = () => {
        return Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
            <li className={pageNumber === currentPage ? "activePagination" : ""} key={pageNumber}>
                <a href='#' onClick={(e) => {e.preventDefault(); onPageChange(pageNumber); }}>
                    {pageNumber}
                </a>
            </li>
        ));
    };

    return (
        <div>
            <ul className='pagination my-8 flex-wrap gap-4'>
                <li>
                    <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>
                        prev
                    </button>
                </li>
                <div className='flex gap:1 mb-4 mt-3'> {renderPaginationLinks()} </div>
                <li>
                    <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>
                        next
                    </button>
                </li>
            </ul>
        </div>
    );
}

export default Pagination;
