// src/payments/schemas/payment.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes, Types } from 'mongoose';

export type PaymentDocument = Payment & Document;

@Schema({ timestamps: true })
export class Payment {
  @Prop({ type: SchemaTypes.ObjectId, ref: 'Visit', required: true })
  visit: Types.ObjectId;

  @Prop()
  consultationFee: number;

  @Prop()
  additionalCharges: number;

  @Prop()
  discount: number;

  @Prop()
  totalAmount: number;

  @Prop()
  amountPaid: number;

  @Prop({ enum: ['Cash', 'Card'] })
  paymentMethod: string;

  @Prop({ type: Date, default: Date.now })
  paymentTime: Date;

  @Prop({ type: SchemaTypes.ObjectId, ref: 'User' })
  recordedBy: Types.ObjectId;
}

export const PaymentSchema = SchemaFactory.createForClass(Payment);
