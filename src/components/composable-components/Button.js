
import React from 'react'
import PropTypes from 'prop-types'

const Button = ({type,text,style}) => {
    return (
        <button type={type} style={style} >{text}</button>
    )
}

Button.propTypes={
    style:PropTypes.object,
    text:PropTypes.string
}

Button.defaultProps={
    type:"button",
    style:{},
    text:"text"
}

export default Button
