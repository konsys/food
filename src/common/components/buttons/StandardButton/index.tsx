import { Button } from 'antd';
import React from 'react';
import './styles.less';

interface Props {
  text: string;
  isUppercase?: boolean;
  isBigPadding?: boolean;
  isWhiteText?: boolean;
}

export function StandardButton({
  text,
  isUppercase = false,
  isBigPadding = false,
  isWhiteText = false,
}: Props) {
  return (
    <Button
        className={`btn btn-lg btn-circle ${isUppercase && 'btn-uppercase'} ${
          isBigPadding && 'btn-big-padding'
        }  ${isWhiteText && 'btn-white'}`}
      >
        {text}
      </Button>
  );
}
