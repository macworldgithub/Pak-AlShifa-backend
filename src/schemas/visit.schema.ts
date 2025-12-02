// src/visits/schemas/visit.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes, Types } from 'mongoose';

export type VisitDocument = Visit & Document;

@Schema({ timestamps: true })
export class Visit {
  @Prop({ type: Date, default: Date.now })
  visitDate: Date;

  @Prop({ type: SchemaTypes.ObjectId, ref: 'Patient', required: true })
  patient: Types.ObjectId;

  @Prop({ type: SchemaTypes.ObjectId, ref: 'User', required: true })
  doctorAssigned: Types.ObjectId;

  @Prop()
  department: string;

  @Prop()
  tokenNumber: number;

  @Prop({
    enum: [
      'Waiting',
      'Under Assessment',
      'With Doctor',
      'In Treatment',
      'Completed',
      'Cancelled',
    ],
    default: 'Waiting',
  })
  visitStatus: string;

  @Prop()
  receptionNotes: string;

  @Prop({ default: 'No' })
  paymentRecorded: string;

  @Prop()
  consultationFee: number;

  @Prop({ enum: ['Cash', 'Card'] })
  paymentMethod: string;

  @Prop()
  discount: number;

  @Prop()
  totalPaidAmount: number;

  @Prop({ type: SchemaTypes.ObjectId, ref: 'User' })
  createdBy: Types.ObjectId;
}

export const VisitSchema = SchemaFactory.createForClass(Visit);
