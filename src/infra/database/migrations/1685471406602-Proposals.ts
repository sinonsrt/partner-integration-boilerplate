import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Proposals1685471406602 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'PROPOSALS',
        columns: [
          {
            name: 'ID',
            type: 'int',
            isPrimary: true,
          },
          {
            name: 'PARTNER',
            type: 'varchar',
          },
          {
            name: 'TIPOREGISTRO',
            type: 'varchar',
          },
          {
            name: 'PA_CODE',
            type: 'varchar',
          },
          {
            name: 'DE_PARA_PLANO',
            type: 'varchar',
          },
          {
            name: 'COD_PLANO',
            type: 'varchar',
          },
          {
            name: 'DATAINICIOPLANO',
            type: 'varchar',
          },
          {
            name: 'INICIOSTATUS',
            type: 'varchar',
          },
          {
            name: 'NOME',
            type: 'varchar',
          },
          {
            name: 'DOCUMENT_NUMBER',
            type: 'varchar',
          },
          {
            name: 'ENDERECO',
            type: 'varchar',
          },
          {
            name: 'NUMERO',
            type: 'varchar',
          },
          {
            name: 'BAIRRO',
            type: 'varchar',
          },
          {
            name: 'CIDADE',
            type: 'varchar',
          },
          {
            name: 'ESTADO',
            type: 'varchar',
          },
          {
            name: 'CEP',
            type: 'varchar',
          },
          {
            name: 'PAIS',
            type: 'varchar',
          },
          {
            name: 'MARCA',
            type: 'varchar',
          },
          {
            name: 'MODELO',
            type: 'varchar',
          },
          {
            name: 'ANO_FABRICACAO',
            type: 'varchar',
          },
          {
            name: 'COMBUSTIVEL',
            type: 'varchar',
          },
          {
            name: 'PLACA',
            type: 'varchar',
          },
          {
            name: 'CREATED_AT',
            type: 'timestamp',
            default: 'CURRENT_DATE',
          },
          {
            name: 'UPDATED_AT',
            type: 'timestamp',
            default: 'CURRENT_DATE',
          },
          {
            name: 'DELETED_AT',
            type: 'timestamp',
            isNullable: true,
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('PROPOSALS');
  }
}
