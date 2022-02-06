import React, { memo } from 'react';

type TMetaItem = {
  name: string;
  position: string;
  url: string;
};

interface Props {
  items?: TMetaItem[];
}

function MetaItemList(props: Props) {
  const { items } = props;

  return (
    <div itemScope itemType='https://schema.org/ItemList' className='hidden'>
      {items &&
        items.map(({ name, position, url }) => (
          <div itemProp='itemListElement' itemScope itemType='https://schema.org/ListItem'>
            <meta itemProp='name' content={name} />
            <meta itemProp='position' content={position} />
            <a itemProp='url' href={url} />
          </div>
        ))}
    </div>
  );
}

export default memo(MetaItemList);
