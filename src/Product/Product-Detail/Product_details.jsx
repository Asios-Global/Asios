import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import versatile_size from '../../assets/verstail-size.png';
import axios from 'axios';

const Product_details = () => {
  const { subcategory } = useParams(); // Get the category from URL
  const [products, setProducts] = useState([]); // Rename to 'products' for clarity
  const baseURL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    console.log("Fetching products for:", subcategory); // Debugging line
    const fetchProducts = async () => {
      try {
        const encodedCategory = encodeURIComponent(subcategory); // Encode the category name
        const response = await axios.get(`${baseURL}/product/getProductBySubCategory/${encodedCategory}`);
        setProducts(response.data.data); // Assuming response structure contains the products in 'data'
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
  
    fetchProducts();
  }, [subcategory, baseURL]);

  return (
    <div className='container'>
      {/* Breadcrumbs */}
      <div className='flex gap-2 md:justify-center justify-start my-6 font-semibold'>
        <div>
          <Link to={"/"}>Home</Link> <span> {">"}</span>
        </div>
        <div>
          <Link to={"/product"}>Product</Link> <span>{">"}</span>
        </div>
        <div>
          <Link>{subcategory}</Link>
        </div>
      </div>
      <div className='my-2 mt-10'>
        <div>
          {/* <span className='md:font-bold font-semibold font-serif md:text-3xl text-xl'>{subcategory}</span> */}
          {/* <div className='md:mt-10 md:flex hidden flex-col'>
            <span className='md:font-bold font-semibold md:text-2xl text-lg'>VERSATILE SIZES</span>
            <img src={versatile_size} alt="" className='w-full h-[fit] object-contain' />
          </div> */}
          {/* Products */}
          <div className='md:mt-10 mt-5 mb-10'>
            <span className='md:font-bold font-semibold md:text-xl'>Products</span>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-3'>
              {products.length > 0 ? (
                products.map((product) => (
                  <div className='mt-10 relative flex justify-center flex-col items-center cursor-pointer' key={product._id}>
                    <Link to={`/product-detail/${product._id}`}>
                      <img src={product.image || 'fallback-image.jpg'} className='sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px] w-full h-[300px] object-cover hover:opacity-90' />
                      <div className='mt-1 font-medium text-lg uppercase hover:underline hover:transition-all hover:duration-300 text-center'>
                        {product.productName}
                      </div>
                    </Link>
                  </div>
                ))
              ) : (
                <p>No products available.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product_details;
