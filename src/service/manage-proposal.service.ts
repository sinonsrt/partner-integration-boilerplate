import { Injectable } from '@nestjs/common';

@Injectable()
export class ManageProposalService {
  async manageProposal(data: any) {
    console.log(data);

    // TODO - Criar tabela no banco de dados
    // TODO - Salvar contratações no banco de dados
  }
}
