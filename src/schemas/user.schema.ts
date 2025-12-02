// src/users/schemas/user.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema({ timestamps: true })
export class User {
  @Prop({ required: true })
  fullName: string;

  @Prop({ required: true, unique: true })
  username: string;

  @Prop({ required: true })
  password: string;

  @Prop({
    enum: [
      'Admin',
      'Receptionist',
      'Nurse',
      'Doctor',
      'Pharmacist',
      'Lab Technician',
      'Accountant',
    ],
  })
  role: string;

  @Prop()
  mobileNumber: string;

  @Prop()
  assignedDepartment: string;

  @Prop({ default: 'Active' })
  status: string;

  // Doctor-specific fields
  @Prop()
  department: string;

  @Prop()
  specialization: string;

  @Prop()
  email: string;

  @Prop()
  availabilityTimings: string;

  @Prop()
  assignedRoom: string;

  @Prop()
  maxDailyPatients: number;

  // Receptionist-specific
  @Prop()
  assignedCounter: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
