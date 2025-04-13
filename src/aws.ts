import { S3 } from "aws-sdk";
import fs from "fs";

const s3 = new S3({
 accessKeyId:"AKIAT7JJVBEYO7D2DZPF",
 secretAccessKey:"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",
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
