import React from "react";

type Props = { extras: string };
export const ProductExtraInfo: React.FC<Props> = ({ extras }: Props) => {
  return <p>{extras}</p>;
};
