// src/medicines/medicines.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MedicineDocument, Medicine } from 'src/schemas/medicine.schema';
import { CreateMedicineDto } from './dto/create-medicine.dto';
import { UpdateMedicineDto } from './dto/update-medicine.dto';

@Injectable()
export class MedicinesService {
  constructor(
    @InjectModel(Medicine.name) private medicineModel: Model<MedicineDocument>,
  ) {}

  async create(
    createMedicineDto: CreateMedicineDto,
  ): Promise<MedicineDocument> {
    const medicine = new this.medicineModel(createMedicineDto);
    return medicine.save();
  }

  async findByVisit(visitId: string): Promise<MedicineDocument[]> {
    return this.medicineModel.find({ visit: visitId }).exec();
  }

  async findOne(id: string): Promise<MedicineDocument | null> {
    return this.medicineModel.findById(id).exec();
  }

  async update(
    id: string,
    updateMedicineDto: UpdateMedicineDto,
  ): Promise<MedicineDocument | null> {
    return this.medicineModel
      .findByIdAndUpdate(id, updateMedicineDto, { new: true })
      .exec();
  }

  async remove(id: string): Promise<MedicineDocument | null> {
    return this.medicineModel.findByIdAndDelete(id).exec();
  }
}
