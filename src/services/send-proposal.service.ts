import { Injectable } from '@nestjs/common';
import dayjs from 'dayjs';
import { writeFileSync, existsSync, mkdirSync } from 'fs';

import { ProposalRepository } from 'src/DAO/proposal.repository';
import { SFTPProvider } from 'src/utils/providers/sftp/sftp-provider';
import { ProposalEntity } from 'src/entities/ProposalEntity';

@Injectable()
export class SendProposalService {
  constructor(
    private proposalRepository: ProposalRepository,
    private SFTPProvider: SFTPProvider,
  ) {}

  async sendProposal(): Promise<void> {
    const filename = `${dayjs().format('YYYYMMDD-HHmmss')}_TESTE_SEMPARAR.txt`;

    const proposals = await this.proposalRepository.listByPartner('METLIFE');

    const content = this.buildFileContent(proposals);

    const filePath = await this.createFile(filename, content);

    const status = await this.SFTPProvider.uploadFile(filePath, filename);
    console.log({ status });
    // atualizar todos os registros que enviamos no banco
  }

  private async createFile(filename: string, content: string): Promise<string> {
    const folderPath = `${__dirname}/../../tmp`;
    const folderAlreadyExists = existsSync(folderPath);

    if (!folderAlreadyExists) {
      mkdirSync(folderPath);
    }

    const tmpFilePath = `${folderPath}/${filename}`;

    writeFileSync(tmpFilePath, content);

    return tmpFilePath;
  }

  private buildFileContent(proposals: ProposalEntity[]): string {
    const linhas = proposals.map((proposal) => {
      const preparedProposal = this.prepareData(proposal);

      const linha =
        preparedProposal.IDENTIFICADOR_SECAO +
        preparedProposal.PRODUTO +
        preparedProposal.PLANO +
        preparedProposal.CODIGO_OPERACAO +
        preparedProposal.DATAINICIOPLANO.padEnd(8, ' ') +
        preparedProposal.MEIO_PAGAMENTO +
        preparedProposal.DOCUMENT_NUMBER.padEnd(11, ' ') +
        preparedProposal.NOME.padEnd(60, ' ') +
        preparedProposal.SEXO.padEnd(1, ' ') +
        preparedProposal.DATA_NASCIMENTO.padEnd(8, ' ') +
        preparedProposal.ENDERECO.padEnd(100, ' ') +
        preparedProposal.NUMERO.padEnd(10, ' ') +
        preparedProposal.BAIRRO.padEnd(25, ' ') +
        preparedProposal.CIDADE.padEnd(25, ' ') +
        preparedProposal.ESTADO.padEnd(2, ' ') +
        preparedProposal.CEP.padEnd(8, ' ') +
        preparedProposal.DDD.padEnd(3, ' ') +
        preparedProposal.TELEFONE.padEnd(9, ' ') +
        preparedProposal.DDD.padEnd(3, ' ') +
        preparedProposal.TELEFONE.padEnd(9, ' ') +
        preparedProposal.DDD.padEnd(3, ' ') +
        preparedProposal.TELEFONE.padEnd(9, ' ') +
        preparedProposal.PREFERENCIA_TELEFONE.padEnd(1, ' ') +
        preparedProposal.ESTADO_CIVIL.padEnd(1, ' ') +
        preparedProposal.IMPORTANCIA_SEGURADA.padEnd(15, ' ') +
        preparedProposal.VALOR_PRODUTO.padEnd(15, ' ') +
        preparedProposal.PERIODICIDADE_PREMIO.padEnd(1, ' ') +
        preparedProposal.DATAPRIMEIROVENCIMENTO.padEnd(8, ' ') +
        preparedProposal.CANAL_VENDA.padEnd(3, ' ') +
        preparedProposal.CODIGO_CAMPANHA.padEnd(12, ' ') +
        preparedProposal.TAG.padEnd(15, ' ') +
        preparedProposal.TIPO_LOGRADOURO.padEnd(10, ' ') +
        preparedProposal.TIPO_LOGRADOURO.padEnd(10, ' ') +
        preparedProposal.FILLER.padEnd(884, ' ');

      return linha;
    });

    return linhas.join('\n');
  }

  private prepareData(proposal: ProposalEntity): ProposalEntity {
    return {
      ...proposal,
      IDENTIFICADOR_SECAO: '1',
      PRODUTO: '001',
      PLANO: '001',
      CODIGO_OPERACAO: '2',
      MEIO_PAGAMENTO: '00',
      PREFERENCIA_TELEFONE: '3',
      IMPORTANCIA_SEGURADA: '000000002000000',
      PERIODICIDADE_PREMIO: '1',
      CANAL_VENDA: '009',
      CODIGO_CAMPANHA: 'SEMPARAR0001',
      FLAG_DENTAL: 'N',
      FILLER: '',
      TIPO_LOGRADOURO: this.getAddressType(proposal.ENDERECO),
      DATAPRIMEIROVENCIMENTO: '',
      VALOR_PRODUTO: proposal.VALOR_PRODUTO.replace(',', ''),
    };
  }

  private getAddressType(ENDERECO: string) {
    const addressType = ENDERECO.split(',')[0];

    return addressType.length < 10 ? addressType : 'Rua';
  }
}
