// src/complaints/schemas/complaint.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes, Types } from 'mongoose';

export type ComplaintDocument = Complaint & Document;

@Schema({ timestamps: true })
export class Complaint {
  @Prop({ type: SchemaTypes.ObjectId, ref: 'Visit', required: true })
  visit: Types.ObjectId;

  @Prop()
  complaints: string;

  @Prop()
  symptomsAndSigns: string;

  @Prop()
  surgicalHistory: string;

  @Prop()
  historyOfPastIllness: string;

  @Prop()
  historyOfPresentIllness: string;

  @Prop()
  progressNotes: string;

  @Prop({ type: SchemaTypes.ObjectId, ref: 'User' })
  createdBy: Types.ObjectId;
}

export const ComplaintSchema = SchemaFactory.createForClass(Complaint);
