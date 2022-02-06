import React, { memo } from 'react';
import MetaBreadcrumsItems from '../MetaItems/MetaBreadcrumsItems/MetaBreadcrumsItems';
import MetaItemList from '../MetaItems/MetaItemList/MetaItemList';
import MetaOrganisationItems from '../MetaItems/MetaOrganisationItems/MetaOrganisationItems';
import MetaRatingItem from '../MetaItems/MetaRatingItem/MetaRatingItem';
import MetaSchemaWebPage from '../MetaItems/MetaSchemaWebPage/MetaSchemaWebPage';

interface Props {}

function MetaSchemaBlocks(props: Props) {
  return (
    <>
      <MetaSchemaWebPage />
      <MetaRatingItem />
      <MetaBreadcrumsItems
        metaElements={[
          {
            breadcrumbUrlPart: 'http:vk.com',
            name: 'MeForever',
          },
        ]}
      />

      <MetaOrganisationItems />
      <MetaItemList />
    </>
  );
}

export default memo(MetaSchemaBlocks);
