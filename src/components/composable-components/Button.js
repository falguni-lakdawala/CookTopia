
import React from 'react'
import PropTypes from 'prop-types'

const Button = ({text,style}) => {
    return (
        <button type="button" style={style} >{text}</button>
    )
}

Button.PropTypes={
    style:PropTypes.string,
    text:PropTypes.string
}

Button.defaultProps={
    style:"",
    text:"text"
}

export default Button
