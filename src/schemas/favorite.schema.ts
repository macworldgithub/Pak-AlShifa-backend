// src/favorites/schemas/favorite.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes, Types } from 'mongoose';

export type FavoriteDocument = Favorite & Document;

@Schema({ timestamps: true })
export class Favorite {
  @Prop({ type: SchemaTypes.ObjectId, ref: 'User' })
  doctor: Types.ObjectId;

  @Prop({ enum: ['Treatment', 'Medicine', 'Investigation'] })
  type: string;

  @Prop()
  name: string;

  @Prop()
  content: string;
}

export const FavoriteSchema = SchemaFactory.createForClass(Favorite);
