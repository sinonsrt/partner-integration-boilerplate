import { Test, TestingModule } from '@nestjs/testing';
import { ManageProposalController } from './manage-proposal.controller';

describe('ManageProposalController', () => {
  let controller: ManageProposalController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ManageProposalController],
    }).compile();

    controller = module.get<ManageProposalController>(ManageProposalController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
