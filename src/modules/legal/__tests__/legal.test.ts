import { LegalModel } from '../../../store';
import { legalFactory } from '../legalFactory';

const { createItemFx } = LegalModel;

const generateNewItem = () => {
  let newItem = legalFactory.build();

  return newItem;
};

describe('menu tests', () => {
  it.skip('should create menu', async () => {
    for (let i = 0; i < 100; i++) {
      await Promise.all(new Array(20).fill(await createItemFx(generateNewItem())));
    }
  });
});
