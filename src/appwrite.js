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
    console.log(response);
    console.log("also printing response.data");
    console.log(response.data);
    return response.data;
  }
}

export default AppwriteService;
