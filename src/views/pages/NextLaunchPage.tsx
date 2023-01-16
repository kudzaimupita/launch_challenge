import React from "react";
import LaunchContainer from "../../components/launch/launchContainer";

const NextLaunch = () => {
  return (
    <LaunchContainer
      navigateButton={{ name: "Latest Launch", route: "/previous-launch" }}
      queryParam={"launchNext"}
    />
  );
};

export default NextLaunch;
