import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const Main_Product_details = () => {
  const { category } = useParams(); 
  const [subcategories, setSubcategories] = useState([]);
  const baseURL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    const fetchSubCategories = async () => {
      try {
        const encodedCategory = encodeURIComponent(category); 
        const response = await axios.get(`${baseURL}/subcategory/getAllSubCategoriesByCategory/${category}`);
        setSubcategories(response.data.data);
      } catch (error) {
        console.error('Error fetching subcategories:', error);
      }
    };
  
    fetchSubCategories();
  }, [category, baseURL]);

  return (
    <div className=''>
      <div className='flex gap-2 justify-start my-6 font-normal pl-20 py-10 bg-gray'>
        <div>
          <Link to={"/"}>Home</Link> <span> {">"}</span>
        </div>
        <div>
          <Link to={"/product"}>Product</Link> <span>{">"}</span>
        </div>
        <div>
          <Link>{category}</Link>
        </div>
      </div>
      <div className='my-2 mt-10 container'>
        <div>
          <div className='md:mt-10 mt-5 mb-10'>
            <span className='md:font-bold font-semibold md:text-xl'>Products</span>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-3'>
              {subcategories.length > 0 ? (
                subcategories.map((sub) => (
                  <div className='mt-10 relative flex justify-center flex-col items-center cursor-pointer' key={sub._id}>
                    <Link to={`/product/${category}/${sub.subcategory}`}>
                      <img src={sub.image || 'fallback-image.jpg'} className='sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px] w-[350px] h-[350px] object-cover hover:opacity-90' />
                      <div className='mt-1 font-medium text-lg uppercase hover:underline hover:transition-all hover:duration-300 text-center '>
                        {sub.subcategory}
                      </div>
                    </Link>
                  </div>
                ))
              ) : (
                <p>No subcategories available.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main_Product_details;
