import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { HEADER_HEIGHT_CLASS } from "../../utils/theme.constant";

const Header = (props) => {
  const { headerStart, headerEnd, headerMiddle, className, container } = props;

  return (
    <header className={classNames("header", className)}>
      <div
        className={classNames(
          "header-wrapper",
          HEADER_HEIGHT_CLASS,
          container && "container mx-auto"
        )}
      >
        <div className="header-action header-action-start">{headerStart}</div>
        {headerMiddle && (
          <div className="header-action header-action-middle">
            {headerMiddle}
          </div>
        )}
      </div>
    </header>
  );
};

Header.propTypes = {
  headerStart: PropTypes.node,
  headerEnd: PropTypes.node,
  container: PropTypes.bool,
};

export default Header;
