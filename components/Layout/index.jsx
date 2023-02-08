import React from 'react';

import Header from '../Header'
// import ImageSlider from '../ImageSlider';
import Footer from '../Footer';
import Sidebar from "../Sidebar";

const Layout = ({children}) => {
  return (
    <div>
        <Header />
        <Sidebar />
        {children}
        {/* <ImageSlider /> */}
        <Footer />
    </div>
  )
}

export default Layout