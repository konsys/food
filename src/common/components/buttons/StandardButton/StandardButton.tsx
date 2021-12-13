import { Button } from "antd";
import React from "react";
import "./styles.scss";

interface Props {
  text: string;
  isUppercase?: boolean;
  isBigPadding?: boolean;
}

export const StandardButton = ({
  text,
  isUppercase = false,
  isBigPadding = false
}: Props) => {
  return (
    <>
      <Button
        className={`btn btn-lg btn-circle btn-outline-new-white ${isUppercase &&
          "btn-uppercase"} ${isBigPadding && "btn-big-padding"}`}
      >
        {text}
      </Button>
    </>
  );
};
