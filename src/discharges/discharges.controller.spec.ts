import { Test, TestingModule } from '@nestjs/testing';
import { DischargesController } from './discharges.controller';
import { DischargesService } from './discharges.service';

describe('DischargesController', () => {
  let controller: DischargesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DischargesController],
      providers: [DischargesService],
    }).compile();

    controller = module.get<DischargesController>(DischargesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
