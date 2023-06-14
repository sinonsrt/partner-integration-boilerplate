import { Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { ProposalRepository } from 'src/DAO/proposal.repository';

@Injectable()
export class SendProposalService {
  constructor(private proposalRepository: ProposalRepository) {}

  @Cron('*/1 * * * * *')
  async sendProposal(): Promise<void> {
    const proposals = await this.proposalRepository.listByPartner('METLIFE');
    console.log('PROPOSALS -> ', proposals);
  }
}
