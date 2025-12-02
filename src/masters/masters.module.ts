// src/masters/masters.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Master, MasterSchema } from 'src/schemas/master.schema';
import { MastersService } from './masters.service';
import { MastersController } from './masters.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Master.name, schema: MasterSchema }]),
  ],
  providers: [MastersService],
  controllers: [MastersController],
})
export class MastersModule {}
