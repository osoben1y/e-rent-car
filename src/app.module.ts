import { Module } from '@nestjs/common';
import { AdminModule } from './admin/admin.module';
import { MailModule } from './mail/mail.module';

@Module({
  imports: [AdminModule, MailModule],
})
export class AppModule {}
