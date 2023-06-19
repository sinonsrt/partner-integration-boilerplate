import { Injectable } from '@nestjs/common';
import {
  writeFileSync,
  existsSync,
  createReadStream,
  unlinkSync,
  mkdirSync,
} from 'fs';
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

  async uploadFile(filename: string, content: any): Promise<any> {
    if (!this.connection) await this.connect();

    const folderPath = `${__dirname}/../../../tmp`;
    const tmpFilePath = `${folderPath}/${filename}.txt`;
    const folderAlreadyExists = existsSync(folderPath);

    if (!folderAlreadyExists) {
      mkdirSync(folderPath);
    }

    writeFileSync(tmpFilePath, content);

    const tmpFileExists = existsSync(tmpFilePath);

    if (tmpFileExists) {
      await this.connection
        .then(async () => {
          console.log('SFTP conectado com sucesso!');

          await this.sftp.put(
            createReadStream(tmpFilePath),
            `./upload/${filename}.txt`,
          );

          unlinkSync(tmpFilePath);

          return this.sftp.end();
        })
        .catch((error: any) => {
          console.log(
            'Oopss não foi possível criar o arquivo. - ',
            error.message,
          );

          unlinkSync(tmpFilePath);
        });
    }
  }
}
