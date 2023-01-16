import React from "react";
import classNames from "classnames";

interface Props {
  hoverable: any;
  className: String;
}
const withHeaderItem = (Component) => (props: Props) => {
  const { className, hoverable = true } = props;

  return (
    <Component
      {...props}
      className={classNames(
        "header-action-item",
        hoverable && "header-action-item-hoverable",
        className
      )}
    />
  );
};

export default withHeaderItem;
