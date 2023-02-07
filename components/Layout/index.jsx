import React from 'react';

import Header from '../Header'
// import ImageSlider from '../ImageSlider';
import Footer from '../Footer';

const Layout = ({children}) => {
  return (
    <div>
        <Header />
        {children}
        {/* <ImageSlider /> */}
        <Footer />
    </div>
  )
}

export default Layout