import { StatusEnum } from 'src/utils/enums/StatusEnum';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'proposal',
})
export class ProposalEntity {
  constructor(entity: ProposalEntity) {
    Object.assign(this, entity);
  }

  @PrimaryGeneratedColumn()
  ID?: number;

  @Column()
  PARCEIRO: string;

  @Column()
  TIPOREGISTRO: string;

  @Column()
  PA_CODE: string;

  @Column()
  DE_PARA_PLANO: string;

  @Column()
  COD_PLANO: string;

  @Column()
  DATAINICIOPLANO: string;

  @Column()
  INICIOSTATUS: string;

  @Column()
  NOME: string;

  @Column()
  DOCUMENT_NUMBER: string;

  @Column()
  ENDERECO: string;

  @Column()
  NUMERO: string;

  @Column()
  BAIRRO: string;

  @Column()
  CIDADE: string;

  @Column()
  ESTADO: string;

  @Column()
  CEP: string;

  @Column()
  PAIS: string;

  @Column()
  MARCA: string;

  @Column()
  MODELO: string;

  @Column()
  ANO_FABRICACAO: string;

  @Column()
  COMBUSTIVEL: string;

  @Column()
  PLACA: string;

  @Column()
  INTEGRADO: StatusEnum;

  @Column()
  SEXO: string;

  @Column()
  DATA_NASCIMENTO: string;

  @Column()
  TELEFONE: string;

  @Column()
  DDD: string;

  @Column()
  ESTADO_CIVIL: string;

  @Column()
  VALOR_PRODUTO: string;

  @Column()
  TAG: string;

  @Column()
  IDENTIFICADOR_SECAO?: string;

  @Column()
  PRODUTO?: string;

  @Column()
  PLANO?: string;

  @Column()
  CODIGO_OPERACAO?: string;

  @Column()
  MEIO_PAGAMENTO?: string;

  @Column()
  PREFERENCIA_TELEFONE?: string;

  @Column()
  IMPORTANCIA_SEGURADA?: string;

  @Column()
  PERIODICIDADE_PREMIO?: string;

  @Column()
  CANAL_VENDA?: string;

  @Column()
  CODIGO_CAMPANHA?: string;

  @Column()
  FLAG_DENTAL?: string;

  @Column()
  FILLER?: string;

  @Column()
  TIPO_LOGRADOURO?: string;

  @Column()
  DATAPRIMEIROVENCIMENTO?: string;
}
