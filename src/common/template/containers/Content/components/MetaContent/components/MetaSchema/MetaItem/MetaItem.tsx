import React, { memo } from 'react';

interface Props {
  name: string;
  logo: string;
  telephone: string;
  email: string;
  imagesPaths: string[];
}

function MetaItem(props: Props) {
  const { name, telephone, email, logo, imagesPaths } = props;

  return (
    <div itemProp='itemListElement' itemScope itemType='https://schema.org/ListItem'>
      <meta itemProp='name' content={name} />
      <meta itemProp='position' />
      <a itemProp='url' href={name} />

      {email && <meta itemProp='email' content={email} />}
      {telephone && <meta itemProp='telephone' content={telephone} />}
      {logo && <meta itemProp='logo' content={logo} />}
      {imagesPaths && imagesPaths.map((v) => <meta itemProp='image' content={v} />)}
    </div>
  );
}

export default memo(MetaItem);
