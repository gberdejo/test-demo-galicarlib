import { Module } from '@nestjs/common';
import { DemoSequelizeService } from './demo-sequelize.service';
import { DemoSequelizeController } from './demo-sequelize.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from '@gberdejo/demo-galicarlib';

@Module({
  imports: [SequelizeModule.forFeature([User])],
  controllers: [DemoSequelizeController],
  providers: [DemoSequelizeService],
})
export class DemoSequelizeModule {}
