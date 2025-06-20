import { BadRequestException, Injectable } from '@nestjs/common';
import { EmailCustomerDto } from './dto/email-customer.dto';
import * as otpGenerator from 'otp-generator';
import { InjectModel } from '@nestjs/sequelize';
import { Otp } from './models/otp.model';
import { AddMinutesToDate } from 'src/helpers/addMinutes';
import { Op } from 'sequelize';
import { dates, decode, encode } from 'src/helpers/crypto';
import { VerifyOtpDto } from './dto/verifyOtp.dto';
import { Customer } from 'src/customer/models/customer.model';

@Injectable()
export class OtpService {
  constructor(
    @InjectModel(Otp) private otpRepository: typeof Otp,
    @InjectModel(Customer) private customerRepository: typeof Customer
  ) {}

  async create(createOtpDto: CreateOtpDto) {
    return 'This action adds a new otp';
  }

  findAll() {
    return `This action returns all otp`;
  }

  findOne(id: number) {
    return `This action returns a #${id} otp`;
  }

  update(id: number, updateOtpDto: UpdateOtpDto) {
    return `This action updates a #${id} otp`;
  }

  remove(id: number) {
    return `This action removes a #${id} otp`;
  }
}
