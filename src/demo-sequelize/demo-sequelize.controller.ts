import { Controller, Get, Post, Body } from '@nestjs/common';
import { DemoSequelizeService } from './demo-sequelize.service';
import { CreateDemoSequelizeDto } from './dto/create-demo-sequelize.dto';
import { User } from '@gberdejo/demo-galicarlib';

@Controller('demo-sequelize')
export class DemoSequelizeController {
  constructor(private readonly demoSequelizeService: DemoSequelizeService) {}

  @Post()
  create(@Body() createDemoSequelizeDto: CreateDemoSequelizeDto) {
    return this.demoSequelizeService.create(createDemoSequelizeDto);
  }

  @Get()
  findAll(): Promise<User[]> {
    return this.demoSequelizeService.findAll();
  }
}
