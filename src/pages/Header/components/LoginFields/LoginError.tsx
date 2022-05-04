import React, { memo } from 'react';

interface Props {
  error: string;
}

function LoginError(props: Props) {
  const { error } = props;

  return <span>{error}</span>;
}

export default memo(LoginError);
