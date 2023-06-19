import { Test, TestingModule } from '@nestjs/testing';
import { SendProposalController } from './send-proposal.controller';

describe('SendProposalController', () => {
  let controller: SendProposalController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SendProposalController],
    }).compile();

    controller = module.get<SendProposalController>(SendProposalController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
