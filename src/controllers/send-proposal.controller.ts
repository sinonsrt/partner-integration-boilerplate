import { Controller, Get, BadRequestException } from '@nestjs/common';
import { SendProposalService } from 'src/services/send-proposal.service';

@Controller('send-proposal')
export class SendProposalController {
  constructor(private readonly sendProposalService: SendProposalService) {}

  @Get()
  async sendProposal() {
    try {
      await this.sendProposalService.sendProposal();
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
