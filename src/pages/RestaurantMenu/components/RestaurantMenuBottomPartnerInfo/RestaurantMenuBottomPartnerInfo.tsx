import React, { memo } from 'react';
import { LegalDto } from '../../../../modules/legal/types';
import './restaurantMenuBottomPartnerInfo.less';

type Props = LegalDto;

function RestaurantMenuBottomPartnerInfo(props: Props) {
  const { adress, name, ogrn, inn, kpp } = props;

  return (
    <div className='legal-info'>
      <span className='legal-info__part'>
        Исполнитель: {name}, Адрес: {adress},
      </span>
      <span className='legal-info__part'>ИНН {inn}</span>
      {kpp && <span className='legal-info__part'>КПП {kpp}</span>}
      {ogrn && <span className='legal-info__part'>ОГРН {ogrn}</span>}
    </div>
  );
}

export default memo(RestaurantMenuBottomPartnerInfo);
