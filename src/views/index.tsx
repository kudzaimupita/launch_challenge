import React, { Suspense } from "react";
import { Loading } from "../components/shared";
import { protectedRoutes } from "./protectedRoutes";
import appConfig from "../app.config";
import PageContainer from "../components/layout/PageContainer";
import { Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoute from "../components/layout/ProtectedRoute";
import AppRoute from "../components/layout/AppRoute";

const { authenticatedEntryPath } = appConfig;

const AllRoutes = (props) => {
  return (
    <Routes>
      <Route path="/" element={<ProtectedRoute />}>
        <Route
          path="/"
          element={<Navigate replace to={authenticatedEntryPath} />}
        />
        {protectedRoutes.map((route, index) => (
          <Route
            key={route.key + index}
            path={route.path}
            element={
              <PageContainer {...props} {...route.meta}>
                <AppRoute
                  routeKey={route.key}
                  component={route.component}
                  {...route.meta}
                />
              </PageContainer>
            }
          />
        ))}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
};

const Views = (props) => {
  return (
    <Suspense fallback={<Loading loading={true} />}>
      <AllRoutes {...props} />
    </Suspense>
  );
};

export default Views;
