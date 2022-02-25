import React, { memo } from 'react';
import { useGate, useStore } from 'effector-react';
import { useParams } from 'react-router-dom';
import RestaurantMenuListBlock from './components/RestaurantMenuListBlock/RestaurantMenuListBlock';
import RestaurantMenuBottomLinks from './RestaurantMenuBottomLinks/RestaurantMenuBottomLinks';
import RestaurantMenuBottomPartnerInfo from './components/RestaurantMenuBottomPartnerInfo/RestaurantMenuBottomPartnerInfo';
import Cart from '../Cart/Cart';
import RestaurantMenuHeader from './components/RestaurantMenuHeader/RestaurantMenuHeader';
import './restaurantMenu.less';
import { RestaurantModel } from '../../store';

const { $itemStore, ItemGate } = RestaurantModel;

function RestaurantMenu() {
  const { uuid } = useParams<{ uuid: string }>();
  useGate(ItemGate, uuid);
  const { item } = useStore($itemStore);

  // const menuLinks: TItemWithUuid<RestaurantDto> =   grouppedByCategory(menu, 'foodCategory.name');
  // console.log(1111111111111, );
  return (
    <div>
      {item ? (
        <div className='container'>
          <div className='page-restaurant d-flex'>
            <div className='restaurant-section'>
              <RestaurantMenuHeader restaurant={item} />
              {/* {item?.menuItems ? <RestaurantMenuTopNavigation menuItems={item.menuItems} /> : ''} */}

              <section className='restaurant-menu'>
                <RestaurantMenuListBlock menu={item.restaurantMenu} />
                <RestaurantMenuBottomPartnerInfo legal={item.legal} />
                <RestaurantMenuBottomLinks />
              </section>
            </div>
            <Cart />
          </div>
        </div>
      ) : (
        <span />
      )}
    </div>
  );
}

export default memo(RestaurantMenu);
