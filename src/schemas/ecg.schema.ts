// src/ecgs/schemas/ecg.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes, Types } from 'mongoose';

export type EcgDocument = Ecg & Document;

@Schema({ timestamps: true })
export class Ecg {
  @Prop({ type: SchemaTypes.ObjectId, ref: 'Visit', required: true })
  visit: Types.ObjectId;

  @Prop()
  position: string;

  @Prop()
  pWave: string;

  @Prop()
  standardization: string;

  @Prop()
  prInterval: string;

  @Prop()
  mechanism: string;

  @Prop()
  voltage: string;

  @Prop()
  qrsComplexes: string;

  @Prop()
  qtDuration: string;

  @Prop()
  electricalAxis: string;

  @Prop()
  stSegment: string;

  @Prop()
  auricularRate: string;

  @Prop()
  tWave: string;

  @Prop()
  ventricularRate: string;

  @Prop()
  rhythm: string;

  @Prop()
  additionalFindings: string;

  @Prop()
  qWave: string;
}

export const EcgSchema = SchemaFactory.createForClass(Ecg);
