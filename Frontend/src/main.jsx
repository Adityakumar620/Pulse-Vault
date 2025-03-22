
import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import SignUp from './landing_page/signup/SignUp.jsx'
import AboutPage from './landing_page/about/AboutPage.jsx'
import ProductPage from './landing_page/products/ProductPage.jsx'
import PricingPage from './landing_page/pricing/PricingPage.jsx'
import SupportPage from './landing_page/support/SupportPage.jsx'
import Footer from './landing_page/Footer.jsx'
import Navbar from './landing_page/Navbar.jsx'
import NotFound from './landing_page/NotFound.jsx'

createRoot(document.getElementById('root')).render(
   <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route path="/" element={<App/>}/>
    <Route path="/SignUp" element={<SignUp/>}/>
    <Route path="/about" element={<AboutPage/>}/>
    <Route path="/product" element={<ProductPage/>}/>
    <Route path="/pricing" element={<PricingPage/>}/>
    <Route path="/support" element={<SupportPage/>}/>
    <Route path="*" element={<NotFound/>}/>
   </Routes>
   <Footer/>
   </BrowserRouter>
)
