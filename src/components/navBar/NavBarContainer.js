import React, { useState } from "react";
import NavBarList from "./NavBarList";
import NAV_BAR_OPTIONS from "./NavBarOptions";
import { Squash as Hamburger } from "hamburger-react";
import { HiOutlineShoppingBag, HiOutlineHeart } from "react-icons/hi";
import { AiOutlineUser } from "react-icons/ai";
import { Link } from "react-router-dom";
import InputSearch from "./InputSearch";
import useWindowsDimensions from "../../customHooks/useWindowsDimensions";
import logo from "../../assets/Monogram-Logo-of-the-Letters-SL-Graphics-8105393.png";
const NavBarContainer = () => {
  const [isOpen, setOpen] = useState(false);
  const { width } = useWindowsDimensions();
  return (
    <header className="header-container">
      <div className="header">
        <div className="hamburger-container">
          <Hamburger
            toggled={isOpen}
            toggle={setOpen}
            size={32}
            color={isOpen ? "#353535" : "#ffffff"}
          />
        </div>

        <div className="logo-header">
          <img src={logo} alt="logo"/><span>Sport Line</span>
        </div>
        {width > 768 && <InputSearch />}

        <div className="cart-fav-header">
          <Link to={"/carrito"}>
            <HiOutlineShoppingBag
              color="#ffffff"
              size={width < 768 ? 20 : 28}
            />
          </Link>
          <Link to={"/favoritos"}>
            <HiOutlineHeart color="#ffffff" size={width < 768 ? 20 : 28} />
          </Link>
          <Link to={"/usuario"}>
            <AiOutlineUser color="#ffffff" size={width < 768 ? 20 : 28} />
          </Link>
        </div>
      </div>
      <nav className="nav-bar" style={{ left: isOpen ? "0" : "-100%" }}>
        <NavBarList options={NAV_BAR_OPTIONS} />
      </nav>
    </header>
  );
};

export default NavBarContainer;
