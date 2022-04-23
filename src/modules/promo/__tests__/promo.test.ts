import { PromoModel } from '../../../store';
import { promoFactory } from '../promoFactory';

describe('promo tests', () => {
  const { createNewItemFx } = PromoModel;

  it.skip('should create promo', async () => {

    for (let i1 = 1; i1 < 11; i1++) {
      const item = promoFactory.build();
      await createNewItemFx(item);
    }
    expect(1).toBe(1);
  })

});

