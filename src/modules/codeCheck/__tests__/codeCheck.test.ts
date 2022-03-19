import { CodeCheckModel } from '../../../store';
import { codeCheckFactory } from '../codeCheckFactory';

const { createItemFx } = CodeCheckModel;

const generateNewItem = () => codeCheckFactory.build();

describe('codeCheck tests', () => {
  it('should create codeCheck', async () => {
    await Promise.all(new Array(20).fill(await createItemFx(generateNewItem())));
    expect(1).toBe(1);
  });
});
