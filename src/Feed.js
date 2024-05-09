import React from 'react'
import Postss from './Postss'

const Feed = ({posts}) => {
  return (
      <>
          {
              posts.map((post) => (
                  <>
                      <Postss key={posts.id} post={post} />
                      <hr></hr>
                  </>
              ))
          }
      </>
  )
}

export default Feed