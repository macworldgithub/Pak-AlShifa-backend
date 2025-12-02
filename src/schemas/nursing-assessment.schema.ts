// src/nursing-assessments/schemas/nursing-assessment.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes, Types } from 'mongoose';

export type NursingAssessmentDocument = NursingAssessment & Document;

@Schema({ timestamps: true })
export class NursingAssessment {
  @Prop({ type: SchemaTypes.ObjectId, ref: 'Visit', required: true })
  visit: Types.ObjectId;

  @Prop()
  bps: number;

  @Prop()
  bpd: number;

  @Prop()
  grbs: number;

  @Prop()
  pulse: number;

  @Prop()
  respiration: number;

  @Prop()
  height: number;

  @Prop()
  weight: number;

  @Prop()
  bmi: number;

  @Prop()
  temperature: number;

  @Prop()
  remarks: string;

  @Prop({ type: SchemaTypes.ObjectId, ref: 'User' })
  createdBy: Types.ObjectId;
}

export const NursingAssessmentSchema =
  SchemaFactory.createForClass(NursingAssessment);

NursingAssessmentSchema.pre('save', function (next) {
  if (this.height && this.weight) {
    this.bmi = this.weight / (this.height / 100) ** 2;
  }
  next();
});
