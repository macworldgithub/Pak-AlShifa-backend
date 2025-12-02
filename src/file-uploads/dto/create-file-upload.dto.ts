// src/file-uploads/dto/create-file-upload.dto.ts
import { ApiProperty } from '@nestjs/swagger';

export class CreateFileUploadDto {
  @ApiProperty()
  visit: string;

  @ApiProperty({ required: false })
  description?: string;
}
