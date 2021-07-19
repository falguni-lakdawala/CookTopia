
import propTypes from 'prop-types'
import React from 'react'

const Images = ({src,alt}) => {
    return (
        
<img role="img" src={src} alt={alt} loading='lazy'></img>

    )
}

export default Images
