import AppwriteService from './appwrite.js';
import { throwIfMissing } from './util.js';

export default async ({ req, res, log, error }) => {
  throwIfMissing(process.env, [
    'APPWRITE_API_KEY',
    'APPWRITE_BUCKET_ID',
    'APPWRITE_FILE_ID,'
  ]);

  const appwrite = new AppwriteService();

  await appwrite.downloadFile(process.env.APPWRITE_BUCKET_ID, process.env.APPWRITE_FILE_ID);

  return res.send('File downloaded', 200);
};