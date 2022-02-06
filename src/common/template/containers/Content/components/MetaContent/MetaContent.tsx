import React from 'react';
import MetaBreadcrumsItems from './components/MetaItems/MetaBreadcrumsItems/MetaBreadcrumsItems';
import MetaItemList from './components/MetaItems/MetaItemList/MetaItemList';
import MetaOrganisationItems from './components/MetaItems/MetaOrganisationItems/MetaOrganisationItems';
import MetaRatingItem from './components/MetaItems/MetaRatingItem/MetaRatingItem';
import MetaSchemaWebPage from './components/MetaItems/MetaSchemaWebPage/MetaSchemaWebPage';
import MetaSchema from './components/MetaItems/MetaSchemaWebPage/MetaSchemaWebPage';

export const MetaContent = () => (
  <>
    <MetaSchema />
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
