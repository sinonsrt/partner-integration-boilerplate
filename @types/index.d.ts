declare namespace NodeJS {
  export interface ProcessEnv {
    DATABASE_USER: string;
    DATABASE_PASSWORD: string;
    DATABASE_HOST: string;
    DATABASE_NAME: string;
    DATABASE_PORT: number;
    SFTP_HOST: string;
    SFPT_PORT: number;
    SFPT_USERNAME: string;
    SFPT_PASSWORD: string;
  }
}
