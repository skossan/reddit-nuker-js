import React from "react";

interface Props {
  commentBody: string;
  commentID: string;
  commentLink: string;
}

const RedditComment = ({ commentBody, commentID, commentLink }: Props) => {
  return (
    <>
      <div className="flex flex-col items-center">
        <p>Comment Body: {commentBody}</p>
        <p>Comment ID: {commentID}</p>
        <a href={commentLink}>Comment Link: CLICK HERE</a>
      </div>
      <br />
    </>
  );
};

export default RedditComment;
