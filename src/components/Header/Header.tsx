import React, { useRef } from "react";
import "./Header.css";
import Logo from "../../images/logo.png";
import { Link, useNavigate } from "react-router-dom";

interface HeaderProps {
  goToServices: () => void;
}

export const Header = ({ goToServices }: HeaderProps) => {
  const activeRef = useRef<HTMLInputElement>(null);

  const toggleActive = (b: boolean) => {
    activeRef.current!.checked = b;
  };

  const navigate = useNavigate();

  return (
    <>
      <div className="header-block">
        <div className="header-container">
          <div className="header-logo-container">
            <img
              src={Logo}
              alt=""
              className="logo"
              onClick={() => navigate("/")}
            />
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
                    Hem
                  </Link>
                </li>
                <li>
                  <div
                    className="link-burger"
                    onClick={() => {
                      goToServices();
                      toggleActive(false);
                    }}
                  >
                    Behandlingar
                  </div>
                </li>
                <li>
                  <Link
                    className="link-burger"
                    to={"/prices"}
                    onClick={() => toggleActive(false)}
                  >
                    Priser
                  </Link>
                </li>
                <li>
                  <Link
                    className="link-burger"
                    to={"/contacts"}
                    onClick={() => toggleActive(false)}
                  >
                    Kontakter
                  </Link>
                </li>
                <li>
                  <Link
                    className="link-burger"
                    to={"/aboutme"}
                    onClick={() => toggleActive(false)}
                  >
                    Om Salongen
                  </Link>
                </li>
                <li>
                  <a
                    className="
                  bokatid-header-btn"
                    href="https://www.bokadirekt.se/places/iconic-brows-beauty-45783"
                    target="_blank"
                  >
                    Boka Tid
                  </a>
                </li>
              </ul>
              <div className="btn-burger-header-container"></div>
            </div>
          </div>
          <div className="links-line-container">
            <div className="header-line-gradient"></div>
            <div className="header-links-container">
              <Link className="link" to={"/"}>
                Hem
              </Link>
              <div className="link" onClick={goToServices}>
                Behandlingar
              </div>
              <Link className="link" to={"/prices"}>
                Priser
              </Link>
              <Link className="link" to={"/contacts"}>
                Kontakter
              </Link>
              <Link className="link" to={"/aboutme"}>
                Om Salongen
              </Link>
              <a
                className="link bokatid"
                href="https://www.bokadirekt.se/places/iconic-brows-beauty-45783"
                target="_blank"
              >
                Boka Tid
              </a>
            </div>
            <div className="header-line-gradient"></div>
          </div>
        </div>
      </div>
    </>
  );
};
