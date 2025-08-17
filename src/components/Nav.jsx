import React, { useState, useEffect, useContext } from 'react';
import { MdFastfood } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { LuShoppingBag } from "react-icons/lu";
import { dataContext } from '../context/UserContext';
import { food_items } from '../food';
import { useAuth0 } from "@auth0/auth0-react";
import { useSelector } from 'react-redux';

function Nav() {
  const {             //use auth0 hook
    isLoading,
    isAuthenticated,
    error,
    loginWithRedirect: login,
    logout: auth0Logout,
    user,
  } = useAuth0();

  const signup = () =>
    login({ authorizationParams: { screen_hint: "signup" } });

  const logout = () =>
    auth0Logout({ logoutParams: { returnTo: window.location.origin } });

  if (isLoading) return <p className="text-center">Loading...</p>;

  let { input, setInput, cate, setCate , showCart, setShowCart} = useContext(dataContext);

  useEffect(() => {
    let newList = food_items.filter((item) =>
      item.food_name.toLowerCase().includes(input.toLowerCase())
    );
    setCate(newList);
  }, [input]);
  let items = useSelector(state => state.cart);

  return (
    <div className="w-full h-[80px] fixed top-0 left-0 z-50 bg-slate-200 flex justify-evenly items-center px-2 md:px-8">
      {/* Logo */}
      {/* <div className="w-[60px] h-[60px] flex items-center justify-center bg-white rounded-md shadow-xl">
        <MdFastfood className="w-[30px] h-[30px] text-green-500" />
      </div> */}

      {/* Search */}
      <form
        action="#"
        className="w-[40%] h-[60px] flex items-center bg-white px-5 gap-4 rounded-md shadow-md md:w-[70%]"
        onSubmit={(e) => e.preventDefault()}
      >
        <FaSearch className="w-[30px] h-[30px] text-green-500 cursor-pointer" />
        <input
          type="text"
          placeholder="Search..."
          className="w-[100%] p-2 rounded-l-md text-[16px] outline-none md:text-[20px]"
          onChange={(e) => {
            setInput(e.target.value);
          }}
          value={input}
        />
      </form>




 
      <div className="flex items-center gap-4">
        <div className="w-[60px] h-[60px] flex items-center justify-center bg-white rounded-md shadow-xl relative cursor-pointer " onClick={()=>{
            setShowCart(true)}} >
          <span className="absolute top-0 right-2 text-green-500 font-bold text-[18px]">
{items.length}
          </span>
          <LuShoppingBag className="w-[30px] h-[30px] text-green-500" />
        </div>

        {/* Auth Buttons */}
        <div className='flex '>

        {isAuthenticated ? (
          <div className="flex items-center gap-2">
            <span className="text-green-600 font-semibold hidden md:block">
              {user?.email}
            </span>
            <button
              onClick={logout}
              className="bg-green-500 text-white px-2 py-2 rounded-lg shadow-md hover:bg-green-600 transition-all"
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <button
              onClick={login}
              className="bg-green-500 text-white px-4 py-2 rounded-lg shadow hover:bg-green-600 transition"
            >
              Login
            </button>
            <button
              onClick={signup}
              className="bg-gray-500 text-white px-4 py-2 rounded-lg shadow hover:bg-gray-600 transition"
            >
              Signup
            </button>
          </div>
        )}
        </div>
      </div>
    </div>
  );
}

export default Nav;
