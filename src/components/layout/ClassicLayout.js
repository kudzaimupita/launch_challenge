import React from "react";
import Header from "./Header";
import View from "../../views/index";

const ClassicLayout = (props) => {
  return (
    <div className="app-layout-classic flex flex-auto flex-col">
      <div className="flex flex-auto min-w-0">
        {/* <SideNav /> */}
        <div className="flex flex-col flex-auto min-h-screen min-w-0 relative w-full">
          <Header className="shadow dark:shadow-2xl" />
          <div className="h-full flex flex-auto flex-col">
            <View {...props} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassicLayout;
