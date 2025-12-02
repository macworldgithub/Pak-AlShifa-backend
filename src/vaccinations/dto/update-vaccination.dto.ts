// src/vaccinations/dto/update-vaccination.dto.ts
import { ApiProperty } from '@nestjs/swagger';

export class UpdateVaccinationDto {
  @ApiProperty({ required: false })
  vaccinationName?: string;

  @ApiProperty({ required: false })
  dose?: string;

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
