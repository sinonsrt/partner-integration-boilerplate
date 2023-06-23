import dayjs from 'dayjs';

import { fieldMappingArray } from '../../config/fieldMappingArray';
import { ProposalEntity } from '../../entities/ProposalEntity';

export const buildFileContent = (proposals: ProposalEntity[]): string => {
  const lines = proposals.map((proposal) => {
    const preparedProposal = prepareData(proposal);

    return fieldMappingArray
      .map(({ name, size }) => preparedProposal[name].padEnd(size, ' '))
      .join('');
  });

  return lines.join('\n');
};

const prepareData = (proposal: ProposalEntity): ProposalEntity => {
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
    TIPO_LOGRADOURO: getAddressType(proposal.ENDERECO),
    DATAPRIMEIROVENCIMENTO: dayjs(proposal.DATAINICIOPLANO)
      .add(1, 'month')
      .format('YYYYMMDD-HHmmss'),
    VALOR_PRODUTO: proposal.VALOR_PRODUTO.replace(',', ''),
  };
};

const getAddressType = (ENDERECO: string) => {
  const addressType = ENDERECO.split(',')[0];

  return addressType.length < 10 ? addressType : 'Rua';
};
