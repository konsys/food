import React, { memo } from 'react';
import './restaurantMenuBottomPartnerInfo.less';

interface Props {
  partnerName: string;
  partnerAddress: string;
  partnerINN: string;
  partnerKPP?: string;
  partnerOGRN?: string;
}

function RestaurantMenuBottomPartnerInfo(props: Props) {
  const { partnerName, partnerAddress, partnerINN, partnerKPP, partnerOGRN } = props;

  return (
    <div className='legal-info'>
      <span className='legal-info__part'>
        Исполнитель: {partnerName}, Адрес: {partnerAddress},
      </span>
      <span className='legal-info__part'>ИНН {partnerINN}</span>
      {partnerKPP && <span className='legal-info__part'>КПП {partnerKPP}</span>}
      {partnerOGRN && <span className='legal-info__part'>ОГРН {partnerOGRN}</span>}
    </div>
  );
}

export default memo(RestaurantMenuBottomPartnerInfo);
