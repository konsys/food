import { Test, TestingModule } from '@nestjs/testing';
import { RestarauntsController } from './restaraunts.controller';
import { RestarauntsService } from './restaraunts.service';

describe('RestarauntsController', () => {
  let controller: RestarauntsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RestarauntsController],
      providers: [RestarauntsService],
    }).compile();

    controller = module.get<RestarauntsController>(RestarauntsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
