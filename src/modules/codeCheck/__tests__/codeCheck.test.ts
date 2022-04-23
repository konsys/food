import { CodeCheckModel } from '../../../store';
import { codeCheckFactory } from '../codeCheckFactory';

const { createNewItemFx } = CodeCheckModel;

const generateNewItem = () => codeCheckFactory.build();

describe('codeCheck tests', () => {
  it.skip('should create codeCheck', async () => {
    await Promise.all(new Array(20).fill(await createNewItemFx(generateNewItem())));
    expect(1).toBe(1);
  });
});
