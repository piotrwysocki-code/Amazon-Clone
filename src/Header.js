import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function Header() {
  const [{cart, user}, dispatch] = useStateValue();
  const handleAuth = () => { 
    if(user){
        auth.signOut();
    }
  }

  return (
    <div className="header">
        <Link to="/">
            <img className="header_logo" src='/img/amazonLogo.png'></img>
        </Link>
        
        <div className="header_search">
            <input className="header_searchInput" type="text"/>
            <SearchIcon className="header_searchIcon"/>
        </div>

        <div className="header_nav">
            <Link to={!user && "/login"}>
                <div onClick={handleAuth} className="header_option">
                    <span className="header_optionLineOne">
                        Hello, {user ? user.email : 'Guest'}
                    </span>
                    <span className="header_optionLineTwo">
                        {user ? 'Sign Out' : 'Sign In'}
                    </span>
                </div>
            </Link>

            <div className="header_option">
                <span className="header_optionLineOne">
                    Returns
                </span>
                <span className="header_optionLineTwo">
                    & Orders
                </span>
            </div>
            <div className="header_option">
                <span className="header_optionLineOne">
                    Your
                </span>
                <span className="header_optionLineTwo">
                    Prime
                </span>
            </div>
            <Link to="/cart">
                <div className="header_optionCart">
                    <ShoppingCartIcon/>
                    <span className="header_optionLineTwo header_CartCount">
                        {cart?.length}
                    </span>
                </div>
            </Link>
        </div>
    </div>
  )
}

export default Header