
import propTypes from 'prop-types'
import React, { useRef } from 'react'
import { Link } from 'react-router-dom';
import Search from './Search';
import icon from '../../assets/logo/logo-large.svg'
import {useHistory} from 'react-router-dom'
import account from "../../assets/icons/account.svg";
import logoLarge from "../../assets/logo/logo-large.svg";
import logoSmall from "../../assets/logo/favicon.svg";
import mobileMenuToggleIcon from "../../assets/icons/mobile-toggle.svg";
import Images from "../composable-components/Images";
// Header Component takes in array property and renders them accordingly.

const Navbar = ({ navElements }) => {
console.log(navElements)
  const ref = useRef();
  return (
    <>
      <div className="logo">
        <Link to="/home">
          <img className="desktop-header-logo" src={logoLarge} alt="logo" />
          <img className="mobile-header-logo" src={logoSmall} alt="logo" />
        </Link>
      </div>
      <div className="desktop-nav-cont">
        <nav className="desktop-nav">
          <ul>
            {navElements.map((li) => (
              <li key={li.text.toString()}>
                <Link to={{ pathname: li.link, state: li.state }}>
                  {li.text}
                </Link>
              </li>
            ))}
            <li>
              <Link to='/profile'><img src={account} alt={"userimage"} /></Link>
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
              <Link to="/profile"><img src={account} alt={"userimage"} /></Link>
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
