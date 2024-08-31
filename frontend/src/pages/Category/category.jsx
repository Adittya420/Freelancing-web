import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './design.css'

const CategoryList = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:4000/api/categorylist/category', {withCredentials: true})
            .then(response => setCategories(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <>
            <div className="h-fit flex flex-col lg:flex-row justify-center lg:justify-evenly p-10 sm:px-6 lg:px-8 bg-gradient-to-b from-indigo-800 to-blue-300 mt-20 mb-8 ml-16 mr-16 rounded-3xl gap-8 lg:gap-16 items-center">
                <div className="font-light text-black-500 sm:text-lg dark:text-black-400 max-w-lg">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-black dark:text-white">Freelance with purpose: where your goals meet our expertise</h2>
                    <p className="mb-4 text-black font-serif">
                        Every project we undertake is driven by your vision and objectives. Our mission is to align our expertise with your purpose, ensuring that every decision and solution is tailored to meet your specific needs.                     </p>
                    <p className="text-black font-serif">
                        Our commitment to quality means that you can trust us to deliver results that not only meet but exceed your expectations.                    </p>
                </div>
                <img
                    src="https://elorus.ams3.cdn.digitaloceanspaces.com/blogen/2022/06/becoming-a-freelancer---Elorus-Blog.jpg"
                    alt=""
                    className="w-64 h-64 object-cover rounded-3xl border-4 border-white"
                />
            </div>

            <h1 className='text-4xl tracking-tight font-extrabold text-black text-center'>Categories</h1>
            <div
                id="scroll-container"
                className="flex overflow-x-scroll hide-scroll-bar"
            >
                <div className="flex flex-nowrap lg:m-10 md:m-10 m-10 space-x-5">
                    {categories.map((domain, index) => (
                        <Link to={`/gigs/${domain.category}`}
                            key={domain._id}
                            className={`w-64 h-64 max-w-xs cursor-pointer flex-shrink-0 overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out bg-gradient-to-r ${index % 3 === 0
                                ? 'from-purple-400 via-pink-500 to-red-500'
                                : index % 3 === 1
                                    ? 'from-green-400 via-blue-500 to-purple-500'
                                    : 'from-yellow-400 via-orange-500 to-red-500'
                                }`}
                        >
                            <div className="p-4 flex flex-col items-center justify-center h-full">
                                <img
                                    src={domain.icon}
                                    alt={domain.category}
                                    className="w-24 h-24 object-cover rounded-full border-4 border-white"
                                />
                                <h2 className="mt-4 text-xl font-bold text-center text-white break-words">
                                    {domain.category}
                                </h2>

                            </div>
                        </Link>
                    ))}
                </div>

            </div>
        </>
    );
};

export default CategoryList;
