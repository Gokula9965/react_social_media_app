import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import DataContext from './Context/DataContext';

const Postpage = () => {
    const { posts, handleDelete } = useContext(DataContext);
    const { id } = useParams();
    console.log(id);
    const postFilter = posts.filter((post) => (String(post.id) === id));
    console.log(postFilter);
  return (
      <main className="newPage">
          {
              postFilter.length ? (
                  <>
                  <p className='Name'>{postFilter[0].name}</p>
                      <p className='date'>{postFilter[0].dateTime}</p>
                      <p>{postFilter[0].body}</p>
                      <Link to={`/edit/${postFilter[0].id}`}>
                          <button className='edit' type='button'>Edit</button>
                          </Link>
                      <button className='delete' type='button' onClick={()=>handleDelete(postFilter[0].id)}>Delete</button>
                      </>
              ) : (<p style={{marginTop:"250px",textAlign:"center"}}>
                      Sorry there is no such post 
                      Visit our Homepage
              </p>)
          }
   </main>
  )
}

export default Postpage