// src/favorites/favorites.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { FavoriteDocument, Favorite } from 'src/schemas/favorite.schema';
import { CreateFavoriteDto } from './dto/create-favorite.dto';
import { UpdateFavoriteDto } from './dto/update-favorite.dto';

@Injectable()
export class FavoritesService {
  constructor(
    @InjectModel(Favorite.name) private favoriteModel: Model<FavoriteDocument>,
  ) {}

  async create(
    createFavoriteDto: CreateFavoriteDto,
  ): Promise<FavoriteDocument> {
    const favorite = new this.favoriteModel(createFavoriteDto);
    return favorite.save();
  }

  async findByDoctor(doctorId: string): Promise<FavoriteDocument[]> {
    return this.favoriteModel.find({ doctor: doctorId }).exec();
  }

  async findOne(id: string): Promise<FavoriteDocument | null> {
    return this.favoriteModel.findById(id).exec();
  }

  async update(
    id: string,
    updateFavoriteDto: UpdateFavoriteDto,
  ): Promise<FavoriteDocument | null> {
    return this.favoriteModel
      .findByIdAndUpdate(id, updateFavoriteDto, { new: true })
      .exec();
  }

  async remove(id: string): Promise<FavoriteDocument | null> {
    return this.favoriteModel.findByIdAndDelete(id).exec();
  }
}
