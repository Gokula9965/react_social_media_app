import React, { useContext } from 'react'
import Feed from './Feed'
import DataContext from './Context/DataContext'

const Home = () => {
  const { searchResults, fetchError, isLoading } = useContext(DataContext);
  return (
    <div className='Home'>
      {isLoading && <p style={{ marginTop: "250px",textAlign:"center"}}>Loading posts...</p>}
      {!isLoading && fetchError && <p style={{ marginTop: "250px",textAlign:"center" }}>{ `Error:${fetchError}`}</p>}
      {!isLoading && !fetchError&&
        (searchResults.length ? (<Feed posts={searchResults} />) : (<p style={{marginTop:"2rem"}}>
                  No posts are there to display
              </p>)
  )}
    </div>
  )
}

export default Home