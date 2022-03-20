import { Test, TestingModule } from '@nestjs/testing';
import { RestarauntMenuController } from './restaurant-menu.controller';
import { RestarauntMenuService } from './restaurant-menu.service';

describe('RestarauntMenuController', () => {
  let controller: RestarauntMenuController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RestarauntMenuController],
      providers: [RestarauntMenuService],
    }).compile();

    controller = module.get<RestarauntMenuController>(RestarauntMenuController);
  });

  it.skip('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
