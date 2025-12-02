// src/masters/dto/update-master.dto.ts
import { ApiProperty } from '@nestjs/swagger';

export class UpdateMasterDto {
  @ApiProperty({ required: false })
  value?: string;
}
