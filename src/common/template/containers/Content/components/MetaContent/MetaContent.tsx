import React, { memo } from 'react';
import MetaBreadcrumsItems from './components/MetaItems/MetaBreadcrumsItems/MetaBreadcrumsItems';
import MetaItemList from './components/MetaItems/MetaItemList/MetaItemList';
import MetaOrganisationItems from './components/MetaItems/MetaOrganisationItems/MetaOrganisationItems';
import MetaRatingItem from './components/MetaItems/MetaRatingItem/MetaRatingItem';
import MetaSchemaWebPage from './components/MetaItems/MetaSchemaWebPage/MetaSchemaWebPage';

interface Props {}

function MetaContent(props: Props) {
  const {} = props;

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

      <MetaOrganisationItems address='' name='' />
      <MetaItemList />
    </>
  );
}

export default memo(MetaContent);
