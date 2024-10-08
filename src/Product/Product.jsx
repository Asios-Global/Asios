import React, { useEffect, useState } from 'react';
import axios from 'axios';
import product from '../assets/4.webp';
import { Link } from 'react-router-dom';

const Product = () => {
  const [productData, setProductData] = useState([]);
  const baseURL = import.meta.env.VITE_API_BASE_URL; // Update this based on your API setup

  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await axios.get(`${baseURL}/category/getAllCategories`);
            setProductData(response.data.data);
        } catch (error) {
            console.error('Error fetching category data:', error);
        }
    };

    fetchData();
}, [baseURL]);

  return (
    <>
      <div className="relative bg-center w-full h-[600px]" style={{ backgroundImage: `url(${product})` }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white px-6 md:px-12">
            <h1 className="text-2xl md:text-4xl font-bold mb-4 capitalize">Our Product</h1>
            <p className="text-lg md:text-xl mb-2">Leading exporter of high-quality ceramic tiles including Porcelain, Slab, Wall Tiles, and more.</p>
            <p className="text-md md:text-lg">Providing excellent products and services that make our customers satisfied is the foundation of our success.</p>
          </div>
        </div>
      </div>
      <div className='container'>
        {/* products */}
        <div className='flex flex-wrap gap-3 gap-y-4 justify-center items-start my-5'>
          {productData.length > 0 ? (
            productData.map((data) => (
              <div className='relative group overflow-hidden cursor-pointer' key={data.id}> {/* Assuming each product has a unique id */}
                <Link to={`/main-product/${data.category}`}>
                  <img src={data.image || 'fallback-image.jpg'} className='md:w-[400px] md:h-[400px] w-full' alt={data.title} />
                  <div className='absolute bottom-0 w-full text-center bg-[#232323] text-white p-2 transform translate-y-full transition-transform duration-300 group-hover:translate-y-0'>
                    {data.category}
                  </div>
                </Link>
              </div>
            ))
          ) : (
            <p>No products available.</p>
          )}
        </div>
      </div>
    </>
  );
}

export default Product;
