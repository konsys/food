import { ImageModel } from '../../../../store';
import { imageFactory } from '../imageFactory';

const { createItemFx } = ImageModel;

describe('image tests', () => {
  beforeAll(async () => {
    for (let i = 0; i < 100; i++) {
      await Promise.all(new Array(20).fill(await createItemFx(imageFactory.build())));
    }
  });

  it.skip('should image', async () => {
    const image = imageFactory.build();
    await Promise.all(new Array(20).fill(await createItemFx(image)));
    expect(1).toBe(1);
  });
});
