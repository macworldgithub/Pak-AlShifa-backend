// src/medical-assessments/dto/update-medical-assessment.dto.ts
import { ApiProperty } from '@nestjs/swagger';

export class UpdateMedicalAssessmentDto {
  @ApiProperty({ required: false })
  planAndCare?: string;

  @ApiProperty({ required: false })
  advicesAndGoals?: string;
}
