import React from 'react'

interface Props {
  commentBody: string
  commentID: string
  commentLink: string
}

const RedditComment = ({commentBody, commentID, commentLink}:Props) => {
  return (
    <>
    <div className='flex flex-col items-center'>
      <p>Comment Body: {commentBody}</p>
      <p>Comment ID: {commentID}</p>
      <p>Comment Link: {commentLink}</p>
    </div>
    <br />
    </>
  )
}

export default RedditComment