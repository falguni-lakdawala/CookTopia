
import propTypes from 'prop-types'
import React,{useRef} from 'react'
import {Link} from 'react-router-dom';
import Search from './Search';
import account from '../../assets/svg/account.svg'
import icon from '../../assets/svg/icon.svg'
import Images from '../composable-components/Images'
// Header Component takes in array property and renders them accordingly.


// Use ref to get reference to navbar



// Nav handler
const mobileToggle=(target) =>{
    

    // Mobile Nav toggler
    // Toggles mobile nav bar
const x=target.current.style;

// If display is block hide it else display them.

if(x.display=='block'){
    x.display="none"
}else{
    x.display="block"
}


  }

const Navbar = ({ navElements }) => {
    const ref= useRef();
    return (
<>
        <div className="logo">
          <Link to="/home">
            <Images src={icon} alt="logo" />
          </Link>
        </div>

        <div className="desktop_nav">
          <nav className="desktop">
            <ul>
              {navElements.map((li) => (
                <li key={li.text.toString()}>
                  <Link to={li.link}>{li.text}</Link>
                </li>
              ))}
              <li><Images src={account} alt={"userimage"} /></li>
            </ul>

            <Search />
          </nav>
        </div>
        <div className="mobile_nav">
          <nav className="mobile" ref={ref}>
            <ul>
              <li>
                <Link to="">Cooktopia</Link>
              </li>
              {navElements.map((li) => (
                <li key={li.text.toString()}>{li.text}</li>
              ))}
              <li><Images src={account} alt="userimage"/></li>
            </ul>

            
          </nav>
          <a className="iconmobile" onClick={(e) => mobileToggle(ref)}>
            Toggle
          </a>
          <Search/>
        </div>
      </>
    );
}


Navbar.propTypes = {
    navElements: propTypes.array
}

Navbar.defaultProps = {

    navElements: ["Home","About"]

}

export default Navbar;