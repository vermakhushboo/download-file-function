import AppwriteService from "./appwrite.js";
import { throwIfMissing } from "./util.js";

export default async ({ req, res, log, error }) => {
  throwIfMissing(process.env, [
    "APPWRITE_API_KEY",
    "APPWRITE_BUCKET_ID",
    "APPWRITE_FILE_ID",
  ]);

  const appwrite = new AppwriteService();

  const file = await appwrite.downloadPDFFile(
    process.env.APPWRITE_BUCKET_ID,
    process.env.APPWRITE_FILE_ID
  );

  return res.send(file, 200, { "Content-Type": "application/pdf" });
};
