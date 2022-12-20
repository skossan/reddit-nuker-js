import Head from "next/head";
import type { NextPage } from "next";
import UserForm from "../components/UserForm";
import RedditComment from "../components/RedditComment";

const Home: NextPage = () => {
  return (
    <div>
      <UserForm />
    </div>
  );
};

export default Home;
