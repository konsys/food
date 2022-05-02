import { Row, Col, Avatar, Image } from 'antd';
import React, { memo } from 'react';
import { UserOutlined } from '@ant-design/icons';
import { Nullable } from '../../core/types';
import { IUser } from '../../modules/user/types';

interface Props {
  user: Nullable<IUser>;
}

function UserAvatarIcon(props: Props) {
  const { user } = props;

  return (
    <Row>
      <Col>
        <div>
          {user?.avatar ? (
            <Avatar src={<Image src={user.avatar} style={{ width: 32 }} />} />
          ) : (
            <Avatar size="large" icon={<UserOutlined />} />
          )}
        </div>
      </Col>
    </Row>
  );
}

export default memo(UserAvatarIcon);
