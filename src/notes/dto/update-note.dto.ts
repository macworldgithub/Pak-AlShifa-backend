// src/notes/dto/update-note.dto.ts
import { ApiProperty } from '@nestjs/swagger';

export class UpdateNoteDto {
  @ApiProperty({ required: false })
  template?: string;

  @ApiProperty({ required: false })
  noteContent?: string;
}
