// src/favorites/dto/update-favorite.dto.ts
import { ApiProperty } from '@nestjs/swagger';

export class UpdateFavoriteDto {
  @ApiProperty({ required: false })
  name?: string;

  @ApiProperty({ required: false })
  content?: string;
}
