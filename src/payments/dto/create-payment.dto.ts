// src/payments/dto/create-payment.dto.ts
import { ApiProperty } from '@nestjs/swagger';

export class CreatePaymentDto {
  @ApiProperty()
  visit: string;

  @ApiProperty({ required: false })
  consultationFee?: number;

  @ApiProperty({ required: false })
  additionalCharges?: number;

  @ApiProperty({ required: false })
  discount?: number;

  @ApiProperty({ required: false })
  totalAmount?: number;

  @ApiProperty({ required: false })
  amountPaid?: number;

  @ApiProperty({ required: false, enum: ['Cash', 'Card'] })
  paymentMethod?: string;
}
