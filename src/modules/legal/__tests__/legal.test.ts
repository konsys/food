import { LegalModel } from '../../../store';
import { legalFactory } from '../legalFactory';

const { createNewItemFx } = LegalModel;


describe('legal tests', () => {
  it.skip('should create legal', async () => {
    for (let i = 0; i < 10; i++) {
      await createNewItemFx(legalFactory.build());
    }
  });
});
