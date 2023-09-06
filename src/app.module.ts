import { Module } from '@nestjs/common';
import { Pets } from '@gberdejo/demo-galicarlib';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PetsModule } from './pets/pets.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: async () => ({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'mysql',
        database: 'test',
        entities: [Pets],
        synchronize: true,
      }),
    }),
    PetsModule,
  ],
})
export class AppModule {}
