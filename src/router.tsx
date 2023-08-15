// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { lazy, Suspense, useContext } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const Tree = lazy(
  () => import(/* webpackChunkName: "CoreLayout" */ "./Tree")
);
const History = lazy(
    () => import(/* webpackChunkName: "CoreLayout" */ "./History")
  );
  const Layout = lazy(
    () => import(/* webpackChunkName: "CoreLayout" */ "./Layout")
  );
  const Error = lazy(
    () => import(/* webpackChunkName: "CoreLayout" */ "./Error")
  );

export default function Router() {
  const router = createBrowserRouter([
    {
      element: (
        <Suspense fallback={<>...</>}>
          <Layout />
        </Suspense>
      ),
      children: [
        {
          path: "",
          element: (
            <Suspense fallback={<>...</>}>
              <Tree />
            </Suspense>
          ),
        },
        {
            path: "history",
            element: (
              <Suspense fallback={<>...</>}>
                <History />
              </Suspense>
            ),
          },
          {
            path: "family-tree",
            element: (
              <Suspense fallback={<>...</>}>
                <Tree />
              </Suspense>
            ),
          },
      ],
      errorElement: (
        <Suspense fallback={<>...</>}>
          <Error />
        </Suspense>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
}
