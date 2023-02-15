import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import "./App.css";
import Category from "./components/Category";
import AllDrones from "./pages/AllDrones";
import HomePage from "./pages/HomePage";
import BasketPage from "./pages/BasketPage";
import BasketModal from "./components/BasketModal";
import DetailProduct from "./components/DetailProduct";
import Footer from "./components/Footer";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import BlogPage from "./pages/BlogPage";
import FireDronePage from "./pages/FireDronePage";
import PoliceDronePage from "./pages/PoliceDronePage";
import AnbulanceDronePage from "./pages/AnbulanceDronePage";
import ElectricDronePage from "./pages/ElectricDronePage";
import ElectricDrone2Page from "./pages/ElectricDrone2Page";
import SunPanelPage from "./pages/SunPanelPage";
import FavoritePage from "./pages/FavoritePage";
import HomeToPage1 from "./pages/HomeToPage1";
import HomeToPage2 from "./pages/HomeToPage2";
import HomeToPage4 from "./pages/HomeToPage4";
import HomeToPage3 from "./pages/HomeToPage3";
import SupportModal from "./components/SupportModal";

function App({
  products,
  basket,
  basketModalShow,
  categories,
  priceFilter,
  dispatch,
  videos,
  favorite,
}) {
  let { pathname } = useLocation();

 


  useEffect(() => {
    window.localStorage.setItem("basket", JSON.stringify(basket));
  }, [basket]);

  useEffect(() => {
    dispatch({
      type: "SET_BASKETMODALSHOW",
      payload: false,
    });
  }, [pathname]);
  useEffect(() => {
    fetch(`http://localhost:1313/products`)
      .then((a) => a.json())
      .then((a) => {
        dispatch({
          type: "SET_PRODUCTS",
          payload: a,
        });
        dispatch({
          type: "SET_LOADING",
          payload: false,
        });
      });
  }, []);
  useEffect(() => {
    fetch(`http://localhost:1313/categories`)
      .then((a) => a.json())
      .then((a) => {
        dispatch({
          type: "SET_CATEGORIES",
          payload: a,
        });
      });
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  

  return (
    <div className='App'>
      <Header />
      {basketModalShow && <BasketModal />}

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/category/:category_name' element={<Category />} />
        <Route path='/all-drones' element={<AllDrones />} />
        <Route path='/basket-page' element={<BasketPage />} />
        <Route path='/detail-product/:id' element={<DetailProduct />}  />
        <Route path='/contact-page' element={<ContactPage />} />
        <Route path='/about-page' element={<AboutPage />} />
        <Route path='/blog-page' element={<BlogPage />} />
        <Route path='/blog-page/firefighting' element={<FireDronePage />} />
        <Route path='/home-page1' element={<HomeToPage1/>} />
        <Route path='/home-page2' element={<HomeToPage2/>} />
        <Route path='/home-page3' element={<HomeToPage3/>} />
        <Route path='/home-page4' element={<HomeToPage4/>} />
        <Route
          path='/blog-page/law-enforcement'
          element={<PoliceDronePage />}
        />
        <Route
          path='/blog-page/rescue-services'
          element={<AnbulanceDronePage />}
        />
        <Route
          path='/blog-page/construction-management'
          element={<ElectricDronePage />}
        />
        <Route
          path='/blog-page/power-grid-management'
          element={<ElectricDrone2Page />}
        />
        <Route
          path='/blog-page/power-generation-management'
          element={<SunPanelPage />}
        />
      </Routes>
      <SupportModal/>
      <Footer />
    </div>
  );
}
const t = (a) => {
  return {
    products: a.products,
    basket: a.basket,
    basketModalShow: a.basketModalShow,
    categories: a.categories,
  };
};
export default connect(t)(App);
