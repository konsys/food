import React, { memo } from 'react';
import { LegalDto } from '../../../../modules/legal/types';
import './restaurantMenuBottomPartnerInfo.less';

function RestaurantMenuBottomPartnerInfo(props: LegalDto) {
  const { address, name, ogrn, inn, kpp } = props;

  return (
    <div className='legal-info'>
      <span className='legal-info__part'>
        Исполнитель: {name}, Адрес: {address},
      </span>
      <span className='legal-info__part'>ИНН {inn}</span>
      {kpp && <span className='legal-info__part'>КПП {kpp}</span>}
      {ogrn && <span className='legal-info__part'>ОГРН {ogrn}</span>}
    </div>
  );
}

export default memo(RestaurantMenuBottomPartnerInfo);
