import { Injectable } from '@nestjs/common';
import { CreateDemoSequelizeDto } from './dto/create-demo-sequelize.dto';
import { Sequelize } from 'sequelize-typescript';
import { User } from '@gberdejo/demo-galicarlib';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class DemoSequelizeService {
  constructor(
    private sequelize: Sequelize,
    @InjectModel(User)
    private userModel: typeof User,
  ) {}

  async create(createDemoSequelizeDto: CreateDemoSequelizeDto) {
    const user = await this.userModel.create({ ...createDemoSequelizeDto });

    return user;
  }

  async findAll(): Promise<User[]> {
    const list = await this.sequelize.query('select * from users');
    return list as User[];
  }
}
