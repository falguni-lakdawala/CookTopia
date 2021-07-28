import propTypes from "prop-types";
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import Search from "./Search";
import icon from "../../assets/logo/logo-large.svg";
import { useLocation } from "react-router-dom";
import account from "../../assets/icons/account.svg";
import logoLarge from "../../assets/logo/logo-large.svg";
import logoSmall from "../../assets/logo/logo-small.svg";
import mobileMenuToggleIcon from "../../assets/icons/mobile-toggle.svg";
import Images from "../composable-components/Images";
// Header Component takes in array property and renders them accordingly.

const Navbar = ({ navElements }) => {
  const ref = useRef();
  const location = useLocation();

  const setActiveNavLink = () => {
    let pageURL = window.location.pathname.substring(1);
    let links = document.querySelectorAll(".app_header nav ul li a");
    let linksMobile = document.querySelectorAll(".mobile-nav ul li a");
    links.forEach((el) => {
      if (pageURL == el.getAttribute("href").substring(1)) {
        el.classList.add("active");
      } else {
        el.classList.remove("active");
      }
    });
    linksMobile.forEach((el) => {
      if (pageURL == el.getAttribute("href").substring(1)) {
        el.classList.add("active");
      } else {
        el.classList.remove("active");
      }
    });
  };
  setActiveNavLink();

	window.addEventListener('DOMContentLoaded', (e) => {
		setActiveNavLink();
	});

  return (
    <>
      <div className="logo">
        <Link to="/home">
          <img
            className="desktop-header-logo"
            src={logoLarge}
            alt="logo"
            loading="lazy"
          />
          <img
            className="mobile-header-logo"
            src={logoSmall}
            alt="logo"
            loading="lazy"
          />
        </Link>
      </div>
      <div className="desktop-nav-cont">
        <nav className="desktop-nav">
          <ul className="active">
            {navElements.map((li) => (
              <li key={li.text.toString()}>
                <Link to={{ pathname: li.link, state: location }}>
                  {li.text}
                </Link>
              </li>
            ))}
            <li>
              <Link to={{ pathname: "/profile" }}>
                <img src={account} alt={"userimage"} loading="lazy" />
              </Link>
            </li>
          </ul>
          <Search screenType={1} />
        </nav>
      </div>
      <div className="mobile-nav-cont">
        <div className="mobile-nav-toggle-btn-cont">
          <button
            role="button"
            aria-label="toggle mobile nav"
            title="toggle mobile nav"
            type="button"
            className="mobile-nav-toggle-btn"
            onClick={(e) =>
              document.querySelector(".mobile-nav").classList.toggle("active")
            }
          >
						<svg id="mobile-nav-toggle-btn-svg" width="33" height="25" viewBox="0 0 33 25" fill="none" xmlns="http://www.w3.org/2000/svg" alt="mobile menu toggle" aria-label="mobile toggle icon">
							<path d="M1.71875 12.5H31.2812" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
							<path d="M1.71875 1.75H31.2812" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
							<path d="M1.71875 23.25H31.2812" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
						</svg>
          </button>
        </div>
        <Search screenType={2} />
      </div>
    </>
  );
};

Navbar.propTypes = {
  navElements: propTypes.array,
};

Navbar.defaultProps = {
  navElements: ["Home", "About"],
};

export default Navbar;
