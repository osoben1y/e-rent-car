import { PartialType } from '@nestjs/swagger';
import { CreateCustomerDto } from './login-customer.dto';

export class UpdateCustomerDto extends PartialType(CreateCustomerDto) {}
