import { Body, Controller, Post } from '@nestjs/common';
import { ManageProposalRequest } from '../beans/manageProposal';

@Controller('manageProposal')
export class ManageProposalController {
  @Post()
  async manageProposal(@Body() request: ManageProposalRequest) {
    console.log(request);
  }
}
