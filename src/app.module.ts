import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import {
  UtilsModule,
  UtilsService,
  databaseModels,
  catsProviders,
} from '@gberdejo/demo-galicarlib';
import { AppService } from './app.service';
import { Sequelize } from 'sequelize-typescript';

@Module({
  imports: [UtilsModule],
  controllers: [AppController],
  providers: [
    ...catsProviders,
    {
      provide: 'DATABASE_CONNECTION',
      useFactory: async () => {
        const sequelize = new Sequelize({
          dialect: 'mysql',
          host: 'localhost',
          port: 3306,
          username: 'root',
          password: 'mysql',
          database: 'test',
        });
        sequelize.addModels(databaseModels);
        await sequelize.sync();
        return sequelize;
      },
    },
    AppService,
    UtilsService,
  ],
})
export class AppModule {}
