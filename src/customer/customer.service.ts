import { Injectable } from '@nestjs/common';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { RegisterCustomerDto } from './dto/register-customer.dto';
import { Customer } from './models/customer.model';
import { InjectModel } from '@nestjs/sequelize';
import { JwtService } from '@nestjs/jwt';
import { MailService } from 'src/mail/mail.service';

export interface Tokens {
  access_token: string;
  refresh_token: string;
 }

@Injectable()
export class CustomerService {
  @InjectModel(Customer) private customerRepository: typeof Customer;
  private readonly jwtService: JwtService;
  private readonly mailService: MailService;

  create(registerCustomerDto: RegisterCustomerDto, res: Response) {

  }

  findAll() {
    return `This action returns all customer`;
  }

  findOne(id: number) {
    return `This action returns a #${id} customer`;
  }

  update(id: number, updateCustomerDto: UpdateCustomerDto) {
    return `This action updates a #${id} customer`;
  }

  remove(id: number) {
    return `This action removes a #${id} customer`;
  }
}
