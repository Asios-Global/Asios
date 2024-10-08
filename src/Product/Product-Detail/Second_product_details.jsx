import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const Second_product_details = () => {
  const { _id } = useParams();
  const [product, setProduct] = useState(null);
  const baseURL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await axios.get(
          `${baseURL}/product/getProductById/${_id}`
        );
        setProduct(response.data.data);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    fetchProductDetails();
  }, [_id, baseURL]);

  // Parse the details string into an object
  const productDetails = product ? JSON.parse(product.details) : {};

  return (
    <div className="container">
      {/* Breadcrumbs */}
      <div className="flex text-sm md:text-lg gap-2 md:justify-center justify-start my-6 font-semibold flex-wrap">
        <div>
          <Link to={"/"}>Home</Link> <span> {">"}</span>
        </div>
        <div>
          <Link to={"/product"}>Product</Link> <span>{">"}</span>
        </div>
        <div>
          <Link>{product ? product.category : "Loading..."}</Link>
          <span>{">"}</span>
        </div>
        <div>
          <Link>{product ? product.productName : "Loading..."}</Link>
        </div>
      </div>
      <div className="md:pt-[100px] pb-[25px] mb-[50px]">
        <div className="flex md:flex-row flex-col md:gap-20 gap-5 items-start">
          <div className="flex flex-col">
            <span className="font-lg font-semibold mb-4">Preview</span>
            <img
              src={product ? product.image : ""}
              alt={product ? product.productName : "Loading..."}
              className="w-[550px] h-[400px] object-cover"
            />
          </div>
          <div className="float-left">
            <>
              <span className="uppercase font-bold text-lg">
                {product ? product.productName : "Loading..."}
              </span>

              <table className="table-auto w-full my-4">
                <tbody>
                  {product && (
                    <>
                      {productDetails.size && (
                        <tr className="border-b hover:bg-[#ede5e5]">
                          <th className="bodyh1">SIZE</th>
                          <td className="bodyh2 flex flex-wrap max-w-[350px] w-full">
                            |&nbsp;{productDetails.size}&nbsp;
                          </td>
                        </tr>
                      )}
                      {productDetails.thickness && (
                        <tr className="border-b hover:bg-[#ede5e5]">
                          <th className="bodyh1">THICKNESS</th>
                          <td className="bodyh2">
                            |&nbsp;{productDetails.thickness}
                          </td>
                        </tr>
                      )}
                      {productDetails.surface && (
                        <tr className="border-b hover:bg-[#ede5e5]">
                          <th className="bodyh1">SURFACE</th>
                          <td className="bodyh2">
                            |&nbsp;{productDetails.surface}
                          </td>
                        </tr>
                      )}
                      {productDetails.design && (
                        <tr className="border-b hover:bg-[#ede5e5]">
                          <th className="bodyh1">DESIGN</th>
                          <td className="bodyh2">
                            |&nbsp;{productDetails.design}
                          </td>
                        </tr>
                      )}
                      {productDetails.random && (
                        <tr className="border-b hover:bg-[#ede5e5]">
                          <th className="bodyh1">RANDOM</th>
                          <td className="bodyh2">
                            |&nbsp;{productDetails.random}
                          </td>
                        </tr>
                      )}
                      {productDetails.type && (
                        <tr className="border-b hover:bg-[#ede5e5]">
                          <th className="bodyh1">TYPE</th>
                          <td className="bodyh2">
                            |&nbsp;{productDetails.type}
                          </td>
                        </tr>
                      )}
                      {productDetails.material && (
                        <tr className="border-b hover:bg-[#ede5e5]">
                          <th className="bodyh1">MATERIAL</th>
                          <td className="bodyh2">
                            |&nbsp;{productDetails.material}
                          </td>
                        </tr>
                      )}
                      {productDetails.waterAbsorption && (
                        <tr className="border-b hover:bg-[#ede5e5]">
                          <th className="bodyh1">WATER ABSORPTION</th>
                          <td className="bodyh2">
                            |&nbsp;{productDetails.waterAbsorption}
                          </td>
                        </tr>
                      )}
                      {productDetails.specialColour && (
                        <tr className="border-b hover:bg-[#ede5e5]">
                          <th className="bodyh1">SPECIAL COLOR</th>
                          <td className="bodyh2">
                            |&nbsp;{productDetails.specialColour}
                          </td>
                        </tr>
                      )}
                      {productDetails.finish && (
                        <tr className="border-b hover:bg-[#ede5e5]">
                          <th className="bodyh1">FINISH</th>
                          <td className="bodyh2">
                            |&nbsp;{productDetails.finish}
                          </td>
                        </tr>
                      )}
                      {productDetails.color && (
                        <tr className="hover:bg-[#ede5e5]">
                          <th className="bodyh1">COLOUR</th>
                          <td className="bodyh2">
                            |&nbsp;{productDetails.color}
                          </td>
                        </tr>
                      )}
                    </>
                  )}
                </tbody>
              </table>
              <div className="flex flex-row md:gap-5 gap-3 gap-x-2 flex-1 flex-wrap">
                <div className="btn">View Brochure</div>
                <div className="btn">Contact Us</div>
                <div className="btn">Export Inquiry</div>
              </div>
            </>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Second_product_details;

// import React from 'react'
// import { Link } from 'react-router-dom'
// import p1 from '../../assets/1.jpg'
// import sanitry from '../../assets/Portfolio/sanitry.jpg';
// import porclane from '../../assets/Portfolio/slab.jpg';
// import Sink from '../../assets/Portfolio/Sink.jpg';
// import Fault from '../../assets/Portfolio/Fault.jpg';
// import Outdoor from '../../assets/Portfolio/outdoor-wall-tiles.jpg';
// import ceramic from '../../assets/Portfolio/Ceramic.webp';
// const productdata = [
//   {
//     img: porclane,
//     title: 'Porcelain Tiles',
//   },
//   {
//     img: ceramic,
//     title: "Ceramic Tiles"
//   },
//   {
//     img: Outdoor,
//     title: "Outdoor Tiles"
//   },
//   {
//     img: sanitry,
//     title: 'Sanitary Wares',
//   },
//   {
//     img: Sink,
//     title: 'Kitchen Sink',
//   },
//   {
//     img: Fault,
//     title: 'Faucets',
//   },
// ];
// const Second_product_details = () => {
//   return (
//     <div className='container'>
//       {/* breadcums */}
//       <div className='flex text-sm md:text-lg gap-2 md:justify-center justify-start my-6 font-semibold flex-wrap'>
//         <div>
//           <Link to={"/"}>Home</Link> <span> {">"}</span>
//         </div>
//         <div>
//           <Link to={"/product"}>Product</Link> <span>{">"}</span>
//         </div>
//         <div>
//           <Link >Category-Name</Link><span>{">"}</span>
//         </div>
//         <div>
//           <Link >Product-Name</Link>
//         </div>
//       </div>
//       <div className='md:pt-[100px] pb-[25px] mb-[50px]'>
//         <div className='flex md:flex-row flex-col md:gap-20 gap-5 items-start  '>
//           <div className='flex flex-col'>
//             <span className='font-lg font-semibold mb-4'>Preview</span>
//             <img src={p1} alt="Product_name" className='w-[550px] h-[400px]  object-cover' />
//           </div>
//           <div className='float-left'>
//             <>
//               <span className='uppercase font-bold text-lg'>[Product-Name]</span>

//               <table className="table-auto w-full my-4">
//                 <tbody>
//                   <tr className="border-b hover:bg-[#ede5e5]">
//                     <th className="bodyh1">SIZE</th>
//                     <td className="bodyh2">
//                       |&nbsp;600x1200mm&nbsp;, 1200x1400&nbsp;
//                     </td>
//                   </tr>
//                   <tr className="border-b hover:bg-[#ede5e5] ">
//                     <th className="bodyh1 ">THICKNESS</th>
//                     <td className="bodyh2">|&nbsp;9 mm</td>
//                   </tr>
//                   <tr className="border-b hover:bg-[#ede5e5]">
//                     <th className="bodyh1">FINISH</th>
//                     <td className="bodyh2">|&nbsp;Matt</td>
//                   </tr>
//                   <tr className='hover:bg-[#ede5e5]'>
//                     <th className="bodyh1">COLOUR</th>
//                     <td className="bodyh2">|&nbsp;Cream</td>
//                   </tr>
//                 </tbody>
//               </table>
//               <div className='flex flex-row md:gap-5 gap-3 gap-x-2 flex-1 flex-wrap'>
//                 <div className='btn'>View Brochure</div>
//                 <div className='btn'>Contact Us</div>
//                 <div className='btn'>Export Inquiry</div>

//               </div>
//             </>

//           </div>
//         </div>
//         <div className='mt-[50px]'>
//           <span className='font-xl font-semibold mb-4'>Related Product</span>
//           <div className='flex flex-wrap  gap-3 gap-y-4  justify-center  items-start  my-5'>
//             {productdata.map((data) => (
//               <div >
//                 {/* <Link to={'/'}> */}
//                   <div className='relative group overflow-hidden cursor-pointer'>
//                     <img src={data.img} className='sm:w-[300px]  sm:h-[200px] w-full flex-grow-1 ' alt="Porcelain Tiles" />
//                     <div className='absolute bottom-0 w-full text-center bg-[#232323] hover:bg-[#313131] text-white p-2 transform translate-y-full transition-transform duration-300 group-hover:translate-y-0'>
//                       View Product
//                     </div>
//                   </div>
//                   <div className='text-center font-semibold mt-3 text-lg '>
//                     {data.title}
//                   </div>
//                 {/* </Link> */}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Second_product_details
