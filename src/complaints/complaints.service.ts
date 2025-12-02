// src/complaints/complaints.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ComplaintDocument, Complaint } from 'src/schemas/complaint.schema';
import { CreateComplaintDto } from './dto/create-complaint.dto';
import { UpdateComplaintDto } from './dto/update-complaint.dto';

@Injectable()
export class ComplaintsService {
  constructor(
    @InjectModel(Complaint.name)
    private complaintModel: Model<ComplaintDocument>,
  ) {}

  async create(
    createComplaintDto: CreateComplaintDto,
    userId: string,
  ): Promise<ComplaintDocument> {
    const complaint = new this.complaintModel({
      ...createComplaintDto,
      createdBy: userId,
    });
    return complaint.save();
  }

  async findByVisit(visitId: string): Promise<ComplaintDocument | null> {
    return this.complaintModel.findOne({ visit: visitId }).exec();
  }

  async update(
    id: string,
    updateComplaintDto: UpdateComplaintDto,
  ): Promise<ComplaintDocument | null> {
    return this.complaintModel
      .findByIdAndUpdate(id, updateComplaintDto, { new: true })
      .exec();
  }

  async remove(id: string): Promise<ComplaintDocument | null> {
    return this.complaintModel.findByIdAndDelete(id).exec();
  }
}
