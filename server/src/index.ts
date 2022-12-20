import express from "express";
import dotenv from "dotenv";
import path from "path";
import cors from "cors";
import { Request, Response, Application } from "express";

const app: Application = express();
app.use(express.json());

dotenv.config({ path: path.resolve(__dirname, "./config/.env") });

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

// interface Comment {
//   commentBody: string;
//   commentID: string;
//   commentLink: string;
// }

const data = [
  {
    commentBody: "This is comment 1",
    commentID: "84739fjfjs",
    commentLink: "/987s9v8c",
  },
  {
    commentBody: "This is comment 2",
    commentID: "387ddmm",
    commentLink: "/12vnjfdh4",
  },
];

app.get("/", (req: Request, res: Response) => {
  res.send(data);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server is listening on port ${PORT}`));
