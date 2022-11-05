import React from "react";
// import PropTypes from 'prop-types';

const Input = ({
  title,
  type,
  style,
  size,
  autocomplete,
  placeholder,
  required,
}) => {
  return (
    <input
      title={title}
      type={type}
      style={style}
      size={size}
      autoComplete={autocomplete}
      placeholder={placeholder}
      required={required}
    ></input>
  );
};

// Input.propTypes={
//     tiltle:PropTypes.string,
//     type:PropTypes.string,
// }

Input.defaultProps = {
  title: "Input",
  type: "text",
  style: {},
  size: "15",
  autoComplete: "on",
  placeholder: "Type your text",
  required: "",
};

export default Input;
