import React from 'react'
import styles from "./about.module.scss"
import { useDisclosure } from '@chakra-ui/react'

const About = () => {
  const { isOpen, onOpen, onClose }=useDisclosure();
  return (
    <>
    <div  className={styles.header}>
     <div className="container">
   <div data-aos="fade-up"  className={styles.text00}>
   <h1>
      About Us.
      </h1>

      <h2>
      Our mission is to simplify the experience of connecting people & properties. 
      </h2>

      <h3>
      We do this by delivering integrated solutions that bring together the right renter, with the right property, at the right time, eliminating friction and driving efficiency.
      </h3>
   </div>

     <div data-aos="fade-up" className={styles.headerbottom}>
      <div className={styles.sol}>
        <img src="https://solutions.rent.com/wp-content/uploads/2022/06/still_1-610x391.jpg" alt="" />
        <div className={styles.miniimgs}>
          <img src="https://solutions.rent.com/wp-content/uploads/2022/05/2-2.png" alt="" />
          <img src="https://solutions.rent.com/wp-content/uploads/2022/05/1-2.png" alt="" />
          <img src="https://solutions.rent.com/wp-content/uploads/2022/05/3-2.png" alt="" />
          <img src="https://solutions.rent.com/wp-content/uploads/2022/05/4-2-1.png" alt="" />
        </div>
      </div>

    <div className={styles.sag}>
   
      <img src="https://solutions.rent.com/wp-content/uploads/2022/06/P1111508-610x714.jpg" alt="" />
    </div>
     </div>
     </div>

    </div>


    <div className={styles.section2}>
      <div className="container">
      <div className={styles.head}>
        <h1>Our Core Values</h1>
        <h2>At Rent. our mission is driven by eight values that guide every decision we make.</h2>

      </div>

      <div className={styles.items}>
        <div data-aos="fade-up" className={styles.total}>
          <div className={styles.mini1}>
            <img src="https://solutions.rent.com/wp-content/uploads/2023/01/1-Core-Values_Experience-SM.png" alt="" />
            <p>Obsessed with Experience</p>
          </div>
          <div className={styles.mini2}>
            <p> Good is never enough. For our renters, clients, and people, we strive to deliver the best experience in everything we do and everything we deliver. We sweat the small stuff.</p>
          </div>
        </div>
        <div data-aos="fade-up" className={styles.total}>
          <div className={styles.mini1}>
            <img src="https://solutions.rent.com/wp-content/uploads/2023/01/2-Core-Values_Integrity-SM.png" alt="" />
            <p>Act with Integrity</p>
          </div>
          <div className={styles.mini2}>
            <p>   We win the right way. We earn trust by honoring our commitments. We respect truth and candor – even when uncomfortable.                                        </p>
          </div>
        </div>
        <div data-aos="fade-up" className={styles.total}>
          <div className={styles.mini1}>
            <img src="https://solutions.rent.com/wp-content/uploads/2023/01/3-Core-Values_Grit-SM-2.png" alt="" />
            <p>Have grit</p>
          </div>
          <div className={styles.mini2}>
            <p>
                                            We view adversity as an opportunity. Where others give up, we do not. We are relentless and always find a way.                                        </p>
          </div>
        </div>
        <div data-aos="fade-up" className={styles.total}>
          <div className={styles.mini1}>
            <img src="https://solutions.rent.com/wp-content/uploads/2023/01/4-Core-Values_We-SM.png" alt="" />
            <p>We not me</p>
          </div>
          <div className={styles.mini2}>
            <p>
                                            We rise and fall together. Individuals can accomplish great things, but teams can accomplish the extraordinary. Our success rests on how we work with each other and those around us.                                        </p>
          </div>
        </div>
        <div data-aos="fade-up" className={styles.total}>
          <div className={styles.mini1}>
            <img src="https://solutions.rent.com/wp-content/uploads/2023/01/5-Core-Values_Matter-SM.png" alt="" />
            <p>Do Things that Matter</p>
          </div>
          <div className={styles.mini2}>
            <p> 
                                            Disciplined focus drives results. We identify what drives the greatest impact, and then we deliver.                                        </p>
          </div>
        </div>
        <div data-aos="fade-up" className={styles.total}>
          <div className={styles.mini1}>
            <img src="https://solutions.rent.com/wp-content/uploads/2023/01/6-Core-Values_Forward-SM.png" alt="" />
            <p>Keep Moving Forward</p>
          </div>
          <div className={styles.mini2}>
            <p>
                                            Speed matters. We have a bias to action and take calculated risks. Most decisions are reversible – experience is the best teacher.                                        </p>
          </div>
        </div>
        <div data-aos="fade-up" className={styles.total}>
          <div className={styles.mini1}>
            <img src="https://solutions.rent.com/wp-content/uploads/2023/01/7-Core-Values_Why-SM.png" alt="" />
            <p>Understand the “Why?”</p>
          </div>
          <div className={styles.mini2}>
            <p> 
                                            We make ourselves better by being curious and questioning the status quo. Only by taking the time to understand the goals and needs of others can we deliver them the best.                                        </p>
          </div>
        </div>
        <div data-aos="fade-up" className={styles.total}>
          <div className={styles.mini1}>
            <img src="https://solutions.rent.com/wp-content/uploads/2023/01/8-Core-Values_Support-SM.png" alt="" />
            <p>Support our People & Community</p>
          </div>
          <div className={styles.mini2}>
            <p>  Our people are our greatest resource. We believe investing in them and the communities in which we live and work matters.                                        </p>
          </div>
        </div>
        
      </div>
      </div>
    </div>


    <div className={styles.section3}>
     <div className="container">
     <div className={styles.head}>
        <h2>Our Leaders</h2>
        <p>Meet our leadership team</p>
      </div>
      
      <div className={styles.items}>

        <div data-aos="fade-up" className={styles.mini}>
          <img src="https://solutions.rent.com/wp-content/uploads/2022/05/jon-ziglar-211207_1.jpg" alt="" />
          <h4>Jon Ziglar</h4>
          <p>Chief Executive Officer</p>
        </div>
        <div data-aos="fade-up" className={styles.mini}>
          <img src="https://solutions.rent.com/wp-content/uploads/2022/05/nishant-phadnis-211207_1-e1654878031471.jpg" alt="" />
          <h4>Nishant Phadnis</h4>
          <p>Chief Product Officer</p>
        </div>
        <div data-aos="fade-up" className={styles.mini}>
          <img src="https://solutions.rent.com/wp-content/uploads/2022/05/kathy_neumann_220322_v2-web-e1654878009283.jpg" alt="" />
          <h4>Kathy Neumann</h4>
          <p>Chief Marketing Officer</p>
        </div>
        <div data-aos="fade-up" className={styles.mini}>
          <img src="https://solutions.rent.com/wp-content/uploads/2022/05/david-sommers-_1_.jpg" alt="" />
          <h4>David Sommers</h4>
          <p>Chief Technology Officer</p>
        </div>
        <div data-aos="fade-up" className={styles.mini}>
          <img src="https://solutions.rent.com/wp-content/uploads/2022/05/sheila_dehdashti_resized.jpg" alt="" />
          <h4>Sheila Dehdashti</h4>
          <p>Chief People Officer</p>
        </div>
        <div data-aos="fade-up" className={styles.mini}>
          <img src="https://solutions.rent.com/wp-content/uploads/2022/10/jamie_graves_220928-2.jpg" alt="" />
          <h4>Jamie Graves</h4>
          <p>General Counsel</p>
        </div>
        <div data-aos="fade-up" className={styles.mini}>
          <img src="https://solutions.rent.com/wp-content/uploads/2022/06/arlene-mayfield-211201.jpg" alt="" />
          <h4>Arlene Mayfield</h4>
          <p>Senior Vice President of Sales</p>
        </div>
        <div data-aos="fade-up" className={styles.mini}>
          <img src="https://solutions.rent.com/wp-content/uploads/2022/11/jesus_machuca_221027.jpg" alt="" />
          <h4>Jesus Machuca</h4>
          <p>Vice President of Sales</p>
        </div>



      </div>
     </div>
    </div>


    <div className={styles.images}>

      <div className="container">
        <h1>Life at Rent.</h1>

        <div className={styles.items}>
          <div className="row">
            <div data-aos="fade-up" className="col-6 g-3">
              <img src="https://solutions.rent.com/wp-content/uploads/2022/11/IMG_8684.jpg" alt="" />
            </div>
            <div data-aos="fade-up" className="col-6 g-3">
              <img src="https://solutions.rent.com/wp-content/uploads/2022/11/billboard_sample.jpg" alt="" />
            </div>
            <div data-aos="fade-up" className="col-4 g-3">
              <img src="https://solutions.rent.com/wp-content/uploads/2022/11/billboard_sample.jpg" alt="" />
            </div>
            <div data-aos="fade-up" className="col-8 g-3">
              <img src="https://solutions.rent.com/wp-content/uploads/2022/06/company_photo_georgia_aquarium_2022.jpg" alt="" />
            </div>
            <div data-aos="fade-up" className="col-8 g-3">
              <img src="https://solutions.rent.com/wp-content/uploads/2022/11/image-2.jpg" alt="" />
            </div>
            <div data-aos="fade-up" className="col-4 g-3">
              <img src="https://solutions.rent.com/wp-content/uploads/2022/11/image-1-e1667348622341.jpg" alt="" />
            </div>

            <div data-aos="fade-up" className="col-6 g-3">
              <img src="https://solutions.rent.com/wp-content/uploads/2022/11/IMG_3410.jpg" alt="" />
            </div>

            <div data-aos="fade-up" className="col-6 g-3">
              <img src="https://solutions.rent.com/wp-content/uploads/2022/11/generalsession_day2_still_25.jpg" alt="" />
            </div>

            <div data-aos="fade-up" className="col-4 g-3">
              <img src="https://solutions.rent.com/wp-content/uploads/2022/11/image-3.jpg" alt="" />
            </div>

            <div data-aos="fade-up" className="col-8 g-3">
              <img src="https://solutions.rent.com/wp-content/uploads/2022/11/Image-from-iOS-3.jpg" alt="" />
            </div>

            <div data-aos="fade-up" className="col-8 g-3">
              <img src="https://solutions.rent.com/wp-content/uploads/2022/11/IMG_0222.jpg" alt="" />
            </div>

            <div data-aos="fade-up" className="col-4 g-3">
              <img src="https://solutions.rent.com/wp-content/uploads/2022/11/IMG_2646.jpg" alt="" />
            </div>

            <div data-aos="fade-up" className="col-4 g-4">
              <img src="https://solutions.rent.com/wp-content/uploads/2022/11/IMG_0452-redo-e1667348656164.jpg" alt="" />
            </div>
            
            <div data-aos="fade-up" className="col-4 g-4">
              <img src="https://solutions.rent.com/wp-content/uploads/2022/06/072A0336-e1667348876884.jpg" alt="" />
            </div>
            
            <div data-aos="fade-up" className="col-4 g-3">
              <img src="https://solutions.rent.com/wp-content/uploads/2022/06/P1111552-e1667348838993.jpg" alt="" />
            </div>

          </div>
        </div>
      </div>
    </div>


    <div className={styles.section5}>'
    
    <div className="container">
     <div className={styles.items}>
          <h2>
          Recent News
          </h2>

          <div data-aos="fade-up" className={styles.cards}>
            <div className={styles.mini}>
              <img src="https://solutions.rent.com/wp-content/uploads/2023/02/TikTok-News-Header-1.png" alt="" />
              <div className={styles.middle}>
                <h6>Rent.</h6>
                <h6>Feb 14, 2023</h6>
               
              </div>

              <div className={styles.foot}>
              <h1> BusinessWire: Rent. announces Property Sites, a website solution for the multifamily industry.</h1>
              </div>
            </div>
            <div className={styles.mini}>
              <img src="https://solutions.rent.com/wp-content/uploads/2023/01/Copy-of-square-property-sites-image.jpg" alt="" />
              <div className={styles.middle}>
                <h6>Business Wire</h6>
                <h6>Jan 20, 2023</h6>
               
              </div>

              <div className={styles.foot}>
              <h1>Now Available! RentSocial. for TikTok connects properties with renter audiences</h1>
                <p>RentMarketplace. Property Sites: A beautiful branded hub for your property, created at lightning speed!</p>
              </div>
            </div>

          </div>
        </div>
     </div>



    </div>
       
      
    </>
  )
}

export default About
