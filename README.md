# ⬇️ Node.js Download PDF File Function

Download PDF File function to download a certain PDF file from Appwrite Storage.

## 🧰 Usage

### GET /

Download PDF file from Appwrite Storage

**Response**

Sample `200` Response: File downloaded

## ⚙️ Configuration

| Setting           | Value         |
| ----------------- | ------------- |
| Runtime           | Node (18.0)   |
| Entrypoint        | `src/main.js` |
| Build Commands    | `npm install` |
| Permissions       | `any`         |
| CRON              | `0 1 * * *`   |
| Timeout (Seconds) | 900           |

## 🔒 Environment Variables

### APPWRITE_FUNCTION_PROJECT_ID

The ID of the relevant Appwrite project.

| Question     | Answer         |
| ------------ | -------------- |
| Required     | Yes            |
| Sample Value | `652d...b4daf` |

### APPWRITE_BUCKET_ID

The ID of the bucket from which the file is to be downloaded.

| Question     | Answer         |
| ------------ | -------------- |
| Required     | Yes            |
| Sample Value | `652d...b4daf` |

### APPWRITE_FILE_ID

The ID of the PDF file to be downloaded.

| Question     | Answer         |
| ------------ | -------------- |
| Required     | Yes            |
| Sample Value | `652d...b4daf` |

### APPWRITE_API_KEY

API Key to talk to Appwrite backend APIs.

| Question      | Answer                                                                                             |
| ------------- | -------------------------------------------------------------------------------------------------- |
| Required      | Yes                                                                                                |
| Sample Value  | `d1efb...aec35`                                                                                    |
| Documentation | [Appwrite: Getting Started for Server](https://appwrite.io/docs/advanced/platform/api-keys) |

### APPWRITE_ENDPOINT

The URL endpoint of the Appwrite server. If not provided, it defaults to the Appwrite Cloud server: `https://cloud.appwrite.io/v1`.

| Question     | Answer                         |
| ------------ | ------------------------------ |
| Required     | No                             |
| Sample Value | `https://cloud.appwrite.io/v1` |
