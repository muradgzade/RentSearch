import React, { useEffect, useRef, useState } from "react";
import Button from "../../Components/Button/Button";
import styles from "./blog.module.scss";
import styled from "@emotion/styled";
import { AiOutlineDown } from "react-icons/ai";
import { MdVerticalAlignTop } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import {bdata} from "./Blogitems"

const Blog = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  const [input, setInput] = useState("");
  const [inputvalid, setinputvalid] = useState();

  const HandleChange = (e) => {
    setInput(e.target.value);
  };
  const blogbtn = (e) => {
    e.preventDefault();
    if (input === "") {
      console.log("ererere");
      setinputvalid("Must be valid email");
    } else {
      setinputvalid("");
    }
  };

  const [totop, setotop] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.screenY > 100) {
        setotop(true);
      } else {
        setotop(false);
      }
    });
  }, []);

  const scrollup=()=>{
    window.scrollTo(
      {
        top:0,
        behavior:"smooth"
       
      }
    )
  
  }

  

  const [bitems, setbitems]=useState(bdata)

  const filteritem = (tagitem)=>{

    const updateitems = bdata.filter((curelm)=>{
      return curelm.tag === tagitem;
    })
    setbitems(updateitems);
  }

  const All=useRef();
  const Articles= useRef();
  const Videos = useRef();
  const Resources = useRef();

  const articlesclick=()=>{
    Articles.current.style.backgroundColor = 'white' ;
    Articles.current.style.color = '#4561ec' ;

    All.current.style.backgroundColor = '#4561ec' ;
    All.current.style.color = 'white' ;
    
    Resources.current.style.backgroundColor = '#4561ec' ;
    Resources.current.style.color = 'white' ;

    Videos.current.style.backgroundColor = '#4561ec' ;
    Videos.current.style.color = 'white' ;


    filteritem("Articles"); 

  }
  const Allclick=()=>{
    All.current.style.backgroundColor = 'white' ;
    All.current.style.color = '#4561ec' ;

    Articles.current.style.backgroundColor = '#4561ec' ;
    Articles.current.style.color = 'white' ;
    
    Resources.current.style.backgroundColor = '#4561ec' ;
    Resources.current.style.color = 'white' ;

    Videos.current.style.backgroundColor = '#4561ec' ;
    Videos.current.style.color = 'white' ;


    setbitems(bdata);

  }
  const Videosclick=()=>{
    Videos.current.style.backgroundColor = 'white' ;
    Videos.current.style.color = '#4561ec' ;

    All.current.style.backgroundColor = '#4561ec' ;
    All.current.style.color = 'white' ;
    
    Resources.current.style.backgroundColor = '#4561ec' ;
    Resources.current.style.color = 'white' ;

    Articles.current.style.backgroundColor = '#4561ec' ;
    Articles.current.style.color = 'white' ;


    filteritem("Videos"); 

  }
  const Resourcesclick=()=>{
    Resources.current.style.backgroundColor = 'white' ;
    Resources.current.style.color = '#4561ec' ;

    All.current.style.backgroundColor = '#4561ec' ;
    All.current.style.color = 'white' ;
    
    Articles.current.style.backgroundColor = '#4561ec' ;
    Articles.current.style.color = 'white' ;

    Videos.current.style.backgroundColor = '#4561ec' ;
    Videos.current.style.color = 'white' ;


    filteritem("Resources"); 
    console.log('asdsad');

  }


  return (
    <>
      <div className={styles.gotop}>
        <button
           onClick={scrollup}
        >
          <MdVerticalAlignTop />
          TOP
        </button>
      </div>
      <div className={styles.section1}>
        <div className="container">
          <div className={styles.items}>
            <div className={styles.sol}>
              <div className={styles.head}>
                <h1>
                  Rent<span>Insights.</span>
                </h1>
                <h3>
                  Get the latest multifamily marketing insights, guides, trends
                  and tips here.
                </h3>
                <Button text={"Explore"} className={styles.exp} />
              </div>

              <div className={styles.form_sect}>
                <h2>Stay in touch!</h2>

                <input
                  type="email"
                  placeholder="Email Adress*"
                  onChange={HandleChange}
                />
                <h5>{inputvalid}</h5>
                <p>
                  This site is protected by reCAPTCHA and the Google{" "}
                  <span> Privacy Policy</span> and <span>Terms of Service</span>{" "}
                  apply.
                </p>

                <button className={styles.sub} onClick={blogbtn}>
                  Submit
                </button>
              </div>
            </div>

            <div className={styles.sag}>
              <img
                src="https://solutions.rent.com/wp-content/uploads/2023/03/Facebook-Marketplace-Banner.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.section2}>
        <div className="container">
          <div className={styles.items}>
            <div className={styles.sol}>
              <ul>
                <li ref={All} onClick={Allclick} className={styles.all}>All</li>
                <li ref={Articles} onClick={articlesclick} >Articles  </li>
                <li ref={Videos}  onClick={Videosclick} >Videos</li>
                <li ref={Resources} onClick={Resourcesclick} >Resources</li>
              </ul>
            </div>

            <div className={styles.sag}>
              <div className={styles.filter}>
                Filter by
                <AiOutlineDown />
              </div>
              <div className={styles.date}>
                Sort by Date
                <AiOutlineDown />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.section3}>
        <div className="container">
          <div className={styles.items}>

            {
              bitems && bitems.map((item,index)=>(
                <Link key={index} to={"./blogdata"}>
                <div data-aos="fade-up"  className={styles.mini}>
                  <div className={styles.sol}>
                    <img
                      src={item.img}
                      alt=""
                    />
                    <div className={styles.tag1}>
                      <p>{item.tag}</p>
                    </div>
                  </div>
                  <div className={styles.sag}>
                    <div className={styles.head}>
                      <p>03/20/2023</p>
                      <span className={styles.in}>
                        in
                        <span className={styles.on}>Onsite Effectiveness</span>
                      </span>
                    </div>
                    <div className={styles.middle}>
                      <h3> {item.text} </h3>
                    </div>
                    <div className={styles.foot}>
                      <div className={styles.about}>
                        <img
                          src="https://solutions.rent.com/wp-content/uploads/2022/07/Rachel-Richardson-CIRCLE-150x150-1.webp"
                          alt=""
                        />
                        <p>by Rachel Richardson</p>
                      </div>
                      <div className={styles.multi}>
                        <div className={styles.multi1}>
                          <h5>#Multifamily Advertising</h5>
                          <h5>#Multifamily Marketing</h5>
                        </div>
                        <div className={styles.multi1}>
                          <h5>#Social Media Advertising</h5>
                          <h5>#Renter Research</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                </Link>

              )

            )
            }
            {/* <Link to={"./blogdata"}>
            <div data-aos="fade-up" className={styles.mini}>
              <div className={styles.sol}>
                <img
                  src="https://solutions.rent.com/wp-content/uploads/2023/03/shutterstock_1233205321-625.jpg"
                  alt=""
                />
              </div>
              <div className={styles.sag}>
                <div className={styles.head}>
                  <p>03/20/2023</p>
                  <span className={styles.in}>
                    in
                    <span className={styles.on}>Onsite Effectiveness</span>
                  </span>
                </div>
                <div className={styles.middle}>
                  <h3>5 Rental Market Trends to Watch This Year</h3>
                </div>
                <div className={styles.foot}>
                  <div className={styles.about}>
                    <img
                      src="https://solutions.rent.com/wp-content/uploads/2022/07/Rachel-Richardson-CIRCLE-150x150-1.webp"
                      alt=""
                    />
                    <p>by Rachel Richardson</p>
                  </div>
                  <div className={styles.multi}>
                    <div className={styles.multi1}>
                      <h5>#Multifamily Advertising</h5>
                      <h5>#Multifamily Marketing</h5>
                    </div>
                    <div className={styles.multi1}>
                      <h5>#Social Media Advertising</h5>
                      <h5>#Renter Research</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </Link>

            <div data-aos="fade-up" className={styles.mini}>
              <div className={styles.sol}>
                <img
                  src="https://solutions.rent.com/wp-content/uploads/2023/01/property-sites-blog.jpg"
                  alt=""
                />
              </div>
              <div className={styles.sag}>
                <div className={styles.head}>
                  <p>03/20/2023</p>
                  <span className={styles.in}>
                    in
                    <span className={styles.on}>Onsite Effectiveness</span>
                  </span>
                </div>
                <div className={styles.middle}>
                  <h3>Top 4 mistakes property marketers make with websites</h3>
                </div>
                <div className={styles.foot}>
                  <div className={styles.about}>
                    <img
                      src="https://solutions.rent.com/wp-content/uploads/2022/07/Rachel-Richardson-CIRCLE-150x150-1.webp"
                      alt=""
                    />
                    <p>by Rachel Richardson</p>
                  </div>
                  <div className={styles.multi}>
                    <div className={styles.multi1}>
                      <h5>#Multifamily Advertising</h5>
                      <h5>#Multifamily Marketing</h5>
                    </div>
                    <div className={styles.multi1}>
                      <h5>#Social Media Advertising</h5>
                      <h5>#Renter Research</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div data-aos="fade-up" className={styles.mini}>
              <div className={styles.sol}>
                <img
                  src="https://solutions.rent.com/wp-content/uploads/2023/01/shutterstock_1495929368.jpg"
                  alt=""
                />
              </div>
              <div className={styles.sag}>
                <div className={styles.head}>
                  <p>03/20/2023</p>
                  <span className={styles.in}>
                    in
                    <span className={styles.on}>Onsite Effectiveness</span>
                  </span>
                </div>
                <div className={styles.middle}>
                  <h3>
                    Run a property marketing wellness check to boost performance
                    this year
                  </h3>
                </div>
                <div className={styles.foot}>
                  <div className={styles.about}>
                    <img
                      src="https://solutions.rent.com/wp-content/uploads/2022/07/Rachel-Richardson-CIRCLE-150x150-1.webp"
                      alt=""
                    />
                    <p>by Rachel Richardson</p>
                  </div>
                  <div className={styles.multi}>
                    <div className={styles.multi1}>
                      <h5>#Multifamily Advertising</h5>
                      <h5>#Multifamily Marketing</h5>
                    </div>
                    <div className={styles.multi1}>
                      <h5>#Social Media Advertising</h5>
                      <h5>#Renter Research</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div data-aos="fade-up" className={styles.mini}>
              <div className={styles.sol}>
                <img
                  src="https://solutions.rent.com/wp-content/uploads/2023/01/shutterstock_1264777678.jpg"
                  alt=""
                />
              </div>
              <div className={styles.sag}>
                <div className={styles.head}>
                  <p>03/20/2023</p>
                  <span className={styles.in}>
                    in
                    <span className={styles.on}>Onsite Effectiveness</span>
                  </span>
                </div>
                <div className={styles.middle}>
                  <h3>
                    3 times more critical maintenance issues resolved during
                    winter storm
                  </h3>
                </div>
                <div className={styles.foot}>
                  <div className={styles.about}>
                    <img
                      src="https://solutions.rent.com/wp-content/uploads/2022/07/Rachel-Richardson-CIRCLE-150x150-1.webp"
                      alt=""
                    />
                    <p>by Rachel Richardson</p>
                  </div>
                  <div className={styles.multi}>
                    <div className={styles.multi1}>
                      <h5>#Multifamily Advertising</h5>
                      <h5>#Multifamily Marketing</h5>
                    </div>
                    <div className={styles.multi1}>
                      <h5>#Social Media Advertising</h5>
                      <h5>#Renter Research</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div data-aos="fade-up" className={styles.mini}>
              <div className={styles.sol}>
                <img
                  src="https://solutions.rent.com/wp-content/uploads/2022/12/shutterstock_1186831723.jpg"
                  alt=""
                />
              </div>
              <div className={styles.sag}>
                <div className={styles.head}>
                  <p>03/20/2023</p>
                  <span className={styles.in}>
                    in
                    <span className={styles.on}>Onsite Effectiveness</span>
                  </span>
                </div>
                <div className={styles.middle}>
                  <h3>Happy Holidays! Enjoy our festive Spotify playlist.</h3>
                </div>
                <div className={styles.foot}>
                  <div className={styles.about}>
                    <img
                      src="https://solutions.rent.com/wp-content/uploads/2022/07/Rachel-Richardson-CIRCLE-150x150-1.webp"
                      alt=""
                    />
                    <p>by Rachel Richardson</p>
                  </div>
                  <div className={styles.multi}>
                    <div className={styles.multi1}>
                      <h5>#Multifamily Advertising</h5>
                      <h5>#Multifamily Marketing</h5>
                    </div>
                    <div className={styles.multi1}>
                      <h5>#Social Media Advertising</h5>
                      <h5>#Renter Research</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div data-aos="fade-up" className={styles.mini}>
              <div className={styles.sol}>
                <img
                  src="https://solutions.rent.com/wp-content/uploads/2022/12/2085720871-Edited-4star.jpg"
                  alt=""
                />
              </div>
              <div className={styles.sag}>
                <div className={styles.head}>
                  <p>03/20/2023</p>
                  <span className={styles.in}>
                    in
                    <span className={styles.on}>Onsite Effectiveness</span>
                  </span>
                </div>
                <div className={styles.middle}>
                  <h3>
                    3 Smart Ways to Manage Your Property’s Ratings and Reviews
                  </h3>
                </div>
                <div className={styles.foot}>
                  <div className={styles.about}>
                    <img
                      src="https://solutions.rent.com/wp-content/uploads/2022/07/Rachel-Richardson-CIRCLE-150x150-1.webp"
                      alt=""
                    />
                    <p>by Rachel Richardson</p>
                  </div>
                  <div className={styles.multi}>
                    <div className={styles.multi1}>
                      <h5>#Multifamily Advertising</h5>
                      <h5>#Multifamily Marketing</h5>
                    </div>
                    <div className={styles.multi1}>
                      <h5>#Social Media Advertising</h5>
                      <h5>#Renter Research</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div data-aos="fade-up" className={styles.mini}>
              <div className={styles.sol}>
                <img
                  src="https://solutions.rent.com/wp-content/uploads/2022/08/shutterstock_1697959045.jpg"
                  alt=""
                />
              </div>
              <div className={styles.sag}>
                <div className={styles.head}>
                  <p>03/20/2023</p>
                  <span className={styles.in}>
                    in
                    <span className={styles.on}>Onsite Effectiveness</span>
                  </span>
                </div>
                <div className={styles.middle}>
                  <h3>Apartment Lead Generation: How to Get Rental Leads</h3>
                </div>
                <div className={styles.foot}>
                  <div className={styles.about}>
                    <img
                      src="https://solutions.rent.com/wp-content/uploads/2022/07/Rachel-Richardson-CIRCLE-150x150-1.webp"
                      alt=""
                    />
                    <p>by Rachel Richardson</p>
                  </div>
                  <div className={styles.multi}>
                    <div className={styles.multi1}>
                      <h5>#Multifamily Advertising</h5>
                      <h5>#Multifamily Marketing</h5>
                    </div>
                    <div className={styles.multi1}>
                      <h5>#Social Media Advertising</h5>
                      <h5>#Renter Research</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div data-aos="fade-up" className={styles.mini}>
              <div className={styles.sol}>
                <img
                  src="https://solutions.rent.com/wp-content/uploads/2022/11/tik-tok-blog.jpg"
                  alt=""
                />
              </div>
              <div className={styles.sag}>
                <div className={styles.head}>
                  <p>03/20/2023</p>
                  <span className={styles.in}>
                    in
                    <span className={styles.on}>Onsite Effectiveness</span>
                  </span>
                </div>
                <div className={styles.middle}>
                  <h3>
                    Is your next renter on TikTok? Actionable strategies for
                    multifamily advertisers
                  </h3>
                </div>
                <div className={styles.foot}>
                  <div className={styles.about}>
                    <img
                      src="https://solutions.rent.com/wp-content/uploads/2022/07/Rachel-Richardson-CIRCLE-150x150-1.webp"
                      alt=""
                    />
                    <p>by Rachel Richardson</p>
                  </div>
                  <div className={styles.multi}>
                    <div className={styles.multi1}>
                      <h5>#Multifamily Advertising</h5>
                      <h5>#Multifamily Marketing</h5>
                    </div>
                    <div className={styles.multi1}>
                      <h5>#Social Media Advertising</h5>
                      <h5>#Renter Research</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div data-aos="fade-up" className={styles.mini}>
              <div className={styles.sol}>
                <img
                  src="https://solutions.rent.com/wp-content/uploads/2022/10/amazon-blog-header-image.jpg"
                  alt=""
                />
              </div>
              <div className={styles.sag}>
                <div className={styles.head}>
                  <p>03/20/2023</p>
                  <span className={styles.in}>
                    in
                    <span className={styles.on}>Onsite Effectiveness</span>
                  </span>
                </div>
                <div className={styles.middle}>
                  <h3>
                    Renter experience: What properties can learn from e-commerce
                    giants
                  </h3>
                </div>
                <div className={styles.foot}>
                  <div className={styles.about}>
                    <img
                      src="https://solutions.rent.com/wp-content/uploads/2022/07/Rachel-Richardson-CIRCLE-150x150-1.webp"
                      alt=""
                    />
                    <p>by Rachel Richardson</p>
                  </div>
                  <div className={styles.multi}>
                    <div className={styles.multi1}>
                      <h5>#Multifamily Advertising</h5>
                      <h5>#Multifamily Marketing</h5>
                    </div>
                    <div className={styles.multi1}>
                      <h5>#Social Media Advertising</h5>
                      <h5>#Renter Research</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div data-aos="fade-up" className={styles.mini}>
              <div className={styles.sol}>
                <img
                  src="https://solutions.rent.com/wp-content/uploads/2022/10/shutterstock_2007206966.jpg"
                  alt=""
                />
              </div>
              <div className={styles.sag}>
                <div className={styles.head}>
                  <p>03/20/2023</p>
                  <span className={styles.in}>
                    in
                    <span className={styles.on}>Onsite Effectiveness</span>
                  </span>
                </div>
                <div className={styles.middle}>
                  <h3>
                    Money, Effort, Time: Building a better property marketing
                    budget
                  </h3>
                </div>
                <div className={styles.foot}>
                  <div className={styles.about}>
                    <img
                      src="https://solutions.rent.com/wp-content/uploads/2022/07/Rachel-Richardson-CIRCLE-150x150-1.webp"
                      alt=""
                    />
                    <p>by Rachel Richardson</p>
                  </div>
                  <div className={styles.multi}>
                    <div className={styles.multi1}>
                      <h5>#Multifamily Advertising</h5>
                      <h5>#Multifamily Marketing</h5>
                    </div>
                    <div className={styles.multi1}>
                      <h5>#Social Media Advertising</h5>
                      <h5>#Renter Research</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div data-aos="fade-up" className={styles.mini}>
              <div className={styles.sol}>
                <img
                  src="https://solutions.rent.com/wp-content/uploads/2022/10/shutterstock_1041104380.jpg"
                  alt=""
                />
              </div>
              <div className={styles.sag}>
                <div className={styles.head}>
                  <p>03/20/2023</p>
                  <span className={styles.in}>
                    in
                    <span className={styles.on}>Onsite Effectiveness</span>
                  </span>
                </div>
                <div className={styles.middle}>
                  <h3>3 time-saving wins for busy property teams</h3>
                </div>
                <div className={styles.foot}>
                  <div className={styles.about}>
                    <img
                      src="https://solutions.rent.com/wp-content/uploads/2022/07/Rachel-Richardson-CIRCLE-150x150-1.webp"
                      alt=""
                    />
                    <p>by Rachel Richardson</p>
                  </div>
                  <div className={styles.multi}>
                    <div className={styles.multi1}>
                      <h5>#Multifamily Advertising</h5>
                      <h5>#Multifamily Marketing</h5>
                    </div>
                    <div className={styles.multi1}>
                      <h5>#Social Media Advertising</h5>
                      <h5>#Renter Research</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div data-aos="fade-up" className={styles.mini}>
              <div className={styles.sol}>
                <img
                  src="https://solutions.rent.com/wp-content/uploads/2022/09/budget-season-2-image-header.jpg"
                  alt=""
                />
              </div>
              <div className={styles.sag}>
                <div className={styles.head}>
                  <p>03/20/2023</p>
                  <span className={styles.in}>
                    in
                    <span className={styles.on}>Onsite Effectiveness</span>
                  </span>
                </div>
                <div className={styles.middle}>
                  <h3>
                    Budget planning tips to bounce back from property staffing
                    challenges
                  </h3>
                </div>
                <div className={styles.foot}>
                  <div className={styles.about}>
                    <img
                      src="https://solutions.rent.com/wp-content/uploads/2022/07/Rachel-Richardson-CIRCLE-150x150-1.webp"
                      alt=""
                    />
                    <p>by Rachel Richardson</p>
                  </div>
                  <div className={styles.multi}>
                    <div className={styles.multi1}>
                      <h5>#Multifamily Advertising</h5>
                      <h5>#Multifamily Marketing</h5>
                    </div>
                    <div className={styles.multi1}>
                      <h5>#Social Media Advertising</h5>
                      <h5>#Renter Research</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div data-aos="fade-up" className={styles.mini}>
              <div className={styles.sol}>
                <img
                  src="https://solutions.rent.com/wp-content/uploads/2022/09/budget-season-1-header-image.jpg"
                  alt=""
                />
              </div>
              <div className={styles.sag}>
                <div className={styles.head}>
                  <p>03/20/2023</p>
                  <span className={styles.in}>
                    in
                    <span className={styles.on}>Onsite Effectiveness</span>
                  </span>
                </div>
                <div className={styles.middle}>
                  <h3>
                    3 ways to get more from your property’s marketing budget
                  </h3>
                </div>
                <div className={styles.foot}>
                  <div className={styles.about}>
                    <img
                      src="https://solutions.rent.com/wp-content/uploads/2022/07/Rachel-Richardson-CIRCLE-150x150-1.webp"
                      alt=""
                    />
                    <p>by Rachel Richardson</p>
                  </div>
                  <div className={styles.multi}>
                    <div className={styles.multi1}>
                      <h5>#Multifamily Advertising</h5>
                      <h5>#Multifamily Marketing</h5>
                    </div>
                    <div className={styles.multi1}>
                      <h5>#Social Media Advertising</h5>
                      <h5>#Renter Research</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div data-aos="fade-up" className={styles.mini}>
              <div className={styles.sol}>
                <img
                  src="https://solutions.rent.com/wp-content/uploads/2022/08/shutterstock_1697959045.jpg"
                  alt=""
                />
              </div>
              <div className={styles.sag}>
                <div className={styles.head}>
                  <p>03/20/2023</p>
                  <span className={styles.in}>
                    in
                    <span className={styles.on}>Onsite Effectiveness</span>
                  </span>
                </div>
                <div className={styles.middle}>
                  <h3>
                    How to create exceptional renter experiences across every
                    property in your portfolio
                  </h3>
                </div>
                <div className={styles.foot}>
                  <div className={styles.about}>
                    <img
                      src="https://solutions.rent.com/wp-content/uploads/2022/07/Rachel-Richardson-CIRCLE-150x150-1.webp"
                      alt=""
                    />
                    <p>by Rachel Richardson</p>
                  </div>
                  <div className={styles.multi}>
                    <div className={styles.multi1}>
                      <h5>#Multifamily Advertising</h5>
                      <h5>#Multifamily Marketing</h5>
                    </div>
                    <div className={styles.multi1}>
                      <h5>#Social Media Advertising</h5>
                      <h5>#Renter Research</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div data-aos="fade-up" className={styles.mini}>
              <div className={styles.sol}>
                <img
                  src="https://solutions.rent.com/wp-content/uploads/2022/08/shutterstock_1519392692.jpg"
                  alt=""
                />
              </div>
              <div className={styles.sag}>
                <div className={styles.head}>
                  <p>03/20/2023</p>
                  <span className={styles.in}>
                    in
                    <span className={styles.on}>Onsite Effectiveness</span>
                  </span>
                </div>
                <div className={styles.middle}>
                  <h3>
                    Learn the secrets to winning, serving, and retaining top
                    talent in the multifamily industry
                  </h3>
                </div>
                <div className={styles.foot}>
                  <div className={styles.about}>
                    <img
                      src="https://solutions.rent.com/wp-content/uploads/2022/07/Rachel-Richardson-CIRCLE-150x150-1.webp"
                      alt=""
                    />
                    <p>by Rachel Richardson</p>
                  </div>
                  <div className={styles.multi}>
                    <div className={styles.multi1}>
                      <h5>#Multifamily Advertising</h5>
                      <h5>#Multifamily Marketing</h5>
                    </div>
                    <div className={styles.multi1}>
                      <h5>#Social Media Advertising</h5>
                      <h5>#Renter Research</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div data-aos="fade-up" className={styles.mini}>
              <div className={styles.sol}>
                <img
                  src="https://solutions.rent.com/wp-content/uploads/2022/08/shutterstock_1517082941.jpg"
                  alt=""
                />
              </div>
              <div className={styles.sag}>
                <div className={styles.head}>
                  <p>03/20/2023</p>
                  <span className={styles.in}>
                    in
                    <span className={styles.on}>Onsite Effectiveness</span>
                  </span>
                </div>
                <div className={styles.middle}>
                  <h3>
                    Should you be on Snapchat? A property marketer’s guide to
                    maximizing social presence.
                  </h3>
                </div>
                <div className={styles.foot}>
                  <div className={styles.about}>
                    <img
                      src="https://solutions.rent.com/wp-content/uploads/2022/07/Rachel-Richardson-CIRCLE-150x150-1.webp"
                      alt=""
                    />
                    <p>by Rachel Richardson</p>
                  </div>
                  <div className={styles.multi}>
                    <div className={styles.multi1}>
                      <h5>#Multifamily Advertising</h5>
                      <h5>#Multifamily Marketing</h5>
                    </div>
                    <div className={styles.multi1}>
                      <h5>#Social Media Advertising</h5>
                      <h5>#Renter Research</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div data-aos="fade-up" className={styles.mini}>
              <div className={styles.sol}>
                <img
                  src="https://solutions.rent.com/wp-content/uploads/2022/08/spark-better-conversations-with-fha-best-practices-blog.jpg"
                  alt=""
                />
              </div>
              <div className={styles.sag}>
                <div className={styles.head}>
                  <p>03/20/2023</p>
                  <span className={styles.in}>
                    in
                    <span className={styles.on}>Onsite Effectiveness</span>
                  </span>
                </div>
                <div className={styles.middle}>
                  <h3>
                    Spark better conversations and avoid risk with FHA best
                    practices
                  </h3>
                </div>
                <div className={styles.foot}>
                  <div className={styles.about}>
                    <img
                      src="https://solutions.rent.com/wp-content/uploads/2022/07/Rachel-Richardson-CIRCLE-150x150-1.webp"
                      alt=""
                    />
                    <p>by Rachel Richardson</p>
                  </div>
                  <div className={styles.multi}>
                    <div className={styles.multi1}>
                      <h5>#Multifamily Advertising</h5>
                      <h5>#Multifamily Marketing</h5>
                    </div>
                    <div className={styles.multi1}>
                      <h5>#Social Media Advertising</h5>
                      <h5>#Renter Research</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div data-aos="fade-up" className={styles.mini}>
              <div className={styles.sol}>
                <img
                  src="https://solutions.rent.com/wp-content/uploads/2023/03/luxury-apartment-highrise.jpg"
                  alt=""
                />
              </div>
              <div className={styles.sag}>
                <div className={styles.head}>
                  <p>03/20/2023</p>
                  <span className={styles.in}>
                    in
                    <span className={styles.on}>Onsite Effectiveness</span>
                  </span>
                </div>
                <div className={styles.middle}>
                  <h3>
                    Luxury Apartment Marketing Ideas: How to Find the Right
                    Renters
                  </h3>
                </div>
                <div className={styles.foot}>
                  <div className={styles.about}>
                    <img
                      src="https://solutions.rent.com/wp-content/uploads/2022/07/Rachel-Richardson-CIRCLE-150x150-1.webp"
                      alt=""
                    />
                    <p>by Rachel Richardson</p>
                  </div>
                  <div className={styles.multi}>
                    <div className={styles.multi1}>
                      <h5>#Multifamily Advertising</h5>
                      <h5>#Multifamily Marketing</h5>
                    </div>
                    <div className={styles.multi1}>
                      <h5>#Social Media Advertising</h5>
                      <h5>#Renter Research</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div data-aos="fade-up" className={styles.mini}>
              <div className={styles.sol}>
                <img
                  src="https://solutions.rent.com/wp-content/uploads/2022/07/shutterstock_1463711015.jpg"
                  alt=""
                />
              </div>
              <div className={styles.sag}>
                <div className={styles.head}>
                  <p>03/20/2023</p>
                  <span className={styles.in}>
                    in
                    <span className={styles.on}>Onsite Effectiveness</span>
                  </span>
                </div>
                <div className={styles.middle}>
                  <h3>
                    FHA Refresher: Avoid common mistakes in your property
                    marketing
                  </h3>
                </div>
                <div className={styles.foot}>
                  <div className={styles.about}>
                    <img
                      src="https://solutions.rent.com/wp-content/uploads/2022/07/Rachel-Richardson-CIRCLE-150x150-1.webp"
                      alt=""
                    />
                    <p>by Rachel Richardson</p>
                  </div>
                  <div className={styles.multi}>
                    <div className={styles.multi1}>
                      <h5>#Multifamily Advertising</h5>
                      <h5>#Multifamily Marketing</h5>
                    </div>
                    <div className={styles.multi1}>
                      <h5>#Social Media Advertising</h5>
                      <h5>#Renter Research</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div data-aos="fade-up" className={styles.mini}>
              <div className={styles.sol}>
                <img
                  src="https://solutions.rent.com/wp-content/uploads/2022/07/dont-risk-it.jpg"
                  alt=""
                />
              </div>
              <div className={styles.sag}>
                <div className={styles.head}>
                  <p>03/20/2023</p>
                  <span className={styles.in}>
                    in
                    <span className={styles.on}>Onsite Effectiveness</span>
                  </span>
                </div>
                <div className={styles.middle}>
                  <h3>
                    Don’t Risk It: Fair Housing Considerations for Property
                    Digital Advertising
                  </h3>
                </div>
                <div className={styles.foot}>
                  <div className={styles.about}>
                    <img
                      src="https://solutions.rent.com/wp-content/uploads/2022/07/Rachel-Richardson-CIRCLE-150x150-1.webp"
                      alt=""
                    />
                    <p>by Rachel Richardson</p>
                  </div>
                  <div className={styles.multi}>
                    <div className={styles.multi1}>
                      <h5>#Multifamily Advertising</h5>
                      <h5>#Multifamily Marketing</h5>
                    </div>
                    <div className={styles.multi1}>
                      <h5>#Social Media Advertising</h5>
                      <h5>#Renter Research</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div data-aos="fade-up" className={styles.mini}>
              <div className={styles.sol}>
                <img
                  src="https://solutions.rent.com/wp-content/uploads/2022/07/GettyImages-1062950258-header-e1658015176908.jpg"
                  alt=""
                />
              </div>
              <div className={styles.sag}>
                <div className={styles.head}>
                  <p>03/20/2023</p>
                  <span className={styles.in}>
                    in
                    <span className={styles.on}>Onsite Effectiveness</span>
                  </span>
                </div>
                <div className={styles.middle}>
                  <h3>Emerging Tech That’s Changing the Rental Search Game</h3>
                </div>
                <div className={styles.foot}>
                  <div className={styles.about}>
                    <img
                      src="https://solutions.rent.com/wp-content/uploads/2022/07/Rachel-Richardson-CIRCLE-150x150-1.webp"
                      alt=""
                    />
                    <p>by Rachel Richardson</p>
                  </div>
                  <div className={styles.multi}>
                    <div className={styles.multi1}>
                      <h5>#Multifamily Advertising</h5>
                      <h5>#Multifamily Marketing</h5>
                    </div>
                    <div className={styles.multi1}>
                      <h5>#Social Media Advertising</h5>
                      <h5>#Renter Research</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div data-aos="fade-up" className={styles.mini}>
              <div className={styles.sol}>
                <img
                  src="https://solutions.rent.com/wp-content/uploads/2022/07/IMG_9369b-1.jpg"
                  alt=""
                />
              </div>
              <div className={styles.sag}>
                <div className={styles.head}>
                  <p>03/20/2023</p>
                  <span className={styles.in}>
                    in
                    <span className={styles.on}>Onsite Effectiveness</span>
                  </span>
                </div>
                <div className={styles.middle}>
                  <h3>
                    AIM 2022: What property marketers can learn from major
                    brands
                  </h3>
                </div>
                <div className={styles.foot}>
                  <div className={styles.about}>
                    <img
                      src="https://solutions.rent.com/wp-content/uploads/2022/07/Rachel-Richardson-CIRCLE-150x150-1.webp"
                      alt=""
                    />
                    <p>by Rachel Richardson</p>
                  </div>
                  <div className={styles.multi}>
                    <div className={styles.multi1}>
                      <h5>#Multifamily Advertising</h5>
                      <h5>#Multifamily Marketing</h5>
                    </div>
                    <div className={styles.multi1}>
                      <h5>#Social Media Advertising</h5>
                      <h5>#Renter Research</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div data-aos="fade-up" className={styles.mini}>
              <div className={styles.sol}>
                <img
                  src="https://solutions.rent.com/wp-content/uploads/2022/07/Redfin-Rentals-RP-launch-Blog-Header.jpg"
                  alt=""
                />
              </div>
              <div className={styles.sag}>
                <div className={styles.head}>
                  <p>03/20/2023</p>
                  <span className={styles.in}>
                    in
                    <span className={styles.on}>Onsite Effectiveness</span>
                  </span>
                </div>
                <div className={styles.middle}>
                  <h3>Rent. Listings Are Now Live on Redfin!</h3>
                </div>
                <div className={styles.foot}>
                  <div className={styles.about}>
                    <img
                      src="https://solutions.rent.com/wp-content/uploads/2022/07/Rachel-Richardson-CIRCLE-150x150-1.webp"
                      alt=""
                    />
                    <p>by Rachel Richardson</p>
                  </div>
                  <div className={styles.multi}>
                    <div className={styles.multi1}>
                      <h5>#Multifamily Advertising</h5>
                      <h5>#Multifamily Marketing</h5>
                    </div>
                    <div className={styles.multi1}>
                      <h5>#Social Media Advertising</h5>
                      <h5>#Renter Research</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div data-aos="fade-up" className={styles.mini}>
              <div className={styles.sol}>
                <img
                  src="https://solutions.rent.com/wp-content/uploads/2022/07/GettyImages-1334322908.webp"
                  alt=""
                />
              </div>
              <div className={styles.sag}>
                <div className={styles.head}>
                  <p>03/20/2023</p>
                  <span className={styles.in}>
                    in
                    <span className={styles.on}>Onsite Effectiveness</span>
                  </span>
                </div>
                <div className={styles.middle}>
                  <h3>
                    A Case for Prioritizing Marketing Despite High Occupancy
                    Rates
                  </h3>
                </div>
                <div className={styles.foot}>
                  <div className={styles.about}>
                    <img
                      src="https://solutions.rent.com/wp-content/uploads/2022/07/Rachel-Richardson-CIRCLE-150x150-1.webp"
                      alt=""
                    />
                    <p>by Rachel Richardson</p>
                  </div>
                  <div className={styles.multi}>
                    <div className={styles.multi1}>
                      <h5>#Multifamily Advertising</h5>
                      <h5>#Multifamily Marketing</h5>
                    </div>
                    <div className={styles.multi1}>
                      <h5>#Social Media Advertising</h5>
                      <h5>#Renter Research</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div data-aos="fade-up" className={styles.mini}>
              <div className={styles.sol}>
                <img
                  src="https://solutions.rent.com/wp-content/uploads/2022/07/Reputation-SEO-blog-Blog-Banner.webp"
                  alt=""
                />
              </div>
              <div className={styles.sag}>
                <div className={styles.head}>
                  <p>03/20/2023</p>
                  <span className={styles.in}>
                    in
                    <span className={styles.on}>Onsite Effectiveness</span>
                  </span>
                </div>
                <div className={styles.middle}>
                  <h3>
                    Your Property’s Reputation Can Boost SEO and Renter Leads.
                    Here’s How.
                  </h3>
                </div>
                <div className={styles.foot}>
                  <div className={styles.about}>
                    <img
                      src="https://solutions.rent.com/wp-content/uploads/2022/07/Rachel-Richardson-CIRCLE-150x150-1.webp"
                      alt=""
                    />
                    <p>by Rachel Richardson</p>
                  </div>
                  <div className={styles.multi}>
                    <div className={styles.multi1}>
                      <h5>#Multifamily Advertising</h5>
                      <h5>#Multifamily Marketing</h5>
                    </div>
                    <div className={styles.multi1}>
                      <h5>#Social Media Advertising</h5>
                      <h5>#Renter Research</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div data-aos="fade-up" className={styles.mini}>
              <div className={styles.sol}>
                <img
                  src="https://solutions.rent.com/wp-content/uploads/2022/07/search-ads-not-showing.webp"
                  alt=""
                />
              </div>
              <div className={styles.sag}>
                <div className={styles.head}>
                  <p>03/20/2023</p>
                  <span className={styles.in}>
                    in
                    <span className={styles.on}>Onsite Effectiveness</span>
                  </span>
                </div>
                <div className={styles.middle}>
                  <h3>5 Reasons Why Your Search Ads Aren’t Showing</h3>
                </div>
                <div className={styles.foot}>
                  <div className={styles.about}>
                    <img
                      src="https://solutions.rent.com/wp-content/uploads/2022/07/Rachel-Richardson-CIRCLE-150x150-1.webp"
                      alt=""
                    />
                    <p>by Rachel Richardson</p>
                  </div>
                  <div className={styles.multi}>
                    <div className={styles.multi1}>
                      <h5>#Multifamily Advertising</h5>
                      <h5>#Multifamily Marketing</h5>
                    </div>
                    <div className={styles.multi1}>
                      <h5>#Social Media Advertising</h5>
                      <h5>#Renter Research</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div data-aos="fade-up" className={styles.mini}>
              <div className={styles.sol}>
                <img
                  src="https://solutions.rent.com/wp-content/uploads/2022/07/GettyImages-1277400719.webp"
                  alt=""
                />
              </div>
              <div className={styles.sag}>
                <div className={styles.head}>
                  <p>03/20/2023</p>
                  <span className={styles.in}>
                    in
                    <span className={styles.on}>Onsite Effectiveness</span>
                  </span>
                </div>
                <div className={styles.middle}>
                  <h3>
                    How Outsourcing Can Ease The Burden Off Your Onsite Staff
                  </h3>
                </div>
                <div className={styles.foot}>
                  <div className={styles.about}>
                    <img
                      src="https://solutions.rent.com/wp-content/uploads/2022/07/Rachel-Richardson-CIRCLE-150x150-1.webp"
                      alt=""
                    />
                    <p>by Rachel Richardson</p>
                  </div>
                  <div className={styles.multi}>
                    <div className={styles.multi1}>
                      <h5>#Multifamily Advertising</h5>
                      <h5>#Multifamily Marketing</h5>
                    </div>
                    <div className={styles.multi1}>
                      <h5>#Social Media Advertising</h5>
                      <h5>#Renter Research</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div data-aos="fade-up" className={styles.mini}>
              <div className={styles.sol}>
                <img
                  src="https://solutions.rent.com/wp-content/uploads/2022/07/Ad-Copy-Blog-Tips-Header-1.webp"
                  alt=""
                />
              </div>
              <div className={styles.sag}>
                <div className={styles.head}>
                  <p>03/20/2023</p>
                  <span className={styles.in}>
                    in
                    <span className={styles.on}>Onsite Effectiveness</span>
                  </span>
                </div>
                <div className={styles.middle}>
                  <h3>
                    7 Ad Copy Optimization Tips For Multifamily You Need To Try
                  </h3>
                </div>
                <div className={styles.foot}>
                  <div className={styles.about}>
                    <img
                      src="https://solutions.rent.com/wp-content/uploads/2022/07/Rachel-Richardson-CIRCLE-150x150-1.webp"
                      alt=""
                    />
                    <p>by Rachel Richardson</p>
                  </div>
                  <div className={styles.multi}>
                    <div className={styles.multi1}>
                      <h5>#Multifamily Advertising</h5>
                      <h5>#Multifamily Marketing</h5>
                    </div>
                    <div className={styles.multi1}>
                      <h5>#Social Media Advertising</h5>
                      <h5>#Renter Research</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div data-aos="fade-up" className={styles.mini}>
              <div className={styles.sol}>
                <img
                  src="https://solutions.rent.com/wp-content/uploads/2022/07/top-5-trends.webp"
                  alt=""
                />
              </div>
              <div className={styles.sag}>
                <div className={styles.head}>
                  <p>03/20/2023</p>
                  <span className={styles.in}>
                    in
                    <span className={styles.on}>Onsite Effectiveness</span>
                  </span>
                </div>
                <div className={styles.middle}>
                  <h3>Top 5 Multifamily Marketing Trends to Watch In 2022</h3>
                </div>
                <div className={styles.foot}>
                  <div className={styles.about}>
                    <img
                      src="https://solutions.rent.com/wp-content/uploads/2022/07/Rachel-Richardson-CIRCLE-150x150-1.webp"
                      alt=""
                    />
                    <p>by Rachel Richardson</p>
                  </div>
                  <div className={styles.multi}>
                    <div className={styles.multi1}>
                      <h5>#Multifamily Advertising</h5>
                      <h5>#Multifamily Marketing</h5>
                    </div>
                    <div className={styles.multi1}>
                      <h5>#Social Media Advertising</h5>
                      <h5>#Renter Research</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
