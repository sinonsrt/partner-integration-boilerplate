import { Test, TestingModule } from '@nestjs/testing';
import { SendProposalService } from './send-proposal.service';

describe('SendProposalService', () => {
  let service: SendProposalService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SendProposalService],
    }).compile();

    service = module.get<SendProposalService>(SendProposalService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
