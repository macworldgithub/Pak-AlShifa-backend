// src/favorites/dto/create-favorite.dto.ts
import { ApiProperty } from '@nestjs/swagger';

export class CreateFavoriteDto {
  @ApiProperty({ required: false })
  doctor?: string;

  @ApiProperty({ enum: ['Treatment', 'Medicine', 'Investigation'] })
  type: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  content: string;
}
