// src/masters/schemas/master.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type MasterDocument = Master & Document;

@Schema({ timestamps: true })
export class Master {
  @Prop({
    enum: [
      'Vaccination',
      'Dose',
      'Unit',
      'Diagnosis',
      'MedicineType',
      'Frequency',
      'TradeName',
      'Template',
    ],
  })
  type: string;

  @Prop({ required: true })
  value: string;
}

export const MasterSchema = SchemaFactory.createForClass(Master);
