// src/complaints/dto/update-complaint.dto.ts
import { ApiProperty } from '@nestjs/swagger';

export class UpdateComplaintDto {
  @ApiProperty({ required: false })
  complaints?: string;

  @ApiProperty({ required: false })
  symptomsAndSigns?: string;

  @ApiProperty({ required: false })
  surgicalHistory?: string;

  @ApiProperty({ required: false })
  historyOfPastIllness?: string;

  @ApiProperty({ required: false })
  historyOfPresentIllness?: string;

  @ApiProperty({ required: false })
  progressNotes?: string;
}
