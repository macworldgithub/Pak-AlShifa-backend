// src/visits/dto/create-visit.dto.ts
import { ApiProperty } from '@nestjs/swagger';

export class CreateVisitDto {
  @ApiProperty()
  patient: string;

  @ApiProperty()
  doctorAssigned: string;

  @ApiProperty({ required: false })
  department?: string;

  @ApiProperty({ required: false })
  receptionNotes?: string;

  @ApiProperty({ required: false })
  consultationFee?: number;

  @ApiProperty({ required: false, enum: ['Cash', 'Card'] })
  paymentMethod?: string;

  @ApiProperty({ required: false })
  discount?: number;

  @ApiProperty({ required: false })
  totalPaidAmount?: number;
}
