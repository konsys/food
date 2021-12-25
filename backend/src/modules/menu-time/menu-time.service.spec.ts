import { Test, TestingModule } from '@nestjs/testing';
import { MenuTimeService } from './menu-time.service';

describe('MenuTimeService', () => {
  let service: MenuTimeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MenuTimeService],
    }).compile();

    service = module.get<MenuTimeService>(MenuTimeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
