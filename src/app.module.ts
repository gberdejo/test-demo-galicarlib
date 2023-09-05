import { Module } from '@nestjs/common';
import { User } from '@gberdejo/demo-galicarlib';
import { DemoSequelizeModule } from './demo-sequelize/demo-sequelize.module';
import { SequelizeModule } from '@nestjs/sequelize';
@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'mysql',
      database: 'test',
      models: [User],
      synchronize: true,
      autoLoadModels: true,
    }),
    DemoSequelizeModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
