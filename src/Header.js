import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

function header() {
  return (
    <div className="Header">
      <img
        className="header__logo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt="amazon logo"
      />

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
        <div className="header__nav">
          <div className="header__option">
            <span className="header_optionLineOne">Hello Guest</span>
            <span className="header_optionLineTwo">Sign in</span>
          </div>
          <div className="header__option">
            <span className="header_optionLineOne">Returns</span>
            <span className="header_optionLineTwo">Orders</span>
          </div>
          <div className="header__option">
            <span className="header_optionLineOne">Your</span>
            <span className="header_optionLineTwo">Prime</span>
          </div>
          <div className="header__optionBasket">
              <ShoppingBasketIcon />
              <span className="header__optionLineTwo header__basketCount">0</span> 
              </div>
        </div>
      </div>
    </div>
  );
}

export default header;
