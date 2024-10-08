import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import versatile_size from '../../assets/verstail-size.png';
import p1 from '../../assets/1.jpg';
import p2 from '../../assets/2.jpg';
import p3 from '../../assets/3.jpg';
import p4 from '../../assets/4.webp';
import axios from 'axios';

const Main_Product_details = () => {
  const { category } = useParams(); // Get the category from URL
  const [subcategories, setSubcategories] = useState([]);
  const baseURL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    console.log("Fetching subcategories for:", category); // Debugging line
    const fetchSubCategories = async () => {
      try {
        const encodedCategory = encodeURIComponent(category); // Encode the category name
        const response = await axios.get(`${baseURL}/subcategory/getAllSubCategoriesByCategory/${category}`);
        setSubcategories(response.data.data);
      } catch (error) {
        console.error('Error fetching subcategories:', error);
      }
    };
  
    fetchSubCategories();
  }, [category, baseURL]);

  return (
    <div className='container'>
      {/* breadcrumbs */}
      <div className='flex gap-2 md:justify-center justify-start my-6 font-semibold'>
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
      <div className='my-2 mt-10'>
        <div>
          {/* <span className='md:font-bold font-semibold font-serif md:text-3xl text-xl'>{category}</span>
          <div className='md:mt-10 md:flex hidden flex-col'>
            <span className='md:font-bold font-semibold  md:text-2xl text-lg'>VERSATILE SIZES</span>
            <img src={versatile_size} alt="" className='w-full h-[fit] object-contain' />
          </div> */}
          {/* Subcategories (Products) */}
          <div className='md:mt-10 mt-5 mb-10'>
            <span className='md:font-bold font-semibold md:text-xl'>Products</span>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-3'>
              {subcategories.length > 0 ? (
                subcategories.map((sub) => (
                  <div className='mt-10 relative flex justify-center flex-col items-center cursor-pointer' key={sub.id}>
                    <Link to={`/product/${sub.subcategory}`}>
                      <img src={sub.image || 'fallback-image.jpg'} className='sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px] w-full h-[300px] object-cover hover:opacity-90' />
                      <div className='mt-1 font-medium text-lg uppercase hover:underline hover:transition-all hover:duration-300 text-center'>
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
