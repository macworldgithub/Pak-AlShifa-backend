// src/tokens/dto/create-token.dto.ts
import { ApiProperty } from '@nestjs/swagger';

export class CreateTokenDto {
  @ApiProperty()
  visit: string;

  @ApiProperty()
  patientName: string;

  @ApiProperty()
  doctorName: string;
}
