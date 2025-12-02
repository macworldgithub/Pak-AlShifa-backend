// src/diagnoses/schemas/diagnosis.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes, Types } from 'mongoose';

export type DiagnosisDocument = Diagnosis & Document;

@Schema({ timestamps: true })
export class Diagnosis {
  @Prop({ type: SchemaTypes.ObjectId, ref: 'Visit', required: true })
  visit: Types.ObjectId;

  @Prop()
  narrativeDiagnosis: string;

  @Prop()
  finalDiagnosis: string;

  @Prop()
  doctorNotes: string;

  @Prop({ type: SchemaTypes.ObjectId, ref: 'User' })
  createdBy: Types.ObjectId;
}

export const DiagnosisSchema = SchemaFactory.createForClass(Diagnosis);
