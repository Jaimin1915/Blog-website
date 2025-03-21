import React, { useEffect, useState } from 'react';
import { FaArrowRight } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

function SideBar() {
    const [news, setNews] = useState([]);
    const API_KEY = "048f0b29e6204fa691715e13c44f5d2f";

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await fetch(`https://newsapi.org/v2/everything?q=a&apiKey=${API_KEY}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setNews(data.articles.slice(0, 15)); // Fetch top 15 articles
            } catch (error) {
                console.error('Error fetching news:', error);
            }
        };

        fetchNews();
    }, [API_KEY]);

    return (
        <div>
            <div>
                <h3 className='text-2xl font-semibold px-4'>Latest News</h3>
                {news.slice(0, 5).map((article, index) => (
                    <div key={index} className='my-5 border-b-1 border-spacing-2 px-4'>
                        <h4 className='font-medium mb-2'>{article.title}</h4>
                        <Link to={article.url} target='_blank' rel='noopener noreferrer' className='text-base pb-2 hover:text-orange-500 pt-5 inline-flex'>
                            read more <FaArrowRight className='mt-1 ml-2'/>
                        </Link>
                    </div>
                ))}
            </div>

            <div>
                <h3 className='text-2xl font-semibold px-4 mt-20'>Popular News</h3>
                {news.slice(5, 10).map((article, index) => (
                    <div key={index} className='my-5 border-b-1 border-spacing-2 px-4'>
                        <h4 className='font-medium mb-2'>{article.title}</h4>
                        <Link to={article.url} target='_blank' rel='noopener noreferrer' className='text-base pb-2 hover:text-orange-500 pt-5 inline-flex'>
                            read more <FaArrowRight className='mt-1 ml-2'/>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SideBar;
