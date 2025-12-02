// src/vaccinations/vaccinations.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  VaccinationDocument,
  Vaccination,
} from 'src/schemas/vaccination.schema';
import { CreateVaccinationDto } from './dto/create-vaccination.dto';
import { UpdateVaccinationDto } from './dto/update-vaccination.dto';

@Injectable()
export class VaccinationsService {
  constructor(
    @InjectModel(Vaccination.name)
    private vaccinationModel: Model<VaccinationDocument>,
  ) {}

  async create(
    createVaccinationDto: CreateVaccinationDto,
    userId: string,
  ): Promise<VaccinationDocument> {
    const vaccination = new this.vaccinationModel({
      ...createVaccinationDto,
      administeredBy: userId,
    });
    return vaccination.save();
  }

  async findByVisit(visitId: string): Promise<VaccinationDocument[]> {
    return this.vaccinationModel.find({ visit: visitId }).exec();
  }

  async findOne(id: string): Promise<VaccinationDocument | null> {
    return this.vaccinationModel.findById(id).exec();
  }

  async update(
    id: string,
    updateVaccinationDto: UpdateVaccinationDto,
  ): Promise<VaccinationDocument | null> {
    return this.vaccinationModel
      .findByIdAndUpdate(id, updateVaccinationDto, { new: true })
      .exec();
  }

  async remove(id: string): Promise<VaccinationDocument | null> {
    return this.vaccinationModel.findByIdAndDelete(id).exec();
  }
}
