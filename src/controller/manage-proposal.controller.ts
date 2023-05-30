import { Body, Controller, Post } from '@nestjs/common';
import { ManageProposalRequest } from '../beans/manageProposal';
import { ManageProposalService } from '../service/manage-proposal.service';

@Controller('manageProposal')
export class ManageProposalController {
  constructor(private readonly manageProposalService: ManageProposalService) {}

  @Post()
  async manageProposal(@Body() request: ManageProposalRequest) {
    await this.manageProposalService.manageProposal(request);
  }
}
