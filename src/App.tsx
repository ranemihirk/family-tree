import "./App.css";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { lazy, Suspense, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";

const Router = lazy(
  () => import(/* webpackChunkName: "Router" */ "./router")
);

const root = createRoot(document.getElementById("app") as HTMLDivElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export default function App() {
  return <Router />;
}
