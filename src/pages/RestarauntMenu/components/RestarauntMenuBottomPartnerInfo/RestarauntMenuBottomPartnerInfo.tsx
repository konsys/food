import React, { memo } from 'react';

interface Props {
  partnerName: string;
  partnerAddress: string;
  partnerINN: string;
  partnerKPP?: string;
  partnerOGRN?: string;
}

function RestarauntMenuBottomPartnerInfo(props: Props) {
  const { partnerName, partnerAddress, partnerINN, partnerKPP, partnerOGRN } = props;

  return (
    <div className='legal-info'>
      Исполнитель: {partnerName}, Адрес: {partnerAddress}
      <span className='legal-info__part'>ИНН {partnerINN}</span>,
      <span className='legal-info__part'>КПП {partnerKPP}</span>,
      <span className='legal-info__part'>ОГРН {partnerOGRN}</span>
    </div>
  );
}

export default memo(RestarauntMenuBottomPartnerInfo);
