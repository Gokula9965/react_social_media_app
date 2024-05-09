import React, { useContext } from 'react'
import DataContext from './Context/DataContext'

const NewPost = () => {
  const { postTitle, setPostTitle, postBody, setPostBody, handleSubmit } = useContext(DataContext);
  return (
    <form className="newPost" onSubmit={(e)=>handleSubmit(e)}>
      <h1 style={{textAlign:"center"}}>ADD A NEW POST</h1>
      <label for='title'>Title</label>
      <input
        autoFocus
        type="text"
        id="title"
        name="title"
        required
        value={postTitle}
        onChange={(e)=>setPostTitle(e.target.value)}
      />
      <label for="body">Body</label>
      <textarea
        rows={12}
        cols={205}
        autoFocus
        type='text'
        className='body'
        name='body'
        required
        value={postBody}
        onChange={(e)=>setPostBody(e.target.value)}
      /><br></br>
      <button type='submit'>
        submit
      </button>
     </form>
  )
}

export default NewPost