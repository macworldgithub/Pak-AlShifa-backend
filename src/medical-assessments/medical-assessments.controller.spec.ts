import { Test, TestingModule } from '@nestjs/testing';
import { MedicalAssessmentsController } from './medical-assessments.controller';
import { MedicalAssessmentsService } from './medical-assessments.service';

describe('MedicalAssessmentsController', () => {
  let controller: MedicalAssessmentsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MedicalAssessmentsController],
      providers: [MedicalAssessmentsService],
    }).compile();

    controller = module.get<MedicalAssessmentsController>(MedicalAssessmentsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
