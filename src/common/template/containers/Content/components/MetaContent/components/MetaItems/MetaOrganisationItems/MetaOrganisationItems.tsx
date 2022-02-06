import React, { memo } from 'react';
import MetaRatingItem from '../MetaRatingItem/MetaRatingItem';

interface Props {
  name?: string;
  logo?: string;
  telephone?: string;
  email?: string;
  address?: string;
  imagesPaths?: string[];
}

function MetaOrganisationItems(props: Props) {
  const { name, telephone, email, logo, imagesPaths, address } = props;

  return (
    <div itemScope itemType='https://schema.org/Organization' className='hidden'>
      <meta itemProp='name' content={name} />
      <meta itemProp='position' />
      <a itemProp='url' href={name} />
      {address && <meta itemProp='address' content={address} />}
      {email && <meta itemProp='email' content={email} />}
      {telephone && <meta itemProp='telephone' content={telephone} />}
      {logo && <meta itemProp='logo' content={logo} />}
      {imagesPaths && imagesPaths.map((v) => <meta itemProp='image' content={v} />)}
      <MetaRatingItem />
    </div>
  );
}

export default memo(MetaOrganisationItems);
