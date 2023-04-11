import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';

const Scroltotop = () => {
    const {pathname} =useLocation();
    useEffect(() => {
        window.scrollTo({
          top: 0,
          left: 0,
         
        });
      }, [pathname]);

      return  null;

 
}

export default Scroltotop
