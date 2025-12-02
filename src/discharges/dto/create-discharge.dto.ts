// src/discharges/dto/create-discharge.dto.ts
import { ApiProperty } from '@nestjs/swagger';

export class CreateDischargeDto {
  @ApiProperty()
  visit: string;

  @ApiProperty({ required: false })
  patientIn?: Date;

  @ApiProperty({ required: false })
  patientOut?: Date;

  @ApiProperty({ required: false })
  dischargeNotes?: string;
}
