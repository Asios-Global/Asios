import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const Product_details = () => {
  const { subcategory, category } = useParams();
  const [products, setProducts] = useState([]);
  const baseURL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const encodedCategory = encodeURIComponent(subcategory);
        const response = await axios.get(
          `${baseURL}/product/getProductBySubCategory/${encodedCategory}`
        );
        setProducts(response.data.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [subcategory, baseURL]);

  return (
    <>
      <div className="flex gap-2 justify-start my-6 font-normal md:pl-20 pl-10 py-10 bg-gray flex-wrap">
        <div>
          <Link to={"/"}>Home</Link> <span> {">"}</span>
        </div>
        <div>
          <Link to={"/product"}>Product</Link> <span>{">"}</span>
        </div>
        <div>
          <Link to={`/main-product/${category}`}>{category}</Link> <span>{">"}</span>
        </div>
        <div>
          <Link>{subcategory}</Link>
        </div>
      </div>
      <div className="container">
        <div className="my-2 mt-10">
          <div>
            <div className="md:mt-10 mt-5 mb-10">
              <span className="md:font-bold font-semibold md:text-xl">
                Products
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-3">
                {products.length > 0 ? (
                  products.map((product) => (
                    <div
                      className="mt-10 relative flex justify-center flex-col items-center cursor-pointer"
                      key={product._id}
                    >
                      <Link to={`/product-detail/${product._id}`}>
                        <img
                          src={product.image || "fallback-image.jpg"}
                          className="sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px] w-[350px] h-[350px] object-cover hover:opacity-90 border border-[#dfdfdf]
"
                          style={{width:'550px'}}
                        />
                        <div className="mt-1 font-medium text-lg uppercase hover:underline hover:transition-all hover:duration-300 text-center">
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
    </>
  );
};

export default Product_details;
