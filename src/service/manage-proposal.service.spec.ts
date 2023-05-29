import { Test, TestingModule } from '@nestjs/testing';
import { ManageProposalService } from './manage-proposal.service';

describe('ManageProposalService', () => {
  let service: ManageProposalService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ManageProposalService],
    }).compile();

    service = module.get<ManageProposalService>(ManageProposalService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
