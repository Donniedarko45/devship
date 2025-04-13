import { S3 } from "aws-sdk";
import fs from "fs";

const s3 = new S3({
  accessKeyId: "AKIAT7JJVBEYO7D2DZPF",
  secretAccessKey: "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",
  endpoint: "https://devship.s3.us-east-1.amazonaws.com"
})

export const uploadFile = async (fileName: string, localFilePath: string) => {
  console.log("called");
  const fileContent = fs.readlinkSync(localFilePath);
  const response = await s3.upload({
    Body: fileContent,
    Bucket: "devship",
    Key: fileName,
  }).promise();
  console.log(response);
}

// access key : AKIAT7JJVBEYO7D2DZPF
// secret access key : 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
//
