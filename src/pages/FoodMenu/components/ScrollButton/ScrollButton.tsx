import React from "react";
import "./styles.scss";

interface Props {}

export const ScrollButton = (props: Props) => {
  return (
    <a
      href="/test-root"
      id="back-to-top"
      title="Back to top"
      style={{ display: "none" }}
    >
      ↑
    </a>
  );
};
