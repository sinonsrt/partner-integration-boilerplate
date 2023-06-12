import { Injectable, Logger } from '@nestjs/common';
import { ProposalRepository } from 'src/DAO/proposal.repository';
import { ProposalEntity } from 'src/entities/ProposalEntity';

@Injectable()
export class ManageProposalService {
  private readonly logger = new Logger(ManageProposalService.name);
  constructor(private proposalRepository: ProposalRepository) {}

  async manageProposal(proposal: ProposalEntity): Promise<void> {
    await this.proposalRepository.create(proposal);

    this.logger.log('Successfully inserted!');
  }
}
