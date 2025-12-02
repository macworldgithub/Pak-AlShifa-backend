// src/medical-assessments/medical-assessments.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {
  MedicalAssessment,
  MedicalAssessmentSchema,
} from 'src/schemas/medical-assessment.schema';
import { MedicalAssessmentsService } from './medical-assessments.service';
import { MedicalAssessmentsController } from './medical-assessments.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: MedicalAssessment.name, schema: MedicalAssessmentSchema },
    ]),
  ],
  providers: [MedicalAssessmentsService],
  controllers: [MedicalAssessmentsController],
})
export class MedicalAssessmentsModule {}
