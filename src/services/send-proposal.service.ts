import { Injectable } from '@nestjs/common';
import { writeFileSync, existsSync, mkdirSync } from 'fs';

import { ProposalRepository } from 'src/DAO/proposal.repository';
import { ProposalEntity } from 'src/entities/ProposalEntity';
import { SFTPProvider } from 'src/utils/providers/sftp/sftp-provider';

@Injectable()
export class SendProposalService {
  constructor(
    private proposalRepository: ProposalRepository,
    private SFTPProvider: SFTPProvider,
  ) {}

  async sendProposal(): Promise<void> {
    const filename = `${new Date().toISOString()}_TESTE_SEMPARAR`;

    const proposals = await this.proposalRepository.listByPartner('METLIFE');

    const content = this.buildContentFile(proposals);
    const filePath = await this.createFile(filename, content);

    await this.SFTPProvider.uploadFile(filePath, filename);
  }

  private async createFile(filename: string, content: string): Promise<string> {
    const folderPath = `${__dirname}/../../../tmp`;
    const tmpFilePath = `${folderPath}/${filename}.txt`;
    const folderAlreadyExists = existsSync(folderPath);

    if (!folderAlreadyExists) {
      mkdirSync(folderPath);
    }

    writeFileSync(tmpFilePath, content);

    return tmpFilePath;
  }

  private buildContentFile(proposals: ProposalEntity[]): string {
    /**
     * MAPEIA NOVAMENTES OS DADOS FORMATADOS E RETORNA - MONTANDO AS LINHAS DO ARQUIVO
     *
     * JUNTA AS LINHAS JOIN
     *
     * RETONA O CONTEUDO
     */

    // Montar as linhas do arquivo
    const linhas = proposals.map((registro) => {
      const linha = registro.NOME + registro.DOCUMENT_NUMBER + registro.CIDADE;

      return linha;
    });

    return linhas.join('\n');
  }
}

/**
 * {
    TIPOREGISTRO: 'A',
    PA_CODE: '1,13E+14',
    DE_PARA_PLANO: '1',
    COD_PLANO: '40720',
    DATAINICIOPLANO: '20230220',
    INICIOSTATUS: '0',
    NOME: 'FELIPE MEDEIROS DE CARVALHO DA SILVA',
    DOCUMENT_NUMBER: '13342471700',
    ENDERECO: 'RUA CONDESSA BARBOSA',
    NUMERO: '204',
    BAIRRO: 'CORREAS',
    CIDADE: 'PETROPOLIS',
    ESTADO: 'RJ',
    CEP: '25730040',
    PAIS: 'BR ',
    MARCA: 'VOLKSWAGEN',
    MODELO: 'UP!',
    ANO_FABRICACAO: '2016',
    COMBUSTIVEL: '0',
    PLACA: 'LSL7D97'
  }
 */
