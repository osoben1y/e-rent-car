import { Module } from '@nestjs/common';
import { AdminModule } from './admin/admin.module';
import { MailModule } from './mail/mail.module';
import { OtpModule } from './otp/otp.module';
import { CustomerModule } from './customer/customer.module';

@Module({
  imports: [AdminModule, MailModule, OtpModule, CustomerModule],
})
export class AppModule {}
