// src/medical-assessments/medical-assessments.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  MedicalAssessmentDocument,
  MedicalAssessment,
} from 'src/schemas/medical-assessment.schema';
import { CreateMedicalAssessmentDto } from './dto/create-medical-assessment.dto';
import { UpdateMedicalAssessmentDto } from './dto/update-medical-assessment.dto';

@Injectable()
export class MedicalAssessmentsService {
  constructor(
    @InjectModel(MedicalAssessment.name)
    private medicalAssessmentModel: Model<MedicalAssessmentDocument>,
  ) {}

  async create(
    createMedicalAssessmentDto: CreateMedicalAssessmentDto,
    userId: string,
  ): Promise<MedicalAssessmentDocument> {
    const assessment = new this.medicalAssessmentModel({
      ...createMedicalAssessmentDto,
      createdBy: userId,
    });
    return assessment.save();
  }

  async findByVisit(
    visitId: string,
  ): Promise<MedicalAssessmentDocument | null> {
    return this.medicalAssessmentModel.findOne({ visit: visitId }).exec();
  }

  async update(
    id: string,
    updateMedicalAssessmentDto: UpdateMedicalAssessmentDto,
  ): Promise<MedicalAssessmentDocument | null> {
    return this.medicalAssessmentModel
      .findByIdAndUpdate(id, updateMedicalAssessmentDto, { new: true })
      .exec();
  }

  async remove(id: string): Promise<MedicalAssessmentDocument | null> {
    return this.medicalAssessmentModel.findByIdAndDelete(id).exec();
  }
}
