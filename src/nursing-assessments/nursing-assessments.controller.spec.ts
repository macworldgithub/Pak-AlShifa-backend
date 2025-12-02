import { Test, TestingModule } from '@nestjs/testing';
import { NursingAssessmentsController } from './nursing-assessments.controller';
import { NursingAssessmentsService } from './nursing-assessments.service';

describe('NursingAssessmentsController', () => {
  let controller: NursingAssessmentsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NursingAssessmentsController],
      providers: [NursingAssessmentsService],
    }).compile();

    controller = module.get<NursingAssessmentsController>(NursingAssessmentsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
