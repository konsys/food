import { Pagination } from 'antd';
import React from 'react';

export default function TemplatePagination() {
  return (
    <>
      <Pagination defaultCurrent={1} total={50} />
    </>
  );
}
