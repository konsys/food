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
    <Row justify="center" align="top">
      {user?.avatar ? (
        <Col>
          <Avatar src={<Image src={user.avatar} style={{ width: 32 }} />} />
        </Col>
      ) : (
        <>
          <Col span={12}>
            <Avatar size="default" icon={<UserOutlined />} />
          </Col>
          <Col span={12}> {user?.name}</Col>
        </>
      )}
    </Row>
  );
}

export default memo(UserAvatarIcon);
