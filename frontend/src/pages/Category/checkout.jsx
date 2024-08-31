// src/components/Checkout.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Checkout = () => {
    const { id } = useParams();
    const [gig, setGig] = useState(null);

    useEffect(() => {
        const fetchGig = async () => {
            try {
                const response = await axios.get(`http://localhost:4000/api/gigs/checkout/${id}`, {withCredentials: true});
                // console.log(response.data)
                setGig(response.data);
            } catch (error) {
                console.error('Error fetching gig:', error);
            }
        };

        fetchGig();
    }, [id]);

    if (!gig) return <p>Loading...</p>;

    return (
        <div className="p-4 sm:p-6 lg:p-4 mt-16 ml-16 mr-16 flex flex-col lg:flex-row lg:justify-around justify-around gap-4">

            {/* Left Column */}
            <div className="flex-1 m-10">
                {/* Title with Eye Icon */}
                <div className='flex items-center gap-2 mb-4'>
                    <h1 className="text-3xl sm:text-4xl font-bold underline">{gig.title}</h1>
                    <img className='w-8 h-8 sm:w-10 sm:h-10' src='https://img.icons8.com/ios-filled/50/000000/visible.png' alt='icon' />
                    <p className="font-serif text-sm sm:text-base">{gig["Number of Reviewers"]}</p>
                </div>

                {/* Name with User Icon */}
                <div className='flex items-center mb-4'>
                    <img className='w-8 h-8 sm:w-10 sm:h-10 object-cover rounded-full border-4 border-white' src='https://img.icons8.com/ios-filled/50/000000/user.png' alt='user' />
                    <p className="font-serif text-sm sm:text-base ml-2">{gig.name}</p>
                </div>

                {/* Description */}
                <p className="text-sm sm:text-base mb-6 text-justify">{gig.description}</p>
            </div>

            {/* Right Column */}
            <div className="h-fit flex-1 bg-gray-200 p-6 m-10 sm:p-8 rounded-lg shadow-lg">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                    {/* Seller Level */}
                    <div className="flex items-center">
                        <img src="https://img.icons8.com/emoji/48/000000/star-emoji.png" alt="Seller Level" className="w-6 h-6 mr-2" />
                        <p className="text-sm sm:text-base">Seller Level: {gig["Seller Level"]}</p>
                    </div>

                    {/* Average Rating */}
                    <div className="flex items-center">
                        <img src="https://img.icons8.com/?size=100&id=119000&format=png&color=000000" alt="Reviewers" className="w-6 h-6 mr-2" />
                        <p className="text-sm sm:text-base">Average Rating: {gig["Average Rating"]}</p>
                    </div>

                    {/* Price */}
                    <div className="flex items-center">
                        <img src="https://img.icons8.com/emoji/48/000000/money-bag-emoji.png" alt="Price" className="w-6 h-6 mr-2" />
                        <p className="text-sm sm:text-base">Price: ${Math.round(gig["Price (USD)"])}</p>
                    </div>

                    {/* Country */}
                    <div className="flex items-center">
                        <img src="https://img.icons8.com/?size=100&id=n3ahQ4ShHwiW&format=png&color=000000" alt="Country" className="w-6 h-6 mr-2" />
                        <p className="text-sm sm:text-base">Country: {gig.country}</p>
                    </div>

                    {/* Hourly Rate */}
                    <div className="flex items-center">
                        <img src="https://img.icons8.com/emoji/48/000000/money-mouth-face.png" alt="Hourly Rate" className="w-6 h-6 mr-2" />
                        <p className="text-sm sm:text-base">Hourly Rate: ${gig.hourlyRate}</p>
                    </div>

                    {/* Job Success */}
                    <div className="flex items-center">
                        <img src="https://img.icons8.com/?size=100&id=31820&format=png&color=000000" alt="Job Success" className="w-6 h-6 mr-2" />
                        <p className="text-sm sm:text-base">Job Success: {gig.jobSuccess}%</p>
                    </div>
                </div>

                {/* Proceed to Payment Button */}
                <div className="flex justify-center">
                    <button className="px-4 py-2 sm:px-6 sm:py-3 bg-green-500 text-white rounded-full hover:bg-green-600 text-sm sm:text-base">Proceed to Payment</button>
                </div>
            </div>
        </div>


    );
};

export default Checkout;
