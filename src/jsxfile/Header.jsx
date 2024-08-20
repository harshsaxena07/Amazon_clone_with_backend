import React from 'react'
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  

  const handleAuthentication = () => {
    if(user){
      auth.signOut();
    }
  }

  return (
    <div className='header'>
      <Link to='/'>
        <img className='header__logo' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1IRNXk04_6QwSy9uFhAAG6RzqXqNnzyQf0g&s" alt="logo" />
      </Link>
      <div className="header__search">
        <input className='header__searchInput' type='text'  />
        <SearchIcon className='header__searchIcon'/>
      </div>

      <div className="header__nav">
        <Link to={!user && '/login'}>
          <div onClick={handleAuthentication} className='header__option'>
            <span className='header__optionlineOne'>Hello {!user ? 'Guest' : user.email} </span>
            <span className='header__optionlineTwo'>{user ? 'Sign Out': 'Sign In'}</span>
          </div>
        </Link>
        
        <Link to='/orders'>
        <div className='header__option'>
        <span className='header__optionlineOne'>Returns</span>
        <span className='header__optionlineTwo'>& Orders</span>
        </div>
        </Link>
        
        <div className='header__option'>
        <span className='header__optionlineOne'>Your </span>
        <span className='header__optionlineTwo'>Prime</span>
        </div>
        
        <Link to='/checkout'>
          <div className="header__optionBasket">
            <ShoppingBasketIcon/>
            <span className='header__optionlineTwo header__basketCount'>
              {basket?.length}
            </span>
          </div>
        </Link>
      </div> 
    </div>
  ) 
}

export default Header
