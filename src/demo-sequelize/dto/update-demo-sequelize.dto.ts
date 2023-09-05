import { PartialType } from '@nestjs/mapped-types';
import { CreateDemoSequelizeDto } from './create-demo-sequelize.dto';

export class UpdateDemoSequelizeDto extends PartialType(CreateDemoSequelizeDto) {}
