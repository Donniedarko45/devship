import express from "express"
import cors from "cors";
import { generate } from "./util";
import simpleGit from "simple-git";
import path from "path"
import { uploadFile } from "./aws";
import { getAllFiles } from "./file";
import { createClient } from "redis"
const publisher = createClient()
publisher.connect();


const app = express();
app.use(cors());
app.use(express.json());

app.post("/deploy", async (req, res) => {
  const repoUrl = req.body.repoUrl;
  console.log(repoUrl);
  const id = generate();
  await simpleGit().clone(repoUrl, path.join(__dirname, `output/${id}`));

  const files = getAllFiles(path.join(__dirname, `output/${id}`));

  files.forEach(async file => {
    await uploadFile(file.slice(__dirname.length + 1), file);
  })

  publisher.lPush("build-queue", id);

  res.json({
    id: id
  })
});


app.listen(3000);
