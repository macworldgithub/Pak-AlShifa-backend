// src/medicines/schemas/medicine.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes, Types } from 'mongoose';

export type MedicineDocument = Medicine & Document;

@Schema({ timestamps: true })
export class Medicine {
  @Prop({ type: SchemaTypes.ObjectId, ref: 'Visit', required: true })
  visit: Types.ObjectId;

  @Prop()
  use: string;

  @Prop()
  selectFavorite: string;

  @Prop()
  medicineName: string;

  @Prop()
  medicineType: string;

  @Prop()
  frequency: string;

  @Prop()
  duration: number;

  @Prop()
  tradeName: string;

  @Prop()
  quantity: number;
}

export const MedicineSchema = SchemaFactory.createForClass(Medicine);
