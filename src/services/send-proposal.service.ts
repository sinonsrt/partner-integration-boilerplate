import { Injectable } from '@nestjs/common';
import { ProposalRepository } from 'src/DAO/proposal.repository';
import { SFTPProvider } from 'src/utils/providers/sftp/sftp-provider';

@Injectable()
export class SendProposalService {
  constructor(
    private proposalRepository: ProposalRepository,
    private SFTPProvider: SFTPProvider,
  ) {}

  async sendProposal(): Promise<void> {
    const proposals = await this.proposalRepository.listByPartner('METLIFE');

    await this.SFTPProvider.uploadFile('POZEVIRUS', 'É O POZE VIRUS');
  }
}
