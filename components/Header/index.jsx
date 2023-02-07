import React, {useState} from 'react'
import Image from 'next/image'

import { IoCall, IoLocationOutline } from "react-icons/io5";
import { TfiMenu } from "react-icons/tfi";

import shoppingCart from "../../Assets/shopping-cart.png"
import menuButton from "../../Assets/icons8-menu-48 (2).png"


import styles from "./style.module.css"

const Header = () => {
 
   const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Do something with the search term (e.g., perform a search)
  };

  return (
    <div className={styles.header_container}>
      <div className='bg-primary h-full'>
        <div className='bg-secondary h-1/4 padding_inside flex justify-between text-primary'>
          <div className='flex space-x-2 justify-center items-center cursor-pointer from-left'>
            <IoCall className='text-lg'/>
            <span>+990 1234 5678 90</span>
          </div>
          <div className='flex space-x-2 justify-center items-center cursor-pointer from-right'>
            <IoLocationOutline />
            <span>New York</span>
          </div>
        </div>
        <div className='grid gap-1 padding_inside items-center'>
          <div className='flex justify-between items-center p-3'>
            <div className={styles.menu_button}>
            </div>
            <div className={styles.logo_box}></div>
            <div className={styles.shopping_cart}>
            </div>
          </div>
      <form onSubmit={handleSubmit} className="relative">
      
      <input
        type="text"
        placeholder="What are you looking for today ..."
        className="appearance-none rounded-full bg-white border border-secondary focus:outline-none focus:border-teal-500 text-base pl-10 py-2 pr-4 w-full"
        value={searchTerm}
        onChange={handleChange}
      />
      <div className="absolute inset-y-0 right-7 pl-3 flex items-center text-secondary">
        <svg className="fill-current pointer-events-none text-secondary w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"></path>
        </svg>
      </div>
    </form>
      </div>
      </div>
      
    </div>
  )
}

export default Header