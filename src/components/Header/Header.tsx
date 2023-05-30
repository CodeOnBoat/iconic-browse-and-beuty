import React, { useRef } from "react";
import "./Header.css";
import Logo from "../../images/logo.png";
import { Link } from "react-router-dom";

export const Header = () => {
  const activeRef = useRef<HTMLInputElement>(null);

  const toggleActive = (b: boolean) => {
    activeRef.current!.checked = b;
  };

  return (
    <>
      {" "}
      <div className="header-block">
        <div className="header-container">
          <div className="header-logo-container">
            <img src={Logo} alt="" className="logo" />
          </div>
          <div className="header-hamburger-menu">
            <input type="checkbox" id="active" ref={activeRef} />
            <label htmlFor="active" className="menu-btn">
              <span></span>
            </label>
            <label htmlFor="active" className="close"></label>
            <div className="wrapper">
              <ul className="link-burger-container">
                <li>
                  <Link
                    className="link-burger"
                    to={"/"}
                    onClick={() => toggleActive(false)}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    className="link-burger"
                    to={"/"}
                    onClick={() => toggleActive(false)}
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    className="link-burger"
                    to={"/prices"}
                    onClick={() => toggleActive(false)}
                  >
                    Prices
                  </Link>
                </li>
                <li>
                  <Link
                    className="link-burger"
                    to={"/contacts"}
                    onClick={() => toggleActive(false)}
                  >
                    Contacts
                  </Link>
                </li>
                <li>
                  <Link
                    className="link-burger"
                    to={"/aboutme"}
                    onClick={() => toggleActive(false)}
                  >
                    About me
                  </Link>
                </li>
              </ul>
              <div className="btn-burger-header-container"></div>
            </div>
          </div>
          <div className="links-line-container">
            <div className="header-line-gradient"></div>
            <div className="header-links-container">
              <Link className="link" to={"/home"}>
                Home
              </Link>
              <Link className="link" to={"/home"}>
                Services
              </Link>
              <Link className="link" to={"/prices"}>
                Prices
              </Link>
              <Link className="link" to={"/contacts"}>
                Contacts
              </Link>
              <Link className="link" to={"/aboutme"}>
                About me
              </Link>
            </div>
            <div className="header-line-gradient"></div>
          </div>
        </div>
      </div>
    </>
  );
};
