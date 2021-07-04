import React from "react";
import { useRoute, useRouter } from "react-router5";
import { useSelector } from "react-redux";

import { AppState } from "../store/createStore";
import { Grocery } from "../../types";

type Props = {
  images: string[];
};
export const ProductImages: React.FC<Props> = ({ images }) => (
  <div>
    {images.map((url, idx) => (
      <img key={idx} src={url} />
    ))}
  </div>
);
