import Head from "next/head";
import type { NextPage } from "next";
import UserForm from "../components/UserForm";
import RedditComment from "../components/RedditComment";

const Home: NextPage = () => {
  return (
    <div>
      <UserForm />
      <RedditComment
        commentBody="This is the comment body"
        commentID="3euyg4d"
        commentLink="/84fhfh223"
      />
      <RedditComment
        commentBody="This is the comment body"
        commentID="3euyg4d"
        commentLink="/84fhfh223"
      />
    </div>
  );
};

export default Home;
