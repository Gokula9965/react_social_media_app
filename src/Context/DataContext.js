import axios from 'axios';
import { createContext, useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { format } from 'date-fns';
import useWindowSize from '../Hooks/useWindowSize';


const DataContext = createContext({});

export const DataProvider = ({ children }) => {
    const Base_Url = "http://localhost:3500/posts";
    const [search, setSearch] = useState('');
    const [posts, setPosts] = useState([]);
    const navigate = useNavigate();
    const [postTitle, setPostTitle] = useState('');
    const [postBody, setPostBody] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [editTitle, setEditTitle] = useState('');
    const [editBody, setEditBody] = useState('');
    const [fetchError, setFetchError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const { width } = useWindowSize();
    useEffect(() => {
      const fetchPosts = async () => {
        try {
          const response = await axios.get(Base_Url);
          const responseData = response.data;
          setPosts(responseData);
          setFetchError(null);
        }
        catch (error)
        {
          setFetchError(error.message);
          console.log(error.message); 
        }
        finally {
          setIsLoading(false);
        }
      }
      setTimeout(() => {
        (async () => fetchPosts())();
      }, 2000);
      
    },[]);
    useEffect(() => {
      const filteredResult = posts.filter((post) => ((post.name.toLowerCase()).includes(search.toLowerCase())) || ((post.body.toLowerCase()).includes(search.toLowerCase())))
      setSearchResults(filteredResult.reverse());
    }, [posts, search])
    
    async function handleSubmit(e)
    {
      e.preventDefault();
      console.log("id",Number(posts[posts.length - 1].id));
      const id = posts.length ? String(Number(posts[posts.length - 1].id) + 1) : String(1);
  
      const name = postTitle;
      const body = postBody;
      const dateTime = format(new Date(), 'MMMM dd, yyyy pp');
      const newItem = { id, name, dateTime, body };
      const newPosts = [...posts, newItem];
      try {
        await axios.post(Base_Url, newItem);
      }
      catch (error)
      {
        console.log(error.message);
      }
      setPosts(newPosts);
      setPostTitle('');
      setPostBody('');
      navigate('/');
    }
    async function handleDelete(id)
    {
      console.log("delete", id);
      try {
        await axios.delete(`${Base_Url}/${id}`);
      }
      catch (error)
      {
        console.log("delete error", error.message);
      }
      const filterPost = posts.filter((post) => (post.id !== id));
      console.log(filterPost);
      setPosts([]);
      setPosts(filterPost);
      navigate('/');
    }
    async function handleEdit(id)
    {
      const dateTime = format(new Date(), 'MMMM dd, yyyy pp');
      const updatePost = { id, name: editTitle, dateTime, body: editBody };
      try {
        const response=await axios.put(`${Base_Url}/${id}`, updatePost);
        const postUpdate = posts.map((post) => (post.id === id ? {...response.data} : post));
        setPosts(postUpdate);
        setEditTitle('');
        setEditBody('');
        navigate('/');
        
      }
      catch (error)
      {
        console.log("Error in handleEdit", error.message);
      }
    }
    return(
        <DataContext.Provider value={{
        search, setSearch, width, searchResults, fetchError, isLoading, postTitle, setPostTitle, postBody, setPostBody, handleSubmit, posts, handleDelete,
        editTitle, setEditTitle, editBody, setEditBody, handleEdit
            
    }}>
        {children}
        </DataContext.Provider>
    )
};

export default DataContext;