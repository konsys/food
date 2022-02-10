import { Test, TestingModule } from '@nestjs/testing';
import { RestarauntService } from './restaraunt.service';

describe('RestarauntsService', () => {
  let service: RestarauntService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RestarauntService],
    }).compile();

    service = module.get<RestarauntService>(RestarauntService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
