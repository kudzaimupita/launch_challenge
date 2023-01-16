import React from "react";

export const protectedRoutes = [
  {
    key: "home",
    path: "/home",
    component: React.lazy(() => import("./pages/HomePage")),
    authority: [],
  },
  {
    key: "singleMenuItem",
    path: "/next-launch",
    component: React.lazy(() => import("./pages/NextLaunchPage")),
    authority: [],
  },
  {
    key: "previousLaunch",
    path: "/previous-launch",
    component: React.lazy(() => import("./pages/PreviousLaunchPage")),
    authority: [],
  },
];
