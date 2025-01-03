import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaChevronDown, FaBook } from "react-icons/fa";
import { LuDot } from "react-icons/lu";

const Category = ({ onSelectSubcategory }) => {
  const [catalogueCategories, setCatalogueCategories] = useState([]);
  const [openIndex, setOpenIndex] = useState(null);
  const baseURL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    const fetchCatalogueCategories = async () => {
      try {
        const catalogueCategoryResponse = await axios.get(
          `${baseURL}/catalogue-category/getAllCatalogueCategory`
        );
        const catalogueCategoryData = catalogueCategoryResponse.data.data;

        const catalogueSubCategoryResponse = await axios.get(
          `${baseURL}/catalogue-subcategory/getAllCatalogueSubCategory`
        );
        const catalogueSubCategoryData = catalogueSubCategoryResponse.data.data;

        const categoriesWithSubcategories = catalogueCategoryData.map(
          (category) => ({
            ...category,
            submenu: catalogueSubCategoryData
              .filter(
                (sub) => sub.cataloguecategory === category.cataloguecategory
              )
              .map((sub) => sub.cataloguesubcategory)
          })
        );

        setCatalogueCategories(categoriesWithSubcategories);
      } catch (error) {
        console.error("Error fetching categories or subcategories:", error);
      }
    };

    fetchCatalogueCategories();
  }, [baseURL]);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleSubcategorySelect = (subcategory) => {
    onSelectSubcategory(subcategory);
  };

  return (
    <div className="lg:w-[300px] md:w-[250px] w-full mx-auto sticky top-32">
      {catalogueCategories.map((item, index) => (
        <div key={index} className="flex flex-col">
          <div
            className={`flex justify-between items-center p-3 cursor-pointer ${
              openIndex === index ? "bg-[#a42832] text-white" : "bg-[#F5F5F5] text-[#333333]"
            }`}
            onClick={() => handleToggle(index)}
            aria-expanded={openIndex === index ? "true" : "false"}
          >
            <div className="flex items-center">
              <FaBook className="mr-2" />
              <div className="text-lg font-semibold">{item.cataloguecategory}</div>
            </div>
            <FaChevronDown
              className={`transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`}
              style={{ color: openIndex === index ? "#FFFFFF" : "#888888" }}
            />
          </div>
          {openIndex === index && (
            <ul
              className="pl-20 cursor-pointer py-2 space-y-1 w-full bg-[#FFF8E1] text-[#333333]"
            >
              {item.submenu.map((subitem, subIndex) => (
                <div className=" flex gap-2 items-center">
                <LuDot  size={24}/>
                <li
                  key={subIndex}
                  className="text-sm hover:text-primary transition-colors delay-100"
                  onClick={() => handleSubcategorySelect(subitem)}
                >
                  {subitem}
                </li>
                </div>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default Category;
