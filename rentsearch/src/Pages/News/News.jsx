import React, { useRef, useState } from 'react'
import styles from './news.module.scss'
import {AiOutlineDown} from "react-icons/ai"
import {ndata} from "./Newsitems" 
const News = () => {


  const [nitems, setnitems]=useState(ndata)

  const filteritem = (tagitem)=>{

    const updateitems = ndata.filter((curelm)=>{
      return curelm.tag === tagitem;
    })
    setnitems(updateitems);
  }

  const All=useRef();
  const News= useRef();
  const Press = useRef();
 

  const Newsclick=()=>{
    News.current.style.backgroundColor = 'white' ;
    News.current.style.color = '#4561ec' ;

    All.current.style.backgroundColor = '#4561ec' ;
    All.current.style.color = 'white' ;
    
  

    Press.current.style.backgroundColor = '#4561ec' ;
    Press.current.style.color = 'white' ;


    filteritem("News"); 

  }
  const Allclick=()=>{
    All.current.style.backgroundColor = 'white' ;
    All.current.style.color = '#4561ec' ;

    News.current.style.backgroundColor = '#4561ec' ;
    News.current.style.color = 'white' ;
    
  

    Press.current.style.backgroundColor = '#4561ec' ;
    Press.current.style.color = 'white' ;


    setnitems(ndata);

  }
  const Pressclick=()=>{
    Press.current.style.backgroundColor = 'white' ;
    Press.current.style.color = '#4561ec' ;

    All.current.style.backgroundColor = '#4561ec' ;
    All.current.style.color = 'white' ;
    
  

    News.current.style.backgroundColor = '#4561ec' ;
    News.current.style.color = 'white' ;

    console.log("asdsss");


    filteritem("Press"); 

  }


  return (
    <>
        <div className={styles.first}>

          <div className="container">
         <div data-aos='fade-up' className={styles.items}>
         <div className={styles.sol}>
              <h1>
                Rent<span>News</span>
              </h1>
              <p>Get the latest on renter research, major market trends and technologies that impact the business of renting.</p>
            </div>

            <div className={styles.sag}>
              <img src="https://solutions.rent.com/wp-content/uploads/2023/02/TikTok-News-Header-1.png" alt="" />
             <div className={styles.text}>
             <h5>02/14/2023</h5>
              <h2>Now Available! RentSocial. for TikTok connects properties with renter audiences</h2>
              <p>Source: <span>Rent.</span></p>
             </div>
            </div>
         </div>
          </div>

        </div>



        <div className={styles.second}>
          <div className="container">

            <div className={styles.header}>
           
          <div className={styles.items}>
            <div className={styles.sol}>
              <ul>
                <li ref={All} onClick={Allclick} className={styles.all}>All</li>
                <li ref={News} onClick={Newsclick}  >News</li>
                <li ref={Press} onClick={Pressclick} >Press</li>
            
              </ul>
            </div>

            <div className={styles.sag}>
              
              <div className={styles.date}>
                Sort by Date
                <AiOutlineDown />
              </div>
            </div>
          </div>
        
            </div>


          <div className={styles.items}>

            {
              nitems && nitems.map((item,index)=>(
                
            <div key={index} data-aos="fade-up" className={styles.mini}>
           <div className={styles.imgg}>
           <img src={item.img} alt="" />

           <p>{item.tag}</p>
           </div>
           <div className={styles.text}>
           <h5>02/14/2023</h5>
            <h2>{item.text}</h2>
            <p>Source: <span>Rent.</span></p>
           </div>
          </div>


              ))
            }





         
            {/* <div data-aos="fade-up" className={styles.mini}>
              <img src="https://solutions.rent.com/wp-content/uploads/2023/02/TikTok-News-Header-1.png" alt="" />
             <div className={styles.text}>
             <h5>02/14/2023</h5>
              <h2>Now Available! RentSocial. for TikTok connects properties with renter audiences</h2>
              <p>Source: <span>Rent.</span></p>
             </div>
            </div>
            <div data-aos="fade-up" className={styles.mini}>
              <img src="https://solutions.rent.com/wp-content/uploads/2023/01/Copy-of-square-property-sites-image.jpg" alt="" />
             <div className={styles.text}>
             <h5>02/14/2023</h5>
              <h2>Now Available! RentSocial. for TikTok connects properties with renter audiences</h2>
              <p>Source: <span>Rent.</span></p>
             </div>
            </div>

            <div data-aos="fade-up" className={styles.mini}>
              <img src="https://solutions.rent.com/wp-content/uploads/2023/01/Untitled-design-1000x667-1.jpg" alt="" />
             <div className={styles.text}>
             <h5>02/14/2023</h5>
              <h2>Now Available! RentSocial. for TikTok connects properties with renter audiences</h2>
              <p>Source: <span>Rent.</span></p>
             </div>
            </div>
            <div data-aos="fade-up" className={styles.mini}>
              <img src="https://solutions.rent.com/wp-content/uploads/2022/12/onlineengagement.jpg" alt="" />
             <div className={styles.text}>
             <h5>02/14/2023</h5>
              <h2>Now Available! RentSocial. for TikTok connects properties with renter audiences</h2>
              <p>Source: <span>Rent.</span></p>
             </div>
            </div>
            <div data-aos="fade-up" className={styles.mini}>
              <img src="https://solutions.rent.com/wp-content/uploads/2022/12/webinar-images-300-%C3%97-250-px.jpg" alt="" />
             <div className={styles.text}>
             <h5>02/14/2023</h5>
              <h2>Now Available! RentSocial. for TikTok connects properties with renter audiences</h2>
              <p>Source: <span>Rent.</span></p>
             </div>
            </div>
            <div data-aos="fade-up" className={styles.mini}>
              <img src="https://solutions.rent.com/wp-content/uploads/2022/12/3.jpg" alt="" />
             <div className={styles.text}>
             <h5>02/14/2023</h5>
              <h2>Now Available! RentSocial. for TikTok connects properties with renter audiences</h2>
              <p>Source: <span>Rent.</span></p>
             </div>
            </div>
            <div data-aos="fade-up" className={styles.mini}>
              <img src="https://solutions.rent.com/wp-content/uploads/2022/11/wordpress-image-marketing-dive-2022.jpg" alt="" />
             <div className={styles.text}>
             <h5>02/14/2023</h5>
              <h2>Now Available! RentSocial. for TikTok connects properties with renter audiences</h2>
              <p>Source: <span>Rent.</span></p>
             </div>
            </div>
            <div data-aos="fade-up" className={styles.mini}>
              <img src="https://solutions.rent.com/wp-content/uploads/2022/11/OPTECH-Product-Announcement-Blog-Header.png" alt="" />
             <div className={styles.text}>
             <h5>02/14/2023</h5>
              <h2>Now Available! RentSocial. for TikTok connects properties with renter audiences</h2>
              <p>Source: <span>Rent.</span></p>
             </div>
            </div>
            <div data-aos="fade-up" className={styles.mini}>
              <img src="https://solutions.rent.com/wp-content/uploads/2022/10/US-News-World-Report-Blog-header.jpg" alt="" />
             <div className={styles.text}>
             <h5>02/14/2023</h5>
              <h2>Now Available! RentSocial. for TikTok connects properties with renter audiences</h2>
              <p>Source: <span>Rent.</span></p>
             </div>
            </div>
            <div data-aos="fade-up" className={styles.mini}>
              <img src="https://solutions.rent.com/wp-content/uploads/2022/09/RentMarketplace-Sept-2022-updates.jpg" alt="" />
             <div className={styles.text}>
             <h5>02/14/2023</h5>
              <h2>Now Available! RentSocial. for TikTok connects properties with renter audiences</h2>
              <p>Source: <span>Rent.</span></p>
             </div>
            </div>
            <div data-aos="fade-up" className={styles.mini}>
              <img src="https://solutions.rent.com/wp-content/uploads/2022/09/4.jpg" alt="" />
             <div className={styles.text}>
             <h5>02/14/2023</h5>
              <h2>Now Available! RentSocial. for TikTok connects properties with renter audiences</h2>
              <p>Source: <span>Rent.</span></p>
             </div>
            </div>
            <div data-aos="fade-up" className={styles.mini}>
              <img src="https://solutions.rent.com/wp-content/uploads/2022/09/1662129734-GettyImages-1176854253.jpg" alt="" />
             <div className={styles.text}>
             <h5>02/14/2023</h5>
              <h2>Now Available! RentSocial. for TikTok connects properties with renter audiences</h2>
              <p>Source: <span>Rent.</span></p>
             </div>
            </div>
            <div data-aos="fade-up" className={styles.mini}>
              <img src="https://solutions.rent.com/wp-content/uploads/2022/09/169kathheds493342-1170x600-1.jpg" alt="" />
             <div className={styles.text}>
             <h5>02/14/2023</h5>
              <h2>Now Available! RentSocial. for TikTok connects properties with renter audiences</h2>
              <p>Source: <span>Rent.</span></p>
             </div>
            </div>
            <div data-aos="fade-up" className={styles.mini}>
              <img src="https://solutions.rent.com/wp-content/uploads/2022/08/WIL-Panel-2022-BLOG-header.jpg" alt="" />
             <div className={styles.text}>
             <h5>02/14/2023</h5>
              <h2>Now Available! RentSocial. for TikTok connects properties with renter audiences</h2>
              <p>Source: <span>Rent.</span></p>
             </div>
            </div>
            <div data-aos="fade-up" className={styles.mini}>
              <img src="https://solutions.rent.com/wp-content/uploads/2022/09/motley-fool-image-2.jpg" alt="" />
             <div className={styles.text}>
             <h5>02/14/2023</h5>
              <h2>Now Available! RentSocial. for TikTok connects properties with renter audiences</h2>
              <p>Source: <span>Rent.</span></p>
             </div>
            </div>
            <div data-aos="fade-up" className={styles.mini}>
              <img src="https://solutions.rent.com/wp-content/uploads/2022/09/meet-the-sponsors-rent-1168x657-1.jpg" alt="" />
             <div className={styles.text}>
             <h5>02/14/2023</h5>
              <h2>Now Available! RentSocial. for TikTok connects properties with renter audiences</h2>
              <p>Source: <span>Rent.</span></p>
             </div>
            </div>
            <div data-aos="fade-up" className={styles.mini}>
              <img src="https://solutions.rent.com/wp-content/uploads/2022/07/JZ-interview-Goals-2022-.jpg" alt="" />
             <div className={styles.text}>
             <h5>02/14/2023</h5>
              <h2>Now Available! RentSocial. for TikTok connects properties with renter audiences</h2>
              <p>Source: <span>Rent.</span></p>
             </div>
            </div>
            <div data-aos="fade-up" className={styles.mini}>
              <img src="https://solutions.rent.com/wp-content/uploads/2022/07/digitalcurbappeal.jpeg" alt="" />
             <div className={styles.text}>
             <h5>02/14/2023</h5>
              <h2>Now Available! RentSocial. for TikTok connects properties with renter audiences</h2>
              <p>Source: <span>Rent.</span></p>
             </div>
            </div>
            <div data-aos="fade-up" className={styles.mini}>
              <img src="https://solutions.rent.com/wp-content/uploads/2022/07/Rent-Announcement-News-Header.jpg" alt="" />
             <div className={styles.text}>
             <h5>02/14/2023</h5>
              <h2>Now Available! RentSocial. for TikTok connects properties with renter audiences</h2>
              <p>Source: <span>Rent.</span></p>
             </div>
            </div>
            <div data-aos="fade-up" className={styles.mini}>
              <img src="https://solutions.rent.com/wp-content/uploads/2022/07/GettyImages-1127957300.jpg" alt="" />
             <div className={styles.text}>
             <h5>02/14/2023</h5>
              <h2>Now Available! RentSocial. for TikTok connects properties with renter audiences</h2>
              <p>Source: <span>Rent.</span></p>
             </div>
            </div>
            <div data-aos="fade-up" className={styles.mini}>
              <img src="https://solutions.rent.com/wp-content/uploads/2022/07/Screenshot-2022-07-15-131932-e1657912901906.jpg" alt="" />
             <div className={styles.text}>
             <h5>02/14/2023</h5>
              <h2>Now Available! RentSocial. for TikTok connects properties with renter audiences</h2>
              <p>Source: <span>Rent.</span></p>
             </div>
            </div>
            <div data-aos="fade-up" className={styles.mini}>
              <img src="https://solutions.rent.com/wp-content/uploads/2021/12/Geofencing-map-example-768x446-1.png" alt="" />
             <div className={styles.text}>
             <h5>02/14/2023</h5>
              <h2>Now Available! RentSocial. for TikTok connects properties with renter audiences</h2>
              <p>Source: <span>Rent.</span></p>
             </div>
            </div>
            <div data-aos="fade-up" className={styles.mini}>
              <img src="https://solutions.rent.com/wp-content/uploads/2022/07/5-Ways-to-Capture-More-Renter-Leads-From-Your-Apartment-Listings.jpg" alt="" />
             <div className={styles.text}>
             <h5>02/14/2023</h5>
              <h2>Now Available! RentSocial. for TikTok connects properties with renter audiences</h2>
              <p>Source: <span>Rent.</span></p>
             </div>
            </div>
          
            <div data-aos="fade-up" className={styles.mini}>
              <img src="https://solutions.rent.com/wp-content/uploads/2022/07/Occupancy-fallacy.jpg" alt="" />
             <div className={styles.text}>
             <h5>02/14/2023</h5>
              <h2>Now Available! RentSocial. for TikTok connects properties with renter audiences</h2>
              <p>Source: <span>Rent.</span></p>
             </div>
            </div>
            <div data-aos="fade-up" className={styles.mini}>
              <img src="https://solutions.rent.com/wp-content/uploads/2022/07/Redfin-Rentals-RP-launch-Blog-Header.jpg" alt="" />
             <div className={styles.text}>
             <h5>02/14/2023</h5>
              <h2>Now Available! RentSocial. for TikTok connects properties with renter audiences</h2>
              <p>Source: <span>Rent.</span></p>
             </div>
            </div>
            <div data-aos="fade-up" className={styles.mini}>
              <img src="https://solutions.rent.com/wp-content/uploads/2022/07/MReport_March2022_Feature6.jpeg" alt="" />
             <div className={styles.text}>
             <h5>02/14/2023</h5>
              <h2>Now Available! RentSocial. for TikTok connects properties with renter audiences</h2>
              <p>Source: <span>Rent.</span></p>
             </div>
            </div> */}
        


            </div>

          </div>
        </div>
      
    </>
  )
}

export default News
