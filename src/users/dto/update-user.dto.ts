// src/users/dto/update-user.dto.ts
import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto {
  @ApiProperty({ required: false })
  fullName?: string;

  @ApiProperty({ required: false })
  password?: string;

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
