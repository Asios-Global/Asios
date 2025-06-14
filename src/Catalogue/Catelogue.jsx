import React, { useState, useEffect } from 'react';
import axios from 'axios';
import banner from '../assets/catelogue-bg.webp';
import { motion } from 'framer-motion';
import Category from './Category';
import { FaDownload, FaEye } from 'react-icons/fa';

const Catelogue = () => {
  const [catalogues, setCatalogues] = useState([]);
  const [allCatalogues, setAllCatalogues] = useState([]);
  const [catalogueSubCategory, setCatalogueSubCategories] = useState('');
  const baseURL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    const fetchCatalogues = async () => {
      try {
        const response = await axios.get(`${baseURL}/catalogue/getAllCatalogue`);
        const catalogueData = response.data.data;
        setCatalogues(catalogueData.slice(0, 12));
        setAllCatalogues(catalogueData);
      } catch (error) {
        console.error("Error fetching catalogues:", error);
      }
    };
    fetchCatalogues();
  }, [baseURL]);

  const fetchCataloguesBySubcategory = (    selectedSubcategories) => {
    if (selectedSubcategories.length === 0) {
      setCatalogues(allCatalogues); 
    } else {
      const filteredCatalogues = allCatalogues.filter((catalogue) =>
        selectedSubcategories.includes(catalogue.cataloguesubcategory)
      );
      setCatalogues(filteredCatalogues);
    }
  };

  const handleDownload = (googleDriveLink) => {
    const fileIdMatch = googleDriveLink.match(/[-\w]{25,}/);
    if (fileIdMatch) {
      const fileId = fileIdMatch[0];
      const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.download = ''; // This triggers the download
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      console.error("Invalid Google Drive URL");
    }
  };

  const handleView = (pdfLink) => {
    window.open(pdfLink, '_blank');
  };

  return (
    <>
      <div className="relative h-[600px]">
        <img src={banner} className="h-full w-full object-cover" alt="Contact Banner" />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-white lg:text-6xl md:text-4xl sm:text-3xl text-2xl font-serif font-bold text-center">
            Catalogues
          </h1>
        </motion.div>
      </div>
      <div className='flex md:flex-row flex-col md:gap-10 sm:gap-7 gap-5 py-14'>
        <div>
          <Category onSelectSubcategory={fetchCataloguesBySubcategory} />
        </div>
        <div className='flex-1 flex flex-col container md:p-0'>
          <h3 className='float-left font-semibold mb-3 md:mb-0'>Catalogue</h3>
          <div className='md:p-4'>
            <h4 className='font-semibold font-serif text-primary mb-3 md:mb-0'>{catalogueSubCategory}</h4>
          </div>
          <div className="md:p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
            {catalogues.map((item) => (
              <div key={item.id} className="relative group mb-4 overflow-hidden rounded-lg shadow-lg transition-all hover:shadow-2xl w-[215px]">
                <img
                  src={item.image}
                  className="w-full h-[300px] object-cover transition-transform duration-300 transform group-hover:scale-110"
                  alt={item.name}
                />
                <div
                  className="absolute top-2 cursor-pointer right-2 bg-white bg-opacity-75 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  onClick={() => handleView(item.link)}
                >
                  <FaEye />
                </div>
                <div className='flex justify-between items-center mt-2 p-3'>
                  <h5 className="font-semibold text-lg">
                    {item.name}
                  </h5>
                  <div onClick={() => handleDownload(item.link)} className="cursor-pointer">
                    <FaDownload />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Catelogue;
