import React, { memo } from 'react';

interface Props {}

function RestarauntMenuBottomLinks(props: Props) {
  const {} = props;

  return (
    <div className='legal-info'>
      Исполнитель: ООО «Экспресс бар», Адрес: ул. Родионова, д. 187в,
      <span className='legal-info__part'>ИНН 5260451702</span>,
      <span className='legal-info__part'>КПП 526001001</span>,
      <span className='legal-info__part'>ОГРН 1185275004750</span>
    </div>
  );
}

export default memo(RestarauntMenuBottomLinks);
