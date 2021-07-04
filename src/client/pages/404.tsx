import React from "react";
import { Link } from "react-router5";

import "./404.css";

export const Page404 = () => (
  <main className="page-404">
    <h1 className="error-header">404 - Page Not Found</h1>
    <Link routeName="home">
      <h4>{"Return to Home Page"}</h4>
    </Link>
  </main>
);

export default Page404;
