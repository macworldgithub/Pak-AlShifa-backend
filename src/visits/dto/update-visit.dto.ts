// src/visits/dto/update-visit.dto.ts
import { ApiProperty } from '@nestjs/swagger';

export class UpdateVisitDto {
  @ApiProperty({
    required: false,
    enum: [
      'Waiting',
      'Under Assessment',
      'With Doctor',
      'In Treatment',
      'Completed',
      'Cancelled',
    ],
  })
  visitStatus?: string;

  @ApiProperty({ required: false })
  paymentRecorded?: string;

  @ApiProperty({ required: false })
  consultationFee?: number;

  @ApiProperty({ required: false, enum: ['Cash', 'Card'] })
  paymentMethod?: string;

  @ApiProperty({ required: false })
  discount?: number;

  @ApiProperty({ required: false })
  totalPaidAmount?: number;
}
