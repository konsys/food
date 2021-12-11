import React from "react";

interface Props {}

export const ScrollButton = (props: Props) => {
  return (
    <div className="scrollup">
      <a href="/test">
        <i className="fa fa-chevron-up"></i>
      </a>
    </div>
  );
};
