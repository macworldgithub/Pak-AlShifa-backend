// src/discharges/discharges.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Discharge, DischargeSchema } from 'src/schemas/discharge.schema';
import { DischargesService } from './discharges.service';
import { DischargesController } from './discharges.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Discharge.name, schema: DischargeSchema },
    ]),
  ],
  providers: [DischargesService],
  controllers: [DischargesController],
})
export class DischargesModule {}
