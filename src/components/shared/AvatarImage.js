import React from "react";
import PropTypes from "prop-types";

// const { MODE_DARK } = THEME_ENUM;

const DoubleSidedImage = ({ src, darkModeSrc, alt, ...rest }) => {
  return <img src={src} alt={alt} {...rest} />;
};

DoubleSidedImage.propTypes = {
  darkModeSrc: PropTypes.string,
};

export default DoubleSidedImage;
