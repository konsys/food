import { Test, TestingModule } from '@nestjs/testing';
import { MenuTypeGroupService } from './menu-type-group.service';

describe('MenuTypeGroupService', () => {
  let service: MenuTypeGroupService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MenuTypeGroupService],
    }).compile();

    service = module.get<MenuTypeGroupService>(MenuTypeGroupService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
