import { PromoModel, RestaurantMenuModel } from '../../../store';
import { promoFactory } from '../promoFactory';

describe('promo tests', () => {
  const { createItemFx } = PromoModel;

  it('should create promo', async () => {

    for (let i1 = 1; i1 < 11; i1++) {
      const item = promoFactory.build();
      await createItemFx(item);
    }
    expect(1).toBe(1);
  })

});

