import React from 'react';
import "../../assets/styles/layouts/header.layout.scss";
import SearchInput from "../../components/SearchInput/SearchInput";
import { Link } from "react-router-dom";
import shoppingCart from "../../assets/images/shopping-cart-svgrepo-com.svg"

export const Header = () => {
    return (
        <header className="header" dir="rtl">
            <div className='shopping-name-search'>
                <p className="shop-name font-bold">فروشگاه آپامه</p>
                <SearchInput />
            </div>
            <div>
                <div className='flex'>
                    <Link to={"/panel"} className="panel-link font-bold">مدیریت</Link>
                    <div className='flex gap-1 checkout-div'>
                        <img src={shoppingCart} alt="shopping cart" />
                        <Link to={"/checkout"} className="checkout-link font-bold">سبد خرید</Link>
                    </div>
                </div>
            </div>
        </header>
    )
}; 