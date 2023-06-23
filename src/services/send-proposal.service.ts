import { Injectable } from '@nestjs/common';
import dayjs from 'dayjs';

import { SFTPProvider } from '../utils/providers/sftp/sftp-provider';
import { ProposalRepository } from '../DAO/proposal.repository';
import { buildFileContent, createFile } from '../utils/fileHelpers';
import { StatusEnum } from '../utils/enums/StatusEnum';

@Injectable()
export class SendProposalService {
  constructor(
    private proposalRepository: ProposalRepository,
    private SFTPProvider: SFTPProvider,
  ) {}

  async sendProposal(): Promise<void> {
    const filename = `${dayjs().format('YYYYMMDD-HHmmss')}_${
      process.env.filename
    }.txt`;

    const proposals = await this.proposalRepository.listByPartner('METLIFE');

    const content = buildFileContent(proposals);
    const filePath = createFile(filename, content);

    const status = await this.SFTPProvider.uploadFile(filePath, filename);

    if (status === StatusEnum.success) {
    }
  }
}
