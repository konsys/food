import React, { memo } from 'react';

interface Props {}

function FooterCopyright(props: Props) {
  const {} = props;

  return (
    <div className='footer-copyright'>
      <p>© 2022 Broniboy. ООО «УК Бронибой»</p>
    </div>
  );
}

export default memo(FooterCopyright);
