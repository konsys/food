import { Test, TestingModule } from '@nestjs/testing';
import { CodeCheckController } from './code-check.controller';
import { CodeCheckService } from './code-check.service';

describe('CodeCheckController', () => {
  let controller: CodeCheckController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CodeCheckController],
      providers: [CodeCheckService],
    }).compile();

    controller = module.get<CodeCheckController>(CodeCheckController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
