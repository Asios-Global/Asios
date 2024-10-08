import { Route, Routes } from "react-router-dom"
import Home from './Home/Home'
import AboutUS from './AboutUS/AboutUS'
import ContactUS from './ContactUS/ContactUS'
import Product from './Product/Product'
import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import AnimatedCursor from "react-animated-cursor"
import Main_Product_details from "./Product/Product-Detail/Main_Product_Details"
import Second_product_details from "./Product/Product-Detail/Second_product_details"
import Product_details from "./Product/Product-Detail/Product_details"
function App() {

  return (
    <React.Fragment>
       {/* <AnimatedCursor 
      innerSize={8}
      outerSize={8}
      color='#a42832'
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={5}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link',
        {
          target: '.custom',
          options: {
            innerSize: 12,
            outerSize: 12,
            color: '255, 255, 255',
            outerAlpha: 0.3,
            innerScale: 0.7,
            outerScale: 5
          }
        }
      ]}
    /> */}
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUS />} />
        <Route path="/contact" element={<ContactUS />} />
        <Route path="/product" element={<Product />} />
        <Route path="/main-product/:category" element={<Main_Product_details/>} />
        <Route path="/product/:subcategory" element={<Product_details/>} />
        <Route path="/product-detail/:_id" element={<Second_product_details/>} />

        </Routes> 
        <Footer/>
    </React.Fragment>
  )
}

export default App
