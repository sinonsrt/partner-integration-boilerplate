import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Proposal {
  @PrimaryGeneratedColumn()
  ID: number;

  @Column()
  PARTNER: string;

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
}