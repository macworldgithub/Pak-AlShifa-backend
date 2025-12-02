// src/visits/visits.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Visit, VisitSchema } from 'src/schemas/visit.schema';
import { VisitsService } from './visits.service';
import { VisitsController } from './visits.controller';
import { TokensModule } from '../tokens/tokens.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Visit.name, schema: VisitSchema }]),
    TokensModule,
  ],
  providers: [VisitsService],
  controllers: [VisitsController],
})
export class VisitsModule {}
