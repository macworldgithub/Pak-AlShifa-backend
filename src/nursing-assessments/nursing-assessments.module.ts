// src/nursing-assessments/nursing-assessments.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {
  NursingAssessment,
  NursingAssessmentSchema,
} from 'src/schemas/nursing-assessment.schema';
import { NursingAssessmentsService } from './nursing-assessments.service';
import { NursingAssessmentsController } from './nursing-assessments.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: NursingAssessment.name, schema: NursingAssessmentSchema },
    ]),
  ],
  providers: [NursingAssessmentsService],
  controllers: [NursingAssessmentsController],
})
export class NursingAssessmentsModule {}
