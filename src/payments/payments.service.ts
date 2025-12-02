// src/payments/payments.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PaymentDocument, Payment } from 'src/schemas/payment.schema';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';

@Injectable()
export class PaymentsService {
  constructor(
    @InjectModel(Payment.name) private paymentModel: Model<PaymentDocument>,
  ) {}

  async create(
    createPaymentDto: CreatePaymentDto,
    userId: string,
  ): Promise<PaymentDocument> {
    const payment = new this.paymentModel({
      ...createPaymentDto,
      recordedBy: userId,
    });
    return payment.save();
  }

  async findByVisit(visitId: string): Promise<PaymentDocument | null> {
    return this.paymentModel.findOne({ visit: visitId }).exec();
  }

  async update(
    id: string,
    updatePaymentDto: UpdatePaymentDto,
  ): Promise<PaymentDocument | null> {
    return this.paymentModel
      .findByIdAndUpdate(id, updatePaymentDto, { new: true })
      .exec();
  }

  async remove(id: string): Promise<PaymentDocument | null> {
    return this.paymentModel.findByIdAndDelete(id).exec();
  }
}
