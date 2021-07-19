import propTypes from "prop-types";
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import Search from "./Search";
import icon from "../../assets/logo/logo-large.svg";
import { useLocation } from "react-router-dom";
import account from "../../assets/icons/account.svg";
import logoLarge from "../../assets/logo/logo-large.svg";
import logoSmall from "../../assets/logo/favicon.svg";
import mobileMenuToggleIcon from "../../assets/icons/mobile-toggle.svg";
import Images from "../composable-components/Images";
// Header Component takes in array property and renders them accordingly.

const Navbar = ({ navElements }) => {
  const ref = useRef();
  const location = useLocation();

	const setActiveNavLink = () => {
    let pageURL = window.location.pathname.substring(1);
		let links = document.querySelectorAll('.app_header nav ul li a');
		links.forEach(el => {
			if (pageURL === el.getAttribute('href').substring(1)) {
				el.classList.add('active');
			} else {
				el.classList.remove('active');
			}
		});
  };
	setActiveNavLink();

  return (
    <>
      <div className="logo">
        <Link to="/home">
          <img className="desktop-header-logo" src={logoLarge} alt="logo" loading='lazy'/>
          <img className="mobile-header-logo" src={logoSmall} alt="logo" loading='lazy'/>
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
              <Link to={{pathname:'/profile'}}>
                <img src={account} alt={"userimage"} loading='lazy'/>
              </Link>
            </li>
          </ul>
          <Search screenType={1} />
        </nav>
      </div>
      <div className="mobile-nav-cont">
        <nav className="mobile-nav">
          <div className="mobile-nav-close-btn-cont">
            <button
              title="toggle"
              type="button"
              className="mobile-nav-close-btn"
              onClick={(e) =>
                document.querySelector(".mobile-nav").classList.remove("active")
              }
            >
              <i className="fas fa-times"></i>
            </button>
          </div>
          <ul>
            <li
              onClick={(e) =>
                document.querySelector(".mobile-nav").classList.remove("active")
              }
            >
              <Link to="/profile">
                <img src={account} alt={"userimage"} loading='lazy'/>
              </Link>
            </li>
            {navElements.map((li) => (
              <li
                onClick={(e) =>
                  document
                    .querySelector(".mobile-nav")
                    .classList.remove("active")
                }
                key={li.text.toString()}
              >
                <Link to={{ pathname: li.link, state: li.state }}>
                  {li.text}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="mobile-nav-toggle-btn-cont">
          <button
            role="button"
            aria-label="toggle mobile nav"
            title="toggle"
            type="button"
            className="mobile-nav-toggle-btn"
            onClick={(e) =>
              document.querySelector(".mobile-nav").classList.toggle("active")
            }
          >
            <img
              role="img"
              aria-label="mobile toggle icon"
              src={mobileMenuToggleIcon}
              alt="mobile menu toggle"
              loading='lazy'
            />
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
