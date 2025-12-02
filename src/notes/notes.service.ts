// src/notes/notes.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { NoteDocument, Note } from 'src/schemas/note.schema';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';

@Injectable()
export class NotesService {
  constructor(@InjectModel(Note.name) private noteModel: Model<NoteDocument>) {}

  async create(
    createNoteDto: CreateNoteDto,
    userId: string,
  ): Promise<NoteDocument> {
    const note = new this.noteModel({
      ...createNoteDto,
      createdBy: userId,
    });
    return note.save();
  }

  async findByVisit(visitId: string): Promise<NoteDocument[]> {
    return this.noteModel.find({ visit: visitId }).exec();
  }

  async findOne(id: string): Promise<NoteDocument | null> {
    return this.noteModel.findById(id).exec();
  }

  async update(
    id: string,
    updateNoteDto: UpdateNoteDto,
  ): Promise<NoteDocument | null> {
    return this.noteModel
      .findByIdAndUpdate(id, updateNoteDto, { new: true })
      .exec();
  }

  async remove(id: string): Promise<NoteDocument | null> {
    return this.noteModel.findByIdAndDelete(id).exec();
  }
}
