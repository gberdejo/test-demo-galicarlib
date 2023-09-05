import { Controller, Get, Post, Inject } from '@nestjs/common';
import { AppService } from './app.service';
import { Cat, Dog } from '@gberdejo/demo-galicarlib/';

import { Repository } from 'sequelize-typescript';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    @Inject('CATS_REPOSITORY')
    private readonly catsRepository: Repository<Cat>,
    @Inject('DOGS_REPOSITORY')
    private readonly dogsRepository: Repository<Dog>,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/registerPets')
  async registerPets(): Promise<Dog[]> {
    await this.dogsRepository.create({});
    return await this.dogsRepository.findAll();
  }
}
