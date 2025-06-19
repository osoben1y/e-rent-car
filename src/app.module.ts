import { Module } from '@nestjs/common';
import { AdminModule } from './admin/admin.module';
import { MailModule } from './mail/mail.module';
import { OtpModule } from './otp/otp.module';

@Module({
  imports: [AdminModule, MailModule, OtpModule],
})
export class AppModule {}
