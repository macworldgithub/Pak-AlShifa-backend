// src/tokens/schemas/token.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes, Types } from 'mongoose';

export type TokenDocument = Token & Document;

@Schema({ timestamps: true })
export class Token {
  @Prop()
  tokenNumber: number;

  @Prop({ type: SchemaTypes.ObjectId, ref: 'Visit', required: true })
  visit: Types.ObjectId;

  @Prop()
  patientName: string;

  @Prop()
  doctorName: string;

  @Prop({ enum: ['Waiting', 'Called', 'Completed'], default: 'Waiting' })
  status: string;
}

export const TokenSchema = SchemaFactory.createForClass(Token);
