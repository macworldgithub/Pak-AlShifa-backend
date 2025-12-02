// src/treatments/schemas/treatment.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes, Types } from 'mongoose';

export type TreatmentDocument = Treatment & Document;

@Schema({ timestamps: true })
export class Treatment {
  @Prop({ type: SchemaTypes.ObjectId, ref: 'Visit', required: true })
  visit: Types.ObjectId;

  @Prop()
  selectedFavorite: string;

  @Prop()
  investigationAndAdvice: string;

  @Prop()
  searchText: string;

  @Prop()
  someFreeText: string;

  @Prop()
  description: string;

  @Prop()
  quantity: number;

  @Prop({ default: false })
  cashService: boolean;

  @Prop({ type: SchemaTypes.ObjectId, ref: 'User' })
  createdBy: Types.ObjectId;
}

export const TreatmentSchema = SchemaFactory.createForClass(Treatment);
