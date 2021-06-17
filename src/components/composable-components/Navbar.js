
import propTypes from 'prop-types'
import React from 'react'
// Header Component takes in array property and renders them accordingly.
const Navbar = ({ navElements }) => {
    return (
        <>
            <nav>
                <ul>
                    {
                        navElements.map((li,index) => <li key={index}>{li}</li>)
                    }
                </ul>
            </nav>
        </>
    )
}


Navbar.propTypes = {
    navElements: propTypes.array
}

Navbar.defaultProps = {

    navElements: ["Home","About"]

}

export default Navbar;