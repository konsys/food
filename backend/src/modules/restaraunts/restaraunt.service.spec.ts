import { Test, TestingModule } from '@nestjs/testing';
import { RestarauntsService } from './restaraunt.service';

describe('RestarauntsService', () => {
  let service: RestarauntsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RestarauntsService],
    }).compile();

    service = module.get<RestarauntsService>(RestarauntsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
