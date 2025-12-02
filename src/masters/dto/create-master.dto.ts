// src/masters/dto/create-master.dto.ts
import { ApiProperty } from '@nestjs/swagger';

export class CreateMasterDto {
  @ApiProperty({
    enum: [
      'Vaccination',
      'Dose',
      'Unit',
      'Diagnosis',
      'MedicineType',
      'Frequency',
      'TradeName',
      'Template',
    ],
  })
  type: string;

  @ApiProperty()
  value: string;
}
