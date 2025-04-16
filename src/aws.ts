import { S3 } from "aws-sdk";
import fs from "fs";
import dotenv from "dotenv";

dotenv.config();
// Initialize dotenv to load environment variables from .env file
const s3 = new S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: 'us-east-1',
  s3ForcePathStyle: true
});

export const uploadFile = async (fileName: string, localFilePath: string) => {
  try {
    const fileContent = fs.readFileSync(localFilePath);
    const response = await s3.upload({
      Body: fileContent,
      Bucket: "devship",
      Key: fileName,
    }).promise();
    console.log(`File uploaded successfully: ${response.Location}`);
    return response.Location;
  } catch (error) {
    console.error("Error uploading file:", error);
    throw error;
  }
};
