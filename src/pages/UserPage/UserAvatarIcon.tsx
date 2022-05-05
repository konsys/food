import { Row, Col, Avatar, Image } from 'antd';
import React, { memo } from 'react';
import { UserOutlined } from '@ant-design/icons';
import { Nullable } from '../../core/types';
import { UserDto } from '../../modules/user/types';

interface Props {
  user: Nullable<UserDto>;
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
            <Avatar size="default" icon={<UserOutlined />} />
          )}
        </div>
      </Col>
    </Row>
  );
}

export default memo(UserAvatarIcon);
