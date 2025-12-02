// src/nursing-assessments/dto/update-nursing-assessment.dto.ts
import { ApiProperty } from '@nestjs/swagger';

export class UpdateNursingAssessmentDto {
  @ApiProperty({ required: false })
  bps?: number;

  @ApiProperty({ required: false })
  bpd?: number;

  @ApiProperty({ required: false })
  grbs?: number;

  @ApiProperty({ required: false })
  pulse?: number;

  @ApiProperty({ required: false })
  respiration?: number;

  @ApiProperty({ required: false })
  height?: number;

  @ApiProperty({ required: false })
  weight?: number;

  @ApiProperty({ required: false })
  temperature?: number;

  @ApiProperty({ required: false })
  remarks?: string;
}
