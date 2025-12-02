// src/diagnoses/dto/update-diagnosis.dto.ts
import { ApiProperty } from '@nestjs/swagger';

export class UpdateDiagnosisDto {
  @ApiProperty({ required: false })
  narrativeDiagnosis?: string;

  @ApiProperty({ required: false })
  finalDiagnosis?: string;

  @ApiProperty({ required: false })
  doctorNotes?: string;
}
