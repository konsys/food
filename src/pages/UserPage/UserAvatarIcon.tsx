import { Row, Col } from 'antd';
import React, { memo } from 'react';
import { Nullable } from '../../core/types';
import { IUser } from '../../modules/user/types';

interface Props {
  user: Nullable<IUser>;
}

function UserAvatarIcon(props: Props) {
  const { user } = props;

  return (
    <Row>
      <Col>UserAvatarIcon {user?.name}</Col>
    </Row>
  );
}

export default memo(UserAvatarIcon);
