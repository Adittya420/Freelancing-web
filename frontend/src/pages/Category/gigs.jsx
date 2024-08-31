import React, { useState, useEffect } from 'react';
import { Link,useParams } from 'react-router-dom';
import axios from 'axios';
import './design.css'

const GigList = () => {
  const { category } = useParams();
  const encodedCategory = encodeURIComponent(category);
  const [gigs, setGigs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const limit = 12; // Number of items per page

  const convertPriceToInt = (price) => {
    return Math.round(price); // or Math.floor(price) / Math.ceil(price)
  };

  useEffect(() => {
    fetchGigs(currentPage);
  });

  const fetchGigs = async (page) => {
    try {
      const response = await axios.get(`http://localhost:4000/api/categorylist/gigs/${encodedCategory}?page=${page}&limit=${limit}`, {withCredentials:true});
      const data = response.data;

      setGigs(data.data);
      setTotalPages(data.totalPages);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <>
      <div className="p-4 max-w-fit mt-16 ml-16 mr-16">
        <h1 className="text-2xl font-bold mb-4 text-center">{category}</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {gigs.map(gig => (
            <div key={gig._id} className="rounded-lg shadow-lg bg-white border-2 border-gray-300">
              <div className="p-6">
                <h5 className="text-gray-900 text-2xl font-medium mb-4 text-center">{gig.title}</h5>
                <div className="flex flex-wrap -mx-2 mb-4">
                  <div className="w-1/2 px-2 mb-2">
                    <p className="text-sm"><strong>Name:</strong> {gig.name}</p>
                  </div>
                  {gig["Seller Level"] && (
                    <div className="w-1/2 px-2 mb-2">
                      <p className="text-sm"><strong>Seller Level:</strong> {gig["Seller Level"]}</p>
                    </div>
                  )}
                  {gig["Average Rating"] && (
                    <div className="w-1/2 px-2 mb-2">
                      <p className="text-sm"><strong>Average Rating:</strong> {gig["Average Rating"]}</p>
                    </div>
                  )}
                  {gig["Price (USD)"] && (
                    <div className="w-1/2 px-2 mb-2">
                      <p className="text-sm"><strong>Price (USD):</strong> ${convertPriceToInt(gig["Price (USD)"])}</p>
                    </div>
                  )}
                  {gig.country && (
                    <div className="w-1/2 px-2 mb-2">
                      <p className="text-sm"><strong>Country:</strong> {gig.country}</p>
                    </div>
                  )}
                  {gig.jobSuccess && (
                    <div className="w-1/2 px-2 mb-2">
                      <p className="text-sm"><strong>Job Success:</strong> {gig.jobSuccess}%</p>
                    </div>
                  )}
                </div>
                <div className="flex justify-center mt-4">
                  <Link
                    to={`/checkout/${gig._id}`}
                    className="inline-block px-6 py-3 bg-yellow-500 text-white font-serif text-lg leading-tight rounded-full shadow-md hover:bg-yellow-700 hover:scale-125 hover:duration-500 hover:shadow-lg focus:bg-yellow-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    Check Out
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col  sm:flex-row sm:justify-evenly items-center m-4">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className={`px-4 py-2 bg-red-800 text-white rounded ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          Previous
        </button>
        <span className="text-lg my-2 sm:my-0">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 bg-red-800 text-white rounded ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          Next
        </button>
      </div>

    </>
  );
};

export default GigList;
