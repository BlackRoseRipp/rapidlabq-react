import React, { Component, Suspense } from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";

const Home = React.lazy(() => import("../pages/Home"));
const PageNotFound = React.lazy(() => import("../pages/PageNotFound"));

export const routes = () => {
  const pages = [
    { path: "/", component: <Home /> },
    { path: "*", component: <PageNotFound /> },
  ];

  return (
    <Suspense
      fallback={
        <h3 style={{ textAlign: "center", padding: "50px" }}>Loading...</h3>
      }
    >
      <Routes>
        {pages.map((page) => {
          return <Route path={page.path} exact element={page.component} />;
        })}
      </Routes>
    </Suspense>
  );
};
