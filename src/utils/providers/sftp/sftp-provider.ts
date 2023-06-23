import { Injectable } from '@nestjs/common';
import { existsSync, createReadStream, unlinkSync } from 'fs';
import { StatusEnum } from 'src/utils/enums/StatusEnum';
import ssh2 from 'ssh2';
import ClientType from 'ssh2-sftp-client';

const Client = require('ssh2-sftp-client');

@Injectable()
export class SFTPProvider {
  private connection: Promise<ssh2.SFTPWrapper>;
  private sftp: ClientType;

  constructor() {
    this.sftp = new Client();
  }

  async connect(): Promise<void> {
    this.connection = this.sftp.connect({
      host: process.env.SFTP_HOST,
      port: process.env.SFPT_PORT,
      username: process.env.SFPT_USERNAME,
      password: process.env.SFPT_PASSWORD,
    });
  }

  async uploadFile(filePath: string, filename: string): Promise<any> {
    if (!this.connection) await this.connect();

    const tmpFileExists = existsSync(filePath);

    if (tmpFileExists) {
      return this.connection
        .then(async () => {
          console.log('SFTP conectado com sucesso!');

          await this.sftp.put(
            createReadStream(filePath),
            `./upload/${filename}`,
          );

          unlinkSync(filePath);

          await this.sftp.end();

          return StatusEnum.success;
        })
        .catch((error: any) => {
          console.log(
            'Oopss não foi possível criar o arquivo. - ',
            error.message,
          );

          unlinkSync(filePath);
          return StatusEnum.notIntegrated;
        });
    }
  }
}
