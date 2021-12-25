import { Test, TestingModule } from '@nestjs/testing';
import { MenuController } from '../menu.controller';
import { MenuService } from '../menu.service';

describe('MenuController', () => {
  let controller: MenuController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MenuController],
      providers: [MenuService],
    }).compile();

    controller = module.get<MenuController>(MenuController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
  
  // it('should return an array of cats', async () => {
  //   const result = ['test'];
  //   jest.spyOn(catsService, 'findAll').mockImplementation(() => result);

  //   expect(await catsController.findAll()).toBe(result);
  // });
});
