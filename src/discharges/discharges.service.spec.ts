import { Test, TestingModule } from '@nestjs/testing';
import { DischargesService } from './discharges.service';

describe('DischargesService', () => {
  let service: DischargesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DischargesService],
    }).compile();

    service = module.get<DischargesService>(DischargesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
