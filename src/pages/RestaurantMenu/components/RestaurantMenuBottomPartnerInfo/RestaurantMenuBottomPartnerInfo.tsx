import React, { memo } from 'react';
import { LegalDto } from '../../../../modules/legal/types';
import './restaurantMenuBottomPartnerInfo.less';

type Prop = {
  legal?: LegalDto;
};

function RestaurantMenuBottomPartnerInfo({ legal }: Prop) {
  return (
    <div>
      {legal ? (
        <div className='legal-info d-flex flex-md-row'>
          <div className='legal-info__part'>
            Исполнитель: {legal.name}, Адрес: {legal.address},
          </div>
          <div className='legal-info__part'>ИНН {legal.inn}</div>
          {legal.kpp && <div className='legal-info__part'>КПП {legal.kpp}</div>}
          {legal.ogrn && <div className='legal-info__part'>ОГРН {legal.ogrn}</div>}
        </div>
      ) : (
        ''
      )}
    </div>
  );
}

export default memo(RestaurantMenuBottomPartnerInfo);
