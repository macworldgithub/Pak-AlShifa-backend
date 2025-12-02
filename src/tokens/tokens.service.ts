// src/tokens/tokens.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TokenDocument, Token } from 'src/schemas/token.schema';
import { CreateTokenDto } from './dto/create-token.dto';

@Injectable()
export class TokensService {
  constructor(
    @InjectModel(Token.name) private tokenModel: Model<TokenDocument>,
  ) {}

  async create(createTokenDto: CreateTokenDto): Promise<TokenDocument> {
    const lastToken = await this.tokenModel.findOne().sort({ tokenNumber: -1 });
    const tokenNumber = lastToken ? lastToken.tokenNumber + 1 : 1;
    const token = new this.tokenModel({
      ...createTokenDto,
      tokenNumber,
    });
    return token.save();
  }

  async createForVisit(
    visitId: string,
    patientName: string,
    doctorName: string,
  ): Promise<TokenDocument> {
    return this.create({ visit: visitId, patientName, doctorName });
  }

  async callToken(visitId: string): Promise<TokenDocument | null> {
    const token = await this.tokenModel.findOne({ visit: visitId });
    if (token) {
      token.status = 'Called';
      return token.save();
    }
    return null;
  }

  async findByVisit(visitId: string): Promise<TokenDocument | null> {
    return this.tokenModel.findOne({ visit: visitId }).exec();
  }
}
