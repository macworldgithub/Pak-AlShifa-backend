// src/medicines/dto/update-medicine.dto.ts
import { ApiProperty } from '@nestjs/swagger';

export class UpdateMedicineDto {
  @ApiProperty({ required: false })
  use?: string;

  @ApiProperty({ required: false })
  selectFavorite?: string;

  @ApiProperty({ required: false })
  medicineName?: string;

  @ApiProperty({ required: false })
  medicineType?: string;

  @ApiProperty({ required: false })
  frequency?: string;

  @ApiProperty({ required: false })
  duration?: number;

  @ApiProperty({ required: false })
  tradeName?: string;

  @ApiProperty({ required: false })
  quantity?: number;
}
