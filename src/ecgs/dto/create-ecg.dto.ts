// src/ecgs/dto/create-ecg.dto.ts
import { ApiProperty } from '@nestjs/swagger';

export class CreateEcgDto {
  @ApiProperty()
  visit: string;

  @ApiProperty({ required: false })
  position?: string;

  @ApiProperty({ required: false })
  pWave?: string;

  @ApiProperty({ required: false })
  standardization?: string;

  @ApiProperty({ required: false })
  prInterval?: string;

  @ApiProperty({ required: false })
  mechanism?: string;

  @ApiProperty({ required: false })
  voltage?: string;

  @ApiProperty({ required: false })
  qrsComplexes?: string;

  @ApiProperty({ required: false })
  qtDuration?: string;

  @ApiProperty({ required: false })
  electricalAxis?: string;

  @ApiProperty({ required: false })
  stSegment?: string;

  @ApiProperty({ required: false })
  auricularRate?: string;

  @ApiProperty({ required: false })
  tWave?: string;

  @ApiProperty({ required: false })
  ventricularRate?: string;

  @ApiProperty({ required: false })
  rhythm?: string;

  @ApiProperty({ required: false })
  additionalFindings?: string;

  @ApiProperty({ required: false })
  qWave?: string;
}
