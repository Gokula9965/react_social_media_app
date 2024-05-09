import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Import your CSS file here
import { FaLaptop, FaMobileAlt, FaTabletAlt } from 'react-icons/fa';
import DataContext from './Context/DataContext';

const Header = () => {
  const { search, setSearch, width } = useContext(DataContext);
  return (
    <main>
          <nav className="navbar">
              <h3>SocialMedia</h3>
        <ul>
          <li>
            <Link to='/' className='links' style={{ textDecoration: 'none'}}>
              Home
            </Link>
          </li>
          <li>
            <Link to='/posts' className='links'  style={{ textDecoration: 'none'}}>
              Posts
            </Link>
          </li>
          <li>
            <Link to='/about' className='links' style={{ textDecoration: 'none'}}>
              About
            </Link>
          </li>
        </ul>
        <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
          <input
            type='text'
            role='search'
            placeholder='Search on posts'          
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>
         {width<576?<FaMobileAlt/>:width<768?<FaTabletAlt/>:<FaLaptop/>}
      </nav>
    </main>
  );
};

export default Header;
