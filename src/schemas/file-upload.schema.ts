// src/file-uploads/schemas/file-upload.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes, Types } from 'mongoose';

export type FileUploadDocument = FileUpload & Document;

@Schema({ timestamps: true })
export class FileUpload {
  @Prop({ type: SchemaTypes.ObjectId, ref: 'Visit', required: true })
  visit: Types.ObjectId;

  @Prop({ required: true })
  filePath: string;

  @Prop()
  description: string;

  @Prop({ type: SchemaTypes.ObjectId, ref: 'User' })
  uploadedBy: Types.ObjectId;
}

export const FileUploadSchema = SchemaFactory.createForClass(FileUpload);
