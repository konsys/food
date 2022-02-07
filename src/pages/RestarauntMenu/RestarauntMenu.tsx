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
          <RestarauntMenuHeader
            deliveryBlockHidden
            closeTime='21:00'
            priceRating={3}
            rating={5}
            restarauntName='Тарантино бар'
            restaruantImgSrc='https://images.broniboy.ru/RBMkcsNpDbBAn3YAtSXoVdyzxEw=/1200x0/smart/filters:smart_sharpen():allow_webp(false)/own/d83eb13e-0245-40db-8e18-aa88db999859/fe4691e44863606f086421346c4b48fc.jpg'
          />
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
