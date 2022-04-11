import { Module } from '@nestjs/common';
import { PurchasesController } from './purchases.controller';

@Module({
  controllers: [PurchasesController]
})
export class MessagingModule {}
