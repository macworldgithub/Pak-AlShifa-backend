// src/discharges/schemas/discharge.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes, Types } from 'mongoose';

export type DischargeDocument = Discharge & Document;

@Schema({ timestamps: true })
export class Discharge {
  @Prop({ type: SchemaTypes.ObjectId, ref: 'Visit', required: true })
  visit: Types.ObjectId;

  @Prop()
  patientIn: Date;

  @Prop()
  patientOut: Date;

  @Prop()
  dischargeNotes: string;

  @Prop({ type: SchemaTypes.ObjectId, ref: 'User' })
  dischargedBy: Types.ObjectId;
}

export const DischargeSchema = SchemaFactory.createForClass(Discharge);
