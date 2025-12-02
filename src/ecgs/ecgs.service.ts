// src/ecgs/ecgs.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { EcgDocument, Ecg } from 'src/schemas/ecg.schema';
import { CreateEcgDto } from './dto/create-ecg.dto';
import { UpdateEcgDto } from './dto/update-ecg.dto';

@Injectable()
export class EcgsService {
  constructor(@InjectModel(Ecg.name) private ecgModel: Model<EcgDocument>) {}

  async create(createEcgDto: CreateEcgDto): Promise<EcgDocument> {
    const ecg = new this.ecgModel(createEcgDto);
    return ecg.save();
  }

  async findByVisit(visitId: string): Promise<EcgDocument | null> {
    return this.ecgModel.findOne({ visit: visitId }).exec();
  }

  async update(
    id: string,
    updateEcgDto: UpdateEcgDto,
  ): Promise<EcgDocument | null> {
    return this.ecgModel
      .findByIdAndUpdate(id, updateEcgDto, { new: true })
      .exec();
  }

  async remove(id: string): Promise<EcgDocument | null> {
    return this.ecgModel.findByIdAndDelete(id).exec();
  }
}
