// src/discharges/discharges.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { DischargeDocument, Discharge } from 'src/schemas/discharge.schema';
import { CreateDischargeDto } from './dto/create-discharge.dto';
import { UpdateDischargeDto } from './dto/update-discharge.dto';

@Injectable()
export class DischargesService {
  constructor(
    @InjectModel(Discharge.name)
    private dischargeModel: Model<DischargeDocument>,
  ) {}

  async create(
    createDischargeDto: CreateDischargeDto,
    userId: string,
  ): Promise<DischargeDocument> {
    const discharge = new this.dischargeModel({
      ...createDischargeDto,
      dischargedBy: userId,
    });
    return discharge.save();
  }

  async findByVisit(visitId: string): Promise<DischargeDocument | null> {
    return this.dischargeModel.findOne({ visit: visitId }).exec();
  }

  async update(
    id: string,
    updateDischargeDto: UpdateDischargeDto,
  ): Promise<DischargeDocument | null> {
    return this.dischargeModel
      .findByIdAndUpdate(id, updateDischargeDto, { new: true })
      .exec();
  }

  async remove(id: string): Promise<DischargeDocument | null> {
    return this.dischargeModel.findByIdAndDelete(id).exec();
  }
}
