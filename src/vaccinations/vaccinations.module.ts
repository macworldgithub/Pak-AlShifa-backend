// src/vaccinations/vaccinations.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Vaccination, VaccinationSchema } from 'src/schemas/vaccination.schema';
import { VaccinationsService } from './vaccinations.service';
import { VaccinationsController } from './vaccinations.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Vaccination.name, schema: VaccinationSchema },
    ]),
  ],
  providers: [VaccinationsService],
  controllers: [VaccinationsController],
})
export class VaccinationsModule {}
