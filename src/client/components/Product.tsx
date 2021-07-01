import React from "react";
import { Link } from "react-router5";

import "./Product.css";

type ProductProps = { name: string };
export const Product: React.FC<ProductProps> = ({ name }) => {
  return (
    <div className={"product"}>
      <h2>{name} </h2>
      <Link
        routeName="details"
        routeParams={{ product: name }}
        activeClassName="active"
      >
        <h4>{"View Details"}</h4>
      </Link>
    </div>
  );
};

export default Product;
