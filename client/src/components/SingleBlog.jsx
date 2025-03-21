import React, { useEffect, useState } from 'react';
import { FaClock, FaUser } from 'react-icons/fa6';
import { useParams } from 'react-router-dom';

function SingleBlog() {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);

    useEffect(() => {
        async function fetchBlog() {
            const response = await fetch(`http://localhost:5000/blogs/${id}`);
            const data = await response.json();
            setBlog(data[0]); // Assuming the response is an array with a single blog
        }
        fetchBlog();
    }, [id]);

    if (!blog) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <div className='py-40 bg-black text-center text-white px-4'>
                <h2 className='text-5xl lg:text-7xl leading-snug font-bold mb-5'>
                    Single Blog
                </h2>
            </div>

            <div className='max-w-7xl mx-auto my-12'>
                <div className='lg:w-3/4 mx-auto'>
                <h2 className='text-3xl font-semibold mb-4 text-blue-500 cursor-pointer'>{blog.title}</h2>
                    <div>
                        <img src={blog.image} alt={blog.title} className='w-full mx-auto rounded' />
                    </div>
                    <p className='text-gray-600'><FaUser className='inline-flex item-center mr-2'/>{blog.author} | <FaClock className='inline-flex item-center mr-2'/>{blog.published_date}</p>
                    <p className='text-gray-600'><FaClock className='inline-flex item-center mr-2'/>{blog.reading_time}</p>
                    <p className='text-base mb-6 mt-2'>{blog.content}</p>
                    <div>
                        <p className=''>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore, consequuntur expedita consectetur rerum praesentium error amet quisquam earum cum nulla laboriosam deserunt vel voluptates debitis dicta accusantium consequatur impedit illum quae eos atque. Voluptatum, architecto qui! Illo autem repellendus quibusdam sed dolores. Repellat maxime accusantium reprehenderit voluptas dignissimos quis natus eveniet officia magnam, expedita eaque nesciunt eos omnis sequi? Incidunt dolores aperiam numquam itaque atque sapiente quia iste recusandae in?</p>
                        <br></br>
                        <p> Sequi, nisi sed? Quaerat repellendus nihil aliquam perspiciatis. Cupiditate repellat minima laborum. Blanditiis distinctio nisi consequuntur nesciunt dicta nam ut perferendis repudiandae reprehenderit. Quod accusantium, aut adipisci hic beatae delectus quibusdam autem cumque tempora eius, doloremque numquam deleniti ea assumenda sapiente iusto? Similique veritatis nesciunt facilis iste. Facilis voluptatem numquam sint cupiditate, aliquam corporis voluptas delectus eos qui voluptatibus? Laudantium nesciunt velit non doloribus aut inventore quia sapiente voluptates. Consectetur ipsum ullam dolor illum doloribus perspiciatis nemo, repudiandae vitae nisi mollitia quibusdam iusto maxime optio quis repellendus rem esse dolorem architecto illo.</p>
                        <br></br>
                        <p>Vitae, hic ipsam repudiandae et fugit eum dolorum obcaecati vel sapiente exercitationem accusantium corrupti aliquam blanditiis dolor! Culpa id a cum saepe, inventore dolore ad nostrum fugiat velit totam corrupti illo eveniet minima consectetur impedit iste magnam dolor dolores dicta officia aliquid tempore. In, vel similique deleniti maxime, eveniet porro alias ducimus dignissimos quo nesciunt eos delectus dolores temporibus voluptates! Deleniti vitae molestiae eum illum vel, ipsum at officia delectus possimus numquam eligendi voluptas autem nostrum optio, quidem distinctio. Natus voluptatem quae itaque autem corporis vero quaerat illo error dicta. Minima numquam dolorem enim ex quam doloribus fugiat accusamus repellat. Labore, voluptatum quibusdam mollitia tempore ex reiciendis placeat deleniti recusandae ratione iste nemo! Libero distinctio deserunt praesentium, tenetur pariatur est dolor omnis voluptatem sed eaque officia, alias impedit mollitia at tempore, voluptas tempora corrupti excepturi. Exercitationem et pariatur eius rem alias fuga ullam cumque dicta necessitatibus velit illo consectetur, delectus saepe soluta magnam. Fugit, reprehenderit nisi. Reprehenderit repellendus voluptates in. Repellendus minus excepturi dolorem ex consectetur amet neque nostrum quis? In delectus, ipsa molestias, similique animi quisquam ipsam tempora maxime consectetur asperiores voluptatibus omnis, harum magnam porro minima repudiandae. Qui fugiat quibusdam ducimus? Incidunt dolor ullam enim, quia accusamus doloribus saepe, molestiae sequi eaque perspiciatis laudantium fugit nostrum fugiat alias quo quas sit, eius magni labore dolorum debitis hic consequatur. A neque nulla dolore ea ratione possimus aspernatur iure perferendis atque est voluptates quod ipsam minus consequuntur praesentium, quasi commodi quis saepe modi! Consectetur non magnam ullam voluptatem deleniti expedita nemo ab omnis qui blanditiis.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SingleBlog;
