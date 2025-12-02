// src/medical-assessments/dto/create-medical-assessment.dto.ts
import { ApiProperty } from '@nestjs/swagger';

export class CreateMedicalAssessmentDto {
  @ApiProperty()
  visit: string;

  @ApiProperty({ required: false })
  planAndCare?: string;

  @ApiProperty({ required: false })
  advicesAndGoals?: string;
}
