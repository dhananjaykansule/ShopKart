
import './App.css';
import Header from "./component/layout/Header/Header.js"
import {  BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import WebFont from "webfontloader"
import React, { useEffect } from 'react';
import Footer from "./component/layout/Footer/Footer"
import Home from "./component/Home/Home"
import ProductDetails from "./component/Product/ProductDetails.js"
import LoginSignUP from './component/User/LoginSignUP';
import { Search } from '@material-ui/icons';



function App() {

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });
  
   
  }, []);

  return (
    <Router>
      <Header/>
       <Routes>
       <Route exact path="/" element={<Home />} />
       <Route exact path="/login" element={<LoginSignUP />} />
       {/* <Route exact path="/search" element={<Search />} /> */}
    </Routes>

    
      {/* <Footer /> */}

         <Footer/>
    </Router>
    );
   
  
}

export default App;
