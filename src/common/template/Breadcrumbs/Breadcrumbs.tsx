import { Breadcrumb } from 'antd';
import React from 'react';

export function Breadcrumbs() {
  return (
    <Breadcrumb>
      <Breadcrumb.Item>
        <a href='/'>General1</a>
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        <a href='/'>General2</a>
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        <a href='/'>General3</a>
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        <a href='/'>General4</a>
      </Breadcrumb.Item>
    </Breadcrumb>
  );
}
