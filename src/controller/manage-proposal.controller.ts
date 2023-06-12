import { Body, Controller, Logger, Post } from '@nestjs/common';
import { ManageProposalRequest } from '../beans/manageProposal';
import { ManageProposalService } from '../service/manage-proposal.service';

@Controller('manageProposal')
export class ManageProposalController {
  private readonly logger = new Logger(ManageProposalController.name);

  constructor(private readonly manageProposalService: ManageProposalService) {}

  @Post()
  async manageProposal(@Body() request: ManageProposalRequest) {
    try {
      this.logger.log('Received data:', request);
      await this.manageProposalService.manageProposal(request);
    } catch (error) {
      this.logger.error('Received error:', error);
    }
  }
}
