// src/ecgs/ecgs.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Ecg, EcgSchema } from 'src/schemas/ecg.schema';
import { EcgsService } from './ecgs.service';
import { EcgsController } from './ecgs.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name: Ecg.name, schema: EcgSchema }])],
  providers: [EcgsService],
  controllers: [EcgsController],
})
export class EcgsModule {}
