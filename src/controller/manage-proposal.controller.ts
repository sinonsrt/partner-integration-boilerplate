import { Body, Controller, HttpCode, Logger, Post } from '@nestjs/common';
import { ManageProposalRequest } from '../beans/manageProposal';
import { ManageProposalService } from '../service/manage-proposal.service';
import {
  ApiBody,
  ApiConsumes,
  ApiOkResponse,
  ApiOperation,
} from '@nestjs/swagger';

@Controller('manageProposal')
export class ManageProposalController {
  private readonly logger = new Logger(ManageProposalController.name);

  constructor(private readonly manageProposalService: ManageProposalService) {}

  @Post()
  @HttpCode(201)
  @ApiBody({ type: ManageProposalRequest })
  @ApiOkResponse({ status: 201 })
  @ApiOperation({
    summary: 'Operação resposável por salvar contratações no banco de dados.',
  })
  @ApiConsumes('application/json')
  async manageProposal(@Body() request: ManageProposalRequest) {
    try {
      this.logger.log('Received data:', request);
      await this.manageProposalService.manageProposal(request);
    } catch (error) {
      this.logger.error('Received error:', error);
    }
  }
}
