// src/notes/dto/create-note.dto.ts
import { ApiProperty } from '@nestjs/swagger';

export class CreateNoteDto {
  @ApiProperty()
  visit: string;

  @ApiProperty({ required: false })
  template?: string;

  @ApiProperty({ required: false })
  noteContent?: string;
}
