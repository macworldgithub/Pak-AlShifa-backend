// src/vaccinations/dto/create-vaccination.dto.ts
import { ApiProperty } from '@nestjs/swagger';

export class CreateVaccinationDto {
  @ApiProperty()
  visit: string;

  @ApiProperty()
  vaccinationName: string;

  @ApiProperty()
  dose: string;

  @ApiProperty({ required: false })
  expiryDate?: Date;

  @ApiProperty({ required: false })
  duration?: string;

  @ApiProperty({ required: false })
  quantity?: number;

  @ApiProperty({ required: false })
  unit?: string;

  @ApiProperty({ required: false })
  description?: string;

  @ApiProperty({ required: false })
  lotNumber?: string;
}
