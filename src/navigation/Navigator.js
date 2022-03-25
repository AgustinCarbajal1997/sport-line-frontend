import React, { useEffect, useLayoutEffect, useState } from "react";
import NavBarContainer from "../components/navBar/NavBarContainer";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Category from "../pages/Category";
import Details from "../pages/Details";
import Search from "../pages/Search";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "universal-cookie";
import { continueSession } from "../store/actions/user.action";
import SignUp from "../pages/SignUp";
import Alert from "../components/alert/Alert";
import Favorites from "../pages/Favs";
import Auth from "../components/auth/Auth";
import Cart from "../pages/Cart";
import Purchase from "../pages/Purchase";
import PaymentInformation from "../pages/PaymentInformation";
import Login from "../pages/Login";
import Splash from "../components/splash/Splash";
const cookies = new Cookies();
const Navigator = () => {
  const [banner, setBanner] = useState(true);
  const user = useSelector((state) => state.user.dataUser);
  const dispatch = useDispatch();
  useLayoutEffect(() => {
    if (cookies.get("tk")) {
      dispatch(continueSession(cookies.get("tk")));
      return;
    }
  }, [dispatch]);
  useEffect(() => {
    let timerBanner = setTimeout(() => setBanner(false), 7000);
    return () => {
      clearTimeout(timerBanner);
    };
  }, []);
  return (
    <>
      {banner && <Splash />}
      <NavBarContainer />
      <Alert />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/categoria/:category" element={<Category />} />
        <Route path="/busqueda" element={<Search />} />
        <Route path="/articulo/:productId" element={<Details />} />
        <Route path="/iniciar-sesion" element={<Login />} />
        <Route path="/registrarse" element={<SignUp />} />
        <Route element={<Auth user={user} />}>
          <Route path="/favoritos" element={<Favorites />} />
          <Route path="/carrito" element={<Cart />} />
          <Route path="/compras" element={<Purchase />} />
          <Route path="/informacion-pago" element={<PaymentInformation />} />
        </Route>
      </Routes>
    </>
  );
};

export default Navigator;
