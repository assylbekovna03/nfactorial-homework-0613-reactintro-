import React from "react";
import { format } from "date-fns";
import "./index.css";
import Logo from "./../../img/logo.png";

const Header = () => {
  return (
    <div className="header-row">
      <div className="logo-input">
        <img src={Logo} className="logo" />
        <input type="text"></input>
      </div>
      <div className="date">{format(new Date(), "do MMMM Y hh:mm")}</div>
    </div>
  );
};

export default Header;
