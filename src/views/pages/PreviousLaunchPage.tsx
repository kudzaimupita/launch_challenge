import React from "react";
import LaunchContainer from "../../components/launch/launchContainer";

const PreviousLaunch = () => {
  return (
    <LaunchContainer
      navigateButton={{ name: "Next Launch", route: "/next-launch" }}
      queryParam={"launchLatest"}
    />
  );
};

export default PreviousLaunch;
