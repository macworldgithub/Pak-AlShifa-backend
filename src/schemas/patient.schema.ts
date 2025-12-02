// src/patients/schemas/patient.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PatientDocument = Patient & Document;

@Schema({ timestamps: true })
export class Patient {
  @Prop({ unique: true })
  fileNo: string;

  @Prop({ required: true })
  name: string;

  @Prop()
  emiratesId: string;

  @Prop()
  nationality: string;

  @Prop()
  company: string;

  @Prop()
  corporateName: string;

  @Prop()
  mobileNo: string;

  @Prop()
  dob: Date;

  @Prop()
  email: string;

  @Prop()
  age: number;

  @Prop({ enum: ['Male', 'Female', 'Other'] })
  sex: string;

  @Prop()
  remark: string;
}

export const PatientSchema = SchemaFactory.createForClass(Patient);

PatientSchema.pre('save', function (next) {
  if (this.dob) {
    const ageDifMs = Date.now() - this.dob.getTime();
    const ageDate = new Date(ageDifMs);
    this.age = Math.abs(ageDate.getUTCFullYear() - 1970);
  }
  next();
});

PatientSchema.pre('save', function (next) {
  if (!this.fileNo) {
    this.fileNo = `FILE-${Date.now()}`;
  }
  next();
});
