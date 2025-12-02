import { Test, TestingModule } from '@nestjs/testing';
import { NursingAssessmentsService } from './nursing-assessments.service';

describe('NursingAssessmentsService', () => {
  let service: NursingAssessmentsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NursingAssessmentsService],
    }).compile();

    service = module.get<NursingAssessmentsService>(NursingAssessmentsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
