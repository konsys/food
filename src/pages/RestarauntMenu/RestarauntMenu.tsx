import React, { memo } from 'react';
import RestarauntMenuListBlock from './components/RestarauntMenuListBlock/RestarauntMenuListBlock';
import RestarauntMenuBottomLinks from './RestarauntMenuBottomLinks/RestarauntMenuBottomLinks';
import RestarauntMenuTopNavigation from './components/RestarauntMenuTopNavigation/RestarauntMenuTopNavigation';
import Cart from '../Cart/Cart';
import RestarauntMenuHeader from './components/RestarauntMenuHeader/RestarauntMenuHeader';

interface Props {}

function RestarauntMenu(props: Props) {
  const {} = props;

  return (
    <div className='container'>
      <div className='page-restaurant'>
        <div className='restaurant-section'>
          <RestarauntMenuHeader />
          <RestarauntMenuTopNavigation />
          <section className='restaurant-menu'>
            <RestarauntMenuListBlock />

            <RestarauntMenuBottomLinks />
          </section>
        </div>
        <Cart />
      </div>
    </div>
  );
}

export default memo(RestarauntMenu);
