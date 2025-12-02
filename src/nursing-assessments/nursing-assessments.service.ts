// src/nursing-assessments/nursing-assessments.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  NursingAssessmentDocument,
  NursingAssessment,
} from 'src/schemas/nursing-assessment.schema';
import { CreateNursingAssessmentDto } from './dto/create-nursing-assessment.dto';
import { UpdateNursingAssessmentDto } from './dto/update-nursing-assessment.dto';

@Injectable()
export class NursingAssessmentsService {
  constructor(
    @InjectModel(NursingAssessment.name)
    private nursingAssessmentModel: Model<NursingAssessmentDocument>,
  ) {}

  async create(
    createNursingAssessmentDto: CreateNursingAssessmentDto,
    userId: string,
  ): Promise<NursingAssessmentDocument> {
    const assessment = new this.nursingAssessmentModel({
      ...createNursingAssessmentDto,
      createdBy: userId,
    });
    return assessment.save();
  }

  async findByVisit(
    visitId: string,
  ): Promise<NursingAssessmentDocument | null> {
    return this.nursingAssessmentModel.findOne({ visit: visitId }).exec();
  }

  async update(
    id: string,
    updateNursingAssessmentDto: UpdateNursingAssessmentDto,
  ): Promise<NursingAssessmentDocument | null> {
    return this.nursingAssessmentModel
      .findByIdAndUpdate(id, updateNursingAssessmentDto, { new: true })
      .exec();
  }

  async remove(id: string): Promise<NursingAssessmentDocument | null> {
    return this.nursingAssessmentModel.findByIdAndDelete(id).exec();
  }
}
