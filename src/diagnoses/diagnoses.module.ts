// src/diagnoses/diagnoses.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Diagnosis, DiagnosisSchema } from 'src/schemas/diagnosis.schema';
import { DiagnosesService } from './diagnoses.service';
import { DiagnosesController } from './diagnoses.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Diagnosis.name, schema: DiagnosisSchema },
    ]),
  ],
  providers: [DiagnosesService],
  controllers: [DiagnosesController],
})
export class DiagnosesModule {}
