import React, { useContext, useEffect } from 'react'
import {  useParams } from 'react-router-dom'
import DataContext from './Context/DataContext';

const Editpage = () => {
  const { posts, editTitle, setEditTitle, editBody, setEditBody, handleEdit } = useContext(DataContext);
    const { id } = useParams();
    const post = posts.filter((post) => post.id === id);
    const postData = post[0];
    useEffect(() => {
        if (postData) {
            setEditTitle(postData.name);
            setEditBody(postData.body);
        }
    }, [postData,setEditTitle,setEditBody]);
  return (
      <>
          {
              editTitle &&
              <form className="newPost" onSubmit={(e)=>e.preventDefault()}>
              <h1 style={{textAlign:"center"}}>EDIT A POST</h1>
              <label for='title'>Title</label>
              <input
                autoFocus
                type="text"
                id="title"
                name="title"
                required
                value={editTitle}
                onChange={(e)=>setEditTitle(e.target.value)}
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
                value={editBody}
                onChange={(e)=>setEditBody(e.target.value)}
              /><br></br>
              <button type='submit' onClick={()=>handleEdit(postData.id)}>
                submit
              </button>
             </form>
          }
          {
              !editTitle &&
              (<p style={{marginTop:"250px",textAlign:"center"}}>
                      Sorry there is no such post 
                      Visit our Homepage
              </p>)
          }
      </>
  )
}

export default Editpage