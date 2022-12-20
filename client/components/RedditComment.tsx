import React from 'react'

interface Props {
  commentBody: string
  commentID: string
  commentLink: string
}

const RedditComment = ({commentBody, commentID, commentLink}:Props) => {
  return (
    <div>
      <p>{commentBody}</p>
      <p>{commentID}</p>
      <p>{commentLink}</p>
    </div>
  )
}

export default RedditComment