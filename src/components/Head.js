import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';

const Head = () => {

  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());

  }
  return (
    <div className="grid grid-flow-col shadow-lg h-12">
        <div className="flex col-span-1">
            <img className="h-10 p-1 m-1 cursor-pointer"
            onClick={()=> toggleMenuHandler()}
            src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp" alt="menu" />
            <a href="/"><img className="h-12"
            src="https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500" alt="youtube-logo" /></a>
        </div>
        <div className="p-1 m-1 col-span-10">
            <input className="w-1/2 border border-gray-400 p-1 rounded-l-full" type="text" placeholder='Search'/>
            <button className="border border-gray-400 px-4 py-1 rounded-r-full bg-gray-200">🔍</button>
        </div>
        <div className="col-span-1 p-1 m-1">
            <img className="h-8"
            src="https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg" alt="user" />
        </div>
    </div>
  )
};

export default Head;