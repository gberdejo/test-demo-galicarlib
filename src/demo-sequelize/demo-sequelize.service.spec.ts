import { Test, TestingModule } from '@nestjs/testing';
import { DemoSequelizeService } from './demo-sequelize.service';

describe('DemoSequelizeService', () => {
  let service: DemoSequelizeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DemoSequelizeService],
    }).compile();

    service = module.get<DemoSequelizeService>(DemoSequelizeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
