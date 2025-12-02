// src/treatments/dto/create-treatment.dto.ts
import { ApiProperty } from '@nestjs/swagger';

export class CreateTreatmentDto {
  @ApiProperty()
  visit: string;

  @ApiProperty({ required: false })
  selectedFavorite?: string;

  @ApiProperty({ required: false })
  investigationAndAdvice?: string;

  @ApiProperty({ required: false })
  searchText?: string;

  @ApiProperty({ required: false })
  someFreeText?: string;

  @ApiProperty({ required: false })
  description?: string;

  @ApiProperty({ required: false })
  quantity?: number;

  @ApiProperty({ required: false })
  cashService?: boolean;
}
