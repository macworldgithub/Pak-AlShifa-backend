// src/masters/masters.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MasterDocument, Master } from 'src/schemas/master.schema';
import { CreateMasterDto } from './dto/create-master.dto';
import { UpdateMasterDto } from './dto/update-master.dto';

@Injectable()
export class MastersService {
  constructor(
    @InjectModel(Master.name) private masterModel: Model<MasterDocument>,
  ) {}

  async create(createMasterDto: CreateMasterDto): Promise<MasterDocument> {
    const master = new this.masterModel(createMasterDto);
    return master.save();
  }

  async findByType(type: string): Promise<MasterDocument[]> {
    return this.masterModel.find({ type }).exec();
  }

  async findOne(id: string): Promise<MasterDocument | null> {
    return this.masterModel.findById(id).exec();
  }

  async update(
    id: string,
    updateMasterDto: UpdateMasterDto,
  ): Promise<MasterDocument | null> {
    return this.masterModel
      .findByIdAndUpdate(id, updateMasterDto, { new: true })
      .exec();
  }

  async remove(id: string): Promise<MasterDocument | null> {
    return this.masterModel.findByIdAndDelete(id).exec();
  }
}
