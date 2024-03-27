import { Client, Storage } from "node-appwrite";

class AppwriteService {
  constructor() {
    const client = new Client()
      .setEndpoint(process.env.APPWRITE_ENDPOINT)
      .setProject(process.env.APPWRITE_FUNCTION_PROJECT_ID)
      .setKey(process.env.APPWRITE_API_KEY);
    this.storage = new Storage(client);
  }

  /**
   * Downloads a file from an Appwrite storage bucket.
   *
   * @param {string} bucketId - The ID of the storage bucket to download file from.
   * @param {string} fileId - The ID of the file to download.
   * @returns {Promise<void>} A Promise that resolves when the file is downloaded.
   */
  async downloadFile(bucketId, fileId) {
    let response = await this.storage.getFileDownload(bucketId, fileId);
    console.log(`File downloaded successfully: ${fileId}`);
    const fs = require('fs');
    const path = require('path');
    const filePath = path.join(__dirname, 'downloads', fileId);
    console.log('File path: ', filePath);
    fs.writeFileSync(filePath, response);
    console.log(`File saved to: ${filePath}`);
  }
}

export default AppwriteService;
