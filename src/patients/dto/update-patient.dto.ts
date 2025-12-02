// src/patients/dto/update-patient.dto.ts
import { ApiProperty } from '@nestjs/swagger';

export class UpdatePatientDto {
  @ApiProperty({ required: false })
  name?: string;

  @ApiProperty({ required: false })
  emiratesId?: string;

  @ApiProperty({ required: false })
  nationality?: string;

  @ApiProperty({ required: false })
  company?: string;

  @ApiProperty({ required: false })
  corporateName?: string;

  @ApiProperty({ required: false })
  mobileNo?: string;

  @ApiProperty({ required: false })
  dob?: Date;

  @ApiProperty({ required: false })
  email?: string;

  @ApiProperty({ required: false, enum: ['Male', 'Female', 'Other'] })
  sex?: string;

  @ApiProperty({ required: false })
  remark?: string;
}
