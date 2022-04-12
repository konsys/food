import React, { memo } from 'react';

interface Props {}

function MetaSchemaWebPage(props: Props) {
  const {} = props;

  return (
    <div itemScope itemType='https://schema.org/WebPage' className='hidden'>
      <a itemProp='url' href='/' />
    </div>
  );
}

export default memo(MetaSchemaWebPage);
