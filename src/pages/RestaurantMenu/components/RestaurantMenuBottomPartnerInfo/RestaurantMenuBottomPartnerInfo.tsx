import React, { memo } from 'react';
import { LegalDto } from '../../../../modules/legal/types';
import './restaurantMenuBottomPartnerInfo.less';

type Prop = {
  legal?: LegalDto;
};

function RestaurantMenuBottomPartnerInfo({ legal }: Prop) {
  return (
    <>
      {legal ? (
        <div className='legal-info'>
          <span className='legal-info__part'>
            Исполнитель: {legal.name}, Адрес: {legal.address},
          </span>
          <span className='legal-info__part'>ИНН {legal.inn}</span>
          {legal.kpp && <span className='legal-info__part'>КПП {legal.kpp}</span>}
          {legal.ogrn && <span className='legal-info__part'>ОГРН {legal.ogrn}</span>}
        </div>
      ) : (
        ''
      )}
    </>
  );
}

export default memo(RestaurantMenuBottomPartnerInfo);
