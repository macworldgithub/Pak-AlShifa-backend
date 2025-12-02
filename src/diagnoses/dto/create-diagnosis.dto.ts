// src/diagnoses/dto/create-diagnosis.dto.ts
import { ApiProperty } from '@nestjs/swagger';

export class CreateDiagnosisDto {
  @ApiProperty()
  visit: string;

  @ApiProperty({ required: false })
  narrativeDiagnosis?: string;

  @ApiProperty({ required: false })
  finalDiagnosis?: string;

  @ApiProperty({ required: false })
  doctorNotes?: string;
}
