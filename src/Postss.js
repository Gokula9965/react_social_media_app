import React from 'react'
import { Link } from 'react-router-dom';
const Postss = ({ post }) => {
    const body = post.body.length <= 62 ? post.body:post.body.slice(0,62);
  return (
    <article>
      <Link to={`posts/${post.id}`} style={{textDecoration:"none",color:'black'}}>
          <p className='Name'>{post.name}</p>
        <p className='date'>{post.dateTime}</p>
        </Link>
          <p>{ body}</p>
</article>
  )
}

export default Postss