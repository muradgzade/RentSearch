import React, { useEffect, useState } from "react";
import styles from "./footer.module.scss";
import { Link } from "react-router-dom";
import { BsFacebook } from "react-icons/bs";
import { GrTwitter } from "react-icons/gr";
import { ImLinkedin } from "react-icons/im";
import { BsInstagram } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css"
import Button from "../../Button/Button";

import { motion } from "framer-motion";

const Footer = () => {

  useEffect(()=>{
    AOS.init({duration:2000})
  },[]);


  const [input, setInput] = useState('');
  const [inputvalid, setinputvalid] = useState('');
  const HandleChange=(e)=>{
    setInput(e.target.value);
    


  }
  const footbtn=(e)=>{
    e.preventDefault();
    if(input===""){
    
      setinputvalid("Must be valid email");

    }

    else{
      setinputvalid("");

    }

  }
 


  return (
   <>

   <div className={styles.upfoot}>

    <div className="container">

      <div className={styles.items}>
        <div data-aos="fade-up" className={styles.sol}>
          <h2>Discover your next resident on our network</h2>
        </div>

        <div className={styles.sag}>
          <div data-aos="fade-up" className={styles.mini}>
            <img src="https://solutions.rent.com/wp-content/uploads/2022/06/BrandRent-TypePrimary-Logo-Saturation1-Color-ColorBlack-1-3.png" alt="" />
            <img src="https://solutions.rent.com/wp-content/uploads/2022/06/g10-12.png" alt="" />
          </div>
          <div data-aos="fade-up" className={styles.mini}>
            <img src="https://solutions.rent.com/wp-content/uploads/2022/06/g10-13.png" alt="" />
            <img src="https://solutions.rent.com/wp-content/uploads/2022/06/g10-14.png" alt="" />
          </div>
        </div>
      </div>
    </div>
   </div>

<footer>
     <div className="container" >
     <div  className={styles.total0}>
        <div className={styles.sol}>
          <div data-aos="fade-up" className={styles.header}>
          <Link to={'/'}>  <img
              src="https://solutions.rent.com/wp-content/themes/rent/assets/images/svg/Logo.svg"
              alt=""
            /></Link>
            <h2>Solutions that work as hard as you do. Period.</h2>
          </div>

          <div data-aos="fade-up" className={styles.icons}>
            <BsFacebook />
            <GrTwitter />
            <ImLinkedin />
            <BsInstagram />
          </div>

          <div className={styles.inputsect}>
            <h3>Stay in touch</h3>
            <form>
              <input type="email" placeholder="Email Address*" onChange={HandleChange} />
             
            
            
             
              <button className={styles.bigbtn} onClick={footbtn}>
              Subscribe

              </button>
            </form>
            <p>{inputvalid}</p>
          </div>

          <div className={styles.textsect}>
            <p>
              This site is protected by reCAPTCHA and the Google{" "}
              <span>Privacy Policy</span> and <span>Terms of Service</span>{" "}
              apply.
            </p>
         
            <button className={styles.mobilebtn}  onClick={footbtn}>
            Subscribe

            </button>
          </div>
        </div>

        <div className={styles.sag}>
          <div data-aos="fade-up" className={styles.ust}>
            <ul>
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>Solutions</li>
              <li>
                <Link to={"/about"}>About</Link>
              </li>
              <li>Contact</li>
              <li>
                <Link to={"/faq"}>Faq</Link>
              </li>
              <li>Team</li>
              <li>Carees</li>
            </ul>
            <ul>
              <li>Accessibility</li>
              <li>Notice of Collection</li>
              <li>Do Not Sell My Personal Information</li>
              <li>IRS Form 8937</li>
              <li>Sitemap</li>
            </ul>
          </div>
          <div data-aos="fade-up" className={styles.alt}>
            <p>© 2023 Rent Group Inc. All photos, videos, text, and other content are the property of Rent Group Inc. APARTMENT GUIDE, RENT.COM and RENTALS.COM and the APARTMENT GUIDE, RENT.COM and RENTALS.COM Trade Dress are registered trademarks of Rent Group Inc. All rights reserved.</p>
            <h6>If you are using a screen reader, or are having difficulty reading this website, please email accessibilityfeedback@rent.com.</h6>
            <div className={styles.fooot}>
              <span>Privacy Policy</span>
              <span >Terms of Service</span>
              <span>Patent Notice</span>
            </div>

          </div>
        </div>
      </div>
     </div>
    </footer>
   </>
  );
};

export default Footer;
