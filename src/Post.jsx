import React from 'react'


export const Post = ({author, content}) => {
  return (
    <div>{author} - {content}</div>
  )
}
