import React, { memo } from 'react';

interface Props {}

function MetaSchema(props: Props) {
  const {} = props;

  return (
    <div itemScope itemType='https://schema.org/WebPage' className='hidden'>
      <a itemProp='url' href='https://broniboy.ru/nn/' />
    </div>
  );
}

export default memo(MetaSchema);
