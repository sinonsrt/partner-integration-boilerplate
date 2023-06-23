import { writeFileSync, existsSync, mkdirSync } from 'fs';

export const createFile = (filename: string, content: string): string => {
  const folderPath = `${__dirname}/../../tmp`;
  const folderAlreadyExists = existsSync(folderPath);

  if (!folderAlreadyExists) {
    mkdirSync(folderPath);
  }

  const tmpFilePath = `${folderPath}/${filename}`;

  writeFileSync(tmpFilePath, content);

  return tmpFilePath;
};
