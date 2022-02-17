import { ImageModel } from '../../../../store';
import { imageFactory } from '../imageFactory';

const { createItemFx } = ImageModel;

describe('image tests', () => {
  beforeAll(async () => {
    await Promise.all(new Array(20).fill(await createItemFx(imageFactory.build())));
  });

  it('should image', () => {
    expect(1).toBe(1);
  });
});
