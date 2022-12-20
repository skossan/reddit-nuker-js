import dotenv from "dotenv";
dotenv.config({
  path: "src/.env",
});
import express, { response } from "express";
import path from "path";
import cors from "cors";
import { Request, Response, Application } from "express";
import Snoowrap from "snoowrap";

const app: Application = express();
app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

//
// Global Variables
//
let comments: any = [];

const r = new Snoowrap({
  userAgent: "Reddit-Nuker-JS-1.0",
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.SECRET,
  refreshToken: process.env.REFRESH_TOKEN,
});

//
// ENDPOINTS
//

app.get("/", (req: Request, res: Response) => {
  res.send("It works");
});

app.post("/getComments", (req: Request, res: Response) => {
  const data = req.body;
  const username = data.userData.username[0];
  const password = data.userData.password[0];
  if (username && password) {
    r.getUser(username)
      .getComments()
      .then((response) => {
        if (response.length === 0) {
          return res.status(400).send("Could not find any comments...");
        } else {
          res.send(response);
          comments = response;
        }
      })
      .catch(() => {
        res.status(400).send("Could not find Reddit user");
      });
  } else {
    res.status(400).send("Incorrect Credentials");
  }
});

app.post("/deleteAllComments", (req: Request, res: Response) => {
  const data = req.body;
  const username = data.userData.username[0];
  const password = data.userData.password[0];
  if (username && password) {
    const tempComment: any = [];

    comments.forEach((comment: any) => {
      tempComment.push(comment.id);
    });

    tempComment.forEach((commentID: string) => {
      r.getComment(commentID).edit("Lorem Ipsum...");
    });

    tempComment.forEach((commentID: string) => {
      r.getComment(commentID).delete();
    });

    res.status(200).send("All comments removed");
  } else {
    res.status(400).send("Could not edit & delete comments");
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server is listening on port ${PORT}`));
