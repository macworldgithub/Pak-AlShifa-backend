import { Test, TestingModule } from '@nestjs/testing';
import { MedicalAssessmentsService } from './medical-assessments.service';

describe('MedicalAssessmentsService', () => {
  let service: MedicalAssessmentsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MedicalAssessmentsService],
    }).compile();

    service = module.get<MedicalAssessmentsService>(MedicalAssessmentsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
