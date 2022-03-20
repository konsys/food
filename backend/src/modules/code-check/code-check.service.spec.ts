import { Test, TestingModule } from '@nestjs/testing';
import { CodeCheckService } from './code-check.service';

describe('CodeCheckService', () => {
  let service: CodeCheckService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CodeCheckService],
    }).compile();

    service = module.get<CodeCheckService>(CodeCheckService);
  });

  it.skip('should be defined', () => {
    expect(service).toBeDefined();
  });
});
