// src/vaccinations/schemas/vaccination.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes, Types } from 'mongoose';

export type VaccinationDocument = Vaccination & Document;

@Schema({ timestamps: true })
export class Vaccination {
  @Prop({ type: SchemaTypes.ObjectId, ref: 'Visit', required: true })
  visit: Types.ObjectId;

  @Prop()
  vaccinationName: string;

  @Prop()
  dose: string;

  @Prop()
  expiryDate: Date;

  @Prop()
  duration: string;

  @Prop()
  quantity: number;

  @Prop()
  unit: string;

  @Prop()
  description: string;

  @Prop()
  lotNumber: string;

  @Prop({ type: SchemaTypes.ObjectId, ref: 'User' })
  administeredBy: Types.ObjectId;
}

export const VaccinationSchema = SchemaFactory.createForClass(Vaccination);
