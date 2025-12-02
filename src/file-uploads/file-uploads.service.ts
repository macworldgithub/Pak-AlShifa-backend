// src/file-uploads/file-uploads.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { FileUploadDocument, FileUpload } from 'src/schemas/file-upload.schema';

@Injectable()
export class FileUploadsService {
  constructor(
    @InjectModel(FileUpload.name)
    private fileUploadModel: Model<FileUploadDocument>,
  ) {}

  async create(
    createFileUploadDto: any,
    filePath: string,
    userId: string,
  ): Promise<FileUploadDocument> {
    const fileUpload = new this.fileUploadModel({
      visit: createFileUploadDto.visit,
      description: createFileUploadDto.description,
      filePath,
      uploadedBy: userId,
    });
    return fileUpload.save();
  }

  async findByVisit(visitId: string): Promise<FileUploadDocument[]> {
    return this.fileUploadModel.find({ visit: visitId }).exec();
  }

  async remove(id: string): Promise<FileUploadDocument | null> {
    return this.fileUploadModel.findByIdAndDelete(id).exec();
  }
}
