import { Test, TestingModule } from '@nestjs/testing';
import { MenuTimeController } from './menu-time.controller';
import { MenuTimeService } from './menu-time.service';

describe('MenuTimeController', () => {
  let controller: MenuTimeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MenuTimeController],
      providers: [MenuTimeService],
    }).compile();

    controller = module.get<MenuTimeController>(MenuTimeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
