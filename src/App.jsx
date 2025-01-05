import { Route, Routes } from "react-router-dom"
import Home from './Home/Home'
import AboutUS from './AboutUS/AboutUS'
import ContactUS from './ContactUS/ContactUS'
import Product from './Product/Product'
import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import Main_Product_details from "./Product/Product-Detail/Main_Product_Details"
import Second_product_details from "./Product/Product-Detail/Second_product_details"
import Product_details from "./Product/Product-Detail/Product_details"
import Catelogue from "./Catalogue/Catelogue"
import { AppProvider } from "./AppContext"
function App() {

  return (
    <AppProvider>
    <React.Fragment>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUS />} />
        <Route path="/contact" element={<ContactUS />} />
        <Route path="/product" element={<Product />} />
        <Route path="/catalogue" element={<Catelogue />}/>
        <Route path="/main-product/:category" element={<Main_Product_details/>} />
        <Route path="/product/:category/:subcategory" element={<Product_details/>} />
        <Route path="/product-detail/:_id" element={<Second_product_details/>} />

        </Routes> 
        <Footer/>
    </React.Fragment>
    </AppProvider>
  )
}

export default App
