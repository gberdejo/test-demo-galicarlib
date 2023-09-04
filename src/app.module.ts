import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UtilsModule, UtilsService } from '@gberdejo/demo-galicarlib';
import { AppService } from './app.service';

@Module({
  imports: [UtilsModule],
  controllers: [AppController],
  providers: [AppService, UtilsService],
})
export class AppModule {}
