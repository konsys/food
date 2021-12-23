import { Test, TestingModule } from '@nestjs/testing';
import { MenuTypeGroupController } from './menu-type-group.controller';

describe('MenuTypeGroupController', () => {
  let controller: MenuTypeGroupController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MenuTypeGroupController],
    }).compile();

    controller = module.get<MenuTypeGroupController>(MenuTypeGroupController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
