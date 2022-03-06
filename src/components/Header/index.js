import React from 'react';
import './styles.css';
import logo from '../../assets/logo.png';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';
import { GetTotalNumberOfItemsInCart } from '../../hooks/cartHelperHooks';

function Header() {
    const numOfItems = GetTotalNumberOfItemsInCart();

    return (
        <div className='header'>
            <Link to="/">
                <img
                    className='header__logo'
                    src={logo}
                />
            </Link>

            <div className="header__search">
                <input
                    className="header__searchInput"
                    type="text"
                />
                <SearchIcon className="header__searchIcon" />
            </div>

            <div className="header__nav">
                <Link to="/login" className='text-link'>
                    <div className="header__option">
                        <span className="header__optionLine1">
                            Hello Guest
                        </span>

                        <span className="header__optionLine2">
                            Sign In
                        </span>
                    </div>
                </Link>

                <div className="header__option">
                    <span className="header__optionLine1">
                        view
                    </span>
                    <span className="header__optionLine2">
                        Orders
                    </span>
                </div>

                <Link to="/checkout" className='text-link'>
                    <div className="header__optionBasket">
                        <ShoppingBasketIcon />
                        <span className="header__optionLine2 headred__basketCount">
                            {numOfItems}
                        </span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header