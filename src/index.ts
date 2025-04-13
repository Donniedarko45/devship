import express from "express"
import cors from "cors";
import { generate } from "./util";
import simpleGit from "simple-git";
import path from "path"

const app = express();
app.use(cors());
app.use(express.json());

app.post("/deploy", async (req, res) => {
  const repoUrl = req.body.repoUrl;
  console.log(repoUrl);
  const id = generate();
  await simpleGit().clone(repoUrl, path.join(__dirname, `output/${id}`));
  res.json({
    id: id
  })
});


app.listen(3000);
