import React, { memo } from 'react';

interface MetaParts {
  breadcrumbUrlPart: string;
  name: string;
}

interface Props {
  metaElements: MetaParts[];
}

function MetaBreadcrumsItems(props: Props) {
  const { metaElements } = props;

  return (
    <div itemScope itemType='https://schema.org/BreadcrumbList' className='hidden'>
      {metaElements.map(({ name, breadcrumbUrlPart }) => {
        <div itemProp='itemListElement' itemScope itemType='https://schema.org/ListItem'>
          <meta itemProp='name' content={name} />
          <meta itemProp='position' />
          <a itemProp='url' href={breadcrumbUrlPart} />
          <meta itemProp='item' content={breadcrumbUrlPart} />
        </div>;
      })}
    </div>
  );
}

export default memo(MetaBreadcrumsItems);
