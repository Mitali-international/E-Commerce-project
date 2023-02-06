import React from 'react'
import { IoCall,IoMailSharp } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className='bg-secondary padding_inside'>
      <div className='p-5 text-primary'>
        <h3 className='text-center from-left'>About Us</h3>
        <hr />
        <div className='pt-2'>
          <p>About Chicky</p>
          <p>Gift Card</p>
          <p>About Chicky</p>
          <p>About Chicky</p>
        </div>
      </div>
      <div className='p-5 text-primary'>
        <h3 className='text-center from-right'>Customer Services</h3>
        <hr />
        <div className='pt-2'>
          <p>About Chicky</p>
          <p>Gift Card</p>
          <p>About Chicky</p>
          <p>About Chicky</p>
        </div>
      </div>
      
      <div className='p-5 text-primary'>
        <h3 className='text-center from-left'>Contact Us</h3>
        <hr />
        <div className='pt-2'>
          <p className='flex space-x-1 items-center'>
            <IoCall />
            <span>+991 0123 4567 89</span>
          </p>
          <p className='flex space-x-1 items-center'>
            <IoMailSharp />
            <span>chickyhoney@gmail.com</span>
          </p>
         
        </div>
      </div>
      <div>
       <p className='text-center pb-4 text-primary'>All right reserve @ 2023</p>
      </div>
    </footer>
  )
}

export default Footer