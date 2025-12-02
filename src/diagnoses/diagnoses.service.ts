// src/diagnoses/diagnoses.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { DiagnosisDocument, Diagnosis } from 'src/schemas/diagnosis.schema';
import { CreateDiagnosisDto } from './dto/create-diagnosis.dto';
import { UpdateDiagnosisDto } from './dto/update-diagnosis.dto';

@Injectable()
export class DiagnosesService {
  constructor(
    @InjectModel(Diagnosis.name)
    private diagnosisModel: Model<DiagnosisDocument>,
  ) {}

  async create(
    createDiagnosisDto: CreateDiagnosisDto,
    userId: string,
  ): Promise<DiagnosisDocument> {
    const diagnosis = new this.diagnosisModel({
      ...createDiagnosisDto,
      createdBy: userId,
    });
    return diagnosis.save();
  }

  async findByVisit(visitId: string): Promise<DiagnosisDocument | null> {
    return this.diagnosisModel.findOne({ visit: visitId }).exec();
  }

  async update(
    id: string,
    updateDiagnosisDto: UpdateDiagnosisDto,
  ): Promise<DiagnosisDocument | null> {
    return this.diagnosisModel
      .findByIdAndUpdate(id, updateDiagnosisDto, { new: true })
      .exec();
  }

  async remove(id: string): Promise<DiagnosisDocument | null> {
    return this.diagnosisModel.findByIdAndDelete(id).exec();
  }
}
