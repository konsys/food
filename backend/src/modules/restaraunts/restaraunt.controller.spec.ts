import { Test, TestingModule } from '@nestjs/testing';
import { RestarauntsController } from './restaraunt.controller';
import { RestarauntsService } from './restaraunt.service';

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
