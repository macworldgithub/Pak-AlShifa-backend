// src/users/dto/create-user.dto.ts
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty()
  fullName: string;

  @ApiProperty()
  username: string;

  @ApiProperty()
  password: string;

  @ApiProperty({
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

  @ApiProperty({ required: false })
  mobileNumber?: string;

  @ApiProperty({ required: false })
  assignedDepartment?: string;

  @ApiProperty({ required: false })
  status?: string;

  // Doctor-specific
  @ApiProperty({ required: false })
  department?: string;

  @ApiProperty({ required: false })
  specialization?: string;

  @ApiProperty({ required: false })
  email?: string;

  @ApiProperty({ required: false })
  availabilityTimings?: string;

  @ApiProperty({ required: false })
  assignedRoom?: string;

  @ApiProperty({ required: false })
  maxDailyPatients?: number;

  // Receptionist-specific
  @ApiProperty({ required: false })
  assignedCounter?: string;
}
