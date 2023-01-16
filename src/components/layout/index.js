import React, { memo, useMemo, lazy, Suspense } from "react";
import { Loading } from "../shared";

const Layout = () => {
  const AppLayout = useMemo(() => {
    return lazy(() => import("./ClassicLayout"));
  }, []);

  return (
    <Suspense
      fallback={
        <div className="flex flex-auto flex-col h-[100vh]">
          <Loading loading={true} />
        </div>
      }
    >
      <AppLayout />
    </Suspense>
  );
};

export default memo(Layout);
