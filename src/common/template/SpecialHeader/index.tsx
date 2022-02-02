import React from 'react';
import './styles.less';

interface Props {
  specialHeaderTitle: string;
}

export function SpecialHeader({ specialHeaderTitle }: Props) {
  return (
    <div className='all-page-title page-breadcrumb'>
        <div className='container text-center'>
          <div className='row'>
            <div className='col-lg-12'>
              <h1>{specialHeaderTitle}</h1>
            </div>
          </div>
        </div>
      </div>
  );
}
