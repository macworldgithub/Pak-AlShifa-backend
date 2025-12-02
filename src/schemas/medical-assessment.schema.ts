// src/medical-assessments/schemas/medical-assessment.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes, Types } from 'mongoose';

export type MedicalAssessmentDocument = MedicalAssessment & Document;

@Schema({ timestamps: true })
export class MedicalAssessment {
  @Prop({ type: SchemaTypes.ObjectId, ref: 'Visit', required: true })
  visit: Types.ObjectId;

  @Prop()
  planAndCare: string;

  @Prop()
  advicesAndGoals: string;

  @Prop({ type: SchemaTypes.ObjectId, ref: 'User' })
  createdBy: Types.ObjectId;
}

export const MedicalAssessmentSchema =
  SchemaFactory.createForClass(MedicalAssessment);
