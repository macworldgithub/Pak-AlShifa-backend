// src/treatments/treatments.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TreatmentDocument, Treatment } from 'src/schemas/treatment.schema';
import { CreateTreatmentDto } from './dto/create-treatment.dto';
import { UpdateTreatmentDto } from './dto/update-treatment.dto';

@Injectable()
export class TreatmentsService {
  constructor(
    @InjectModel(Treatment.name)
    private treatmentModel: Model<TreatmentDocument>,
  ) {}

  async create(
    createTreatmentDto: CreateTreatmentDto,
    userId: string,
  ): Promise<TreatmentDocument> {
    const treatment = new this.treatmentModel({
      ...createTreatmentDto,
      createdBy: userId,
    });
    return treatment.save();
  }

  async findByVisit(visitId: string): Promise<TreatmentDocument[]> {
    return this.treatmentModel.find({ visit: visitId }).exec();
  }

  async findOne(id: string): Promise<TreatmentDocument | null> {
    return this.treatmentModel.findById(id).exec();
  }

  async update(
    id: string,
    updateTreatmentDto: UpdateTreatmentDto,
  ): Promise<TreatmentDocument | null> {
    return this.treatmentModel
      .findByIdAndUpdate(id, updateTreatmentDto, { new: true })
      .exec();
  }

  async remove(id: string): Promise<TreatmentDocument | null> {
    return this.treatmentModel.findByIdAndDelete(id).exec();
  }
}
