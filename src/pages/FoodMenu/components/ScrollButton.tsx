import React from "react";

interface Props {}

export const ScrollButton = (props: Props) => {
  return (
    <a
      href="#"
      id="back-to-top"
      title="Back to top"
      style={{ display: "none" }}
    >
      ↑
    </a>
  );
};
