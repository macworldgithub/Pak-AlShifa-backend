// src/discharges/dto/update-discharge.dto.ts
import { ApiProperty } from '@nestjs/swagger';

export class UpdateDischargeDto {
  @ApiProperty({ required: false })
  patientIn?: Date;

  @ApiProperty({ required: false })
  patientOut?: Date;

  @ApiProperty({ required: false })
  dischargeNotes?: string;
}
