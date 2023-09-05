import { Test, TestingModule } from '@nestjs/testing';
import { DemoSequelizeController } from './demo-sequelize.controller';
import { DemoSequelizeService } from './demo-sequelize.service';

describe('DemoSequelizeController', () => {
  let controller: DemoSequelizeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DemoSequelizeController],
      providers: [DemoSequelizeService],
    }).compile();

    controller = module.get<DemoSequelizeController>(DemoSequelizeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
