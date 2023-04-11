import React, { useEffect, useRef, useState } from "react";
import Button1 from "../../Components/Button/Button";
import styles from "./home.module.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import { AiOutlineDownload } from "react-icons/ai";
import { Link } from "react-router-dom";
import { BsFacebook } from "react-icons/bs";
import { GrTwitter } from "react-icons/gr";
import { ImLinkedin } from "react-icons/im";
import { BsInstagram } from "react-icons/bs";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
  FormControl,
  FormLabel,
  Input,
  useDisclosure,
} from "@chakra-ui/react";

import {
  Accordion,
  AccordionButton,
  Box,
  AccordionIcon,
  AccordionPanel,
  AccordionItem,
} from "@chakra-ui/react";

import Modal1 from "../../Components/Modal/Modal";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  
  const { isOpen, onOpen, onClose } = useDisclosure();
  const allinput1 = useRef();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const [fname, setfname] = useState("");
  const [lname, setlname] = useState("");
  const [cname, setcname] = useState("");
  const [website, setwebsite] = useState("");
  const [job, setjob] = useState("");
  const [phone, setphone] = useState("");
  const [email, setemail] = useState("");

  const [inputvalid, setinputvalid] = useState("");

  const [merror, setmerror] = useState(false);

  const modalbtn = (e) => {
    e.preventDefault();
    if (
      fname.length == 0 ||
      lname.length == 0 ||
      cname.length == 0 ||
      website.length == 0 ||
      job.length == 0 ||
      phone.length == 0 ||
      email.length == 0
    ) {
      setmerror(true);
    }
  };

  return (
    <React.Fragment>
      <div className={styles.first_section}>
        <div className="container">
          <div data-aos="fade-up" className={styles.items}>
            <div className={styles.sol}>
              <h1>
                Apartment marketing solutions that work as hard as you do.
                Period.
              </h1>
              <p>
                Rent. is more than a marketplace. We help you easily attract new
                renters, engage prospects during their search, and nurture
                resident relationships.
              </p>

              <div className={styles.btns}>
                <Button1 text={"Learn how"} className={styles.touch} />
                {/* <Button
                  text={"Get in touch"}
                  className={styles.explore}
                /> */}

                <Button className={styles.explore} onClick={onOpen}>
                  Get in touch
                </Button>

                <Modal
                  blockScrollOnMount={false}
                  isOpen={isOpen}
                  onClose={onClose}
                >
                  <ModalOverlay />
                  <ModalContent className={styles.modalcontent}>
                    <ModalCloseButton className={styles.closebtn} />
                    <ModalHeader className={styles.mheader}>
                      Tell us about yourself!
                    </ModalHeader>

                    <ModalBody className={styles.mbody}>
                      <div ref={allinput1} className={styles.allinput}>
                        <FormControl>
                          <Input
                            onChange={(e) => setfname(e.target.value)}
                            className={styles.minput}
                            placeholder="First name*"
                          />

                          {merror && fname.length == 0 ? (
                            <p>This field is required</p>
                          ) : (
                            ""
                          )}
                        </FormControl>

                        <FormControl mt={4}>
                          <Input
                            onChange={(e) => setlname(e.target.value)}
                            className={styles.minput}
                            placeholder="Last name*"
                          />

                          {merror && lname.length == 0 ? (
                            <p>This field is required</p>
                          ) : (
                            ""
                          )}
                        </FormControl>
                        <FormControl mt={4}>
                          <Input
                            onChange={(e) => setcname(e.target.value)}
                            className={styles.minput}
                            placeholder="Company name*"
                          />

                          {merror && cname.length == 0 ? (
                            <p>This field is required</p>
                          ) : (
                            ""
                          )}
                        </FormControl>
                        <FormControl mt={4}>
                          <Input
                            onChange={(e) => setwebsite(e.target.value)}
                            className={styles.minput}
                            placeholder="PMC Website*"
                          />

                          {merror && website.length == 0 ? (
                            <p>This field is required</p>
                          ) : (
                            ""
                          )}
                        </FormControl>

                        <FormControl mt={4}>
                          <Input
                            onChange={(e) => setjob(e.target.value)}
                            className={styles.minput}
                            placeholder="JOb Title"
                          />

                          {merror && job.length == 0 ? (
                            <p>This field is required</p>
                          ) : (
                            ""
                          )}
                        </FormControl>
                        <FormControl mt={4}>
                          <Input
                            onChange={(e) => setphone(e.target.value)}
                            className={styles.minput}
                            placeholder="Phone Number*"
                          />

                          {merror && phone.length == 0 ? (
                            <p>This field is required</p>
                          ) : (
                            ""
                          )}
                        </FormControl>

                        <FormControl mt={4}>
                          <Input
                            onChange={(e) => setemail(e.target.value)}
                            className={styles.minput}
                            placeholder="Buisness Email Adress"
                          />

                          {merror && email.length == 0 ? (
                            <p>This field is required</p>
                          ) : (
                            ""
                          )}
                        </FormControl>
                      </div>

                      <Button onClick={modalbtn}>Go</Button>
                    </ModalBody>
                  </ModalContent>
                </Modal>
              </div>
            </div>

            <div className={styles.img_overlay}>
              <div className={styles.imgg}>
                <img
                  src="https://solutions.rent.com/wp-content/uploads/2022/06/Rent.-LinkedIn-Covers-276-%C3%97-559-px.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div data-aos="fade-up" className={styles.second_section}>
        <div className="container">
          <div className={styles.items}>
            <div className={styles.sol}>
              <h2>Attract Qualified Renters</h2>
              <p>
                Attract high-quality leads that are ready to tour–and ultimately
                sign that lease–with listings that make the most of your budget
                and time. Rent. connects property owners and managers with close
                to 50 million home seekers¹ per month through our network of
                marketplaces. You can even reach in-market renters with search
                ads, social ads and email marketing solutions that are powered
                by our marketplace.
              </p>
              

              <Button className={styles.explore} onClick={onOpen}>
               Start listing
                </Button>

                <Modal
                  blockScrollOnMount={false}
                  isOpen={isOpen}
                  onClose={onClose}
                >
                  <ModalOverlay />
                  <ModalContent className={styles.modalcontent}>
                    <ModalCloseButton className={styles.closebtn} />
                    <ModalHeader className={styles.mheader}>
                      Tell us about yourself!
                    </ModalHeader>

                    <ModalBody className={styles.mbody}>
                      <div ref={allinput1} className={styles.allinput}>
                        <FormControl>
                          <Input
                            onChange={(e) => setfname(e.target.value)}
                            className={styles.minput}
                            placeholder="First name*"
                          />

                          {merror && fname.length == 0 ? (
                            <p>This field is required</p>
                          ) : (
                            ""
                          )}
                        </FormControl>

                        <FormControl mt={4}>
                          <Input
                            onChange={(e) => setlname(e.target.value)}
                            className={styles.minput}
                            placeholder="Last name*"
                          />

                          {merror && lname.length == 0 ? (
                            <p>This field is required</p>
                          ) : (
                            ""
                          )}
                        </FormControl>
                        <FormControl mt={4}>
                          <Input
                            onChange={(e) => setcname(e.target.value)}
                            className={styles.minput}
                            placeholder="Company name*"
                          />

                          {merror && cname.length == 0 ? (
                            <p>This field is required</p>
                          ) : (
                            ""
                          )}
                        </FormControl>
                        <FormControl mt={4}>
                          <Input
                            onChange={(e) => setwebsite(e.target.value)}
                            className={styles.minput}
                            placeholder="PMC Website*"
                          />

                          {merror && website.length == 0 ? (
                            <p>This field is required</p>
                          ) : (
                            ""
                          )}
                        </FormControl>

                        <FormControl mt={4}>
                          <Input
                            onChange={(e) => setjob(e.target.value)}
                            className={styles.minput}
                            placeholder="JOb Title"
                          />

                          {merror && job.length == 0 ? (
                            <p>This field is required</p>
                          ) : (
                            ""
                          )}
                        </FormControl>
                        <FormControl mt={4}>
                          <Input
                            onChange={(e) => setphone(e.target.value)}
                            className={styles.minput}
                            placeholder="Phone Number*"
                          />

                          {merror && phone.length == 0 ? (
                            <p>This field is required</p>
                          ) : (
                            ""
                          )}
                        </FormControl>

                        <FormControl mt={4}>
                          <Input
                            onChange={(e) => setemail(e.target.value)}
                            className={styles.minput}
                            placeholder="Buisness Email Adress"
                          />

                          {merror && email.length == 0 ? (
                            <p>This field is required</p>
                          ) : (
                            ""
                          )}
                        </FormControl>
                      </div>

                      <Button onClick={modalbtn}>Go</Button>
                    </ModalBody>
                  </ModalContent>
                </Modal>

              <div data-aos="fade-up" className={styles.foot}>
                <div className={styles.minimg}>
                  <img
                    src="https://solutions.rent.com/wp-content/uploads/2022/05/2-3.png"
                    alt=""
                  />
                  <img
                    src="https://solutions.rent.com/wp-content/uploads/2022/05/1-1.png"
                    alt=""
                  />
                </div>
                <div className={styles.minimg}>
                  <img
                    src="https://solutions.rent.com/wp-content/uploads/2022/05/3-1.png"
                    alt=""
                  />
                  <img
                    src="https://solutions.rent.com/wp-content/uploads/2022/05/4-1.png"
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div className={styles.sag}>
              <img
                src="https://solutions.rent.com/wp-content/uploads/2022/05/rent-our-network.png"
                alt=""
              />

              <div className={styles.mini1}>
                <p>Lower Cost Per Lead (year over year)²</p>
                <h5>16%</h5>
              </div>
              <div className={styles.mini2}>
                <p>More Leads Per Property (year over year)³</p>
                <h5>17%</h5>
              </div>
              <div className={styles.mini3}>
                <p>Tour Requests Per Month (average per property)⁴</p>
                <h5>19</h5>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.third_section}>
        <div className={styles.items}>
          <div className="container">
            <h1>Meet Your Next Resident</h1>
            <p>
              Inspire renters to take action and boost your property’s brand.
            </p>

            <div data-aos="fade-up" className={styles.item1}>
              <div className={styles.sol}>
                <div className={styles.overlay}></div>
                <div className={styles.imgg}>
                  <img
                    src="https://solutions.rent.com/wp-content/uploads/2022/05/rent-marketplace-1.png"
                    alt=""
                  />
                </div>

                <div className={styles.mini1}>
                  <p>Average monthly visitors</p>
                  <h5>50M</h5>
                </div>
                <div className={styles.mini2}>
                  <p>Search engine keywords targeted</p>
                  <h5>85M</h5>
                </div>
              </div>

              <div className={styles.sag}>
                <div className={styles.head}>
                  <h2>
                    Rent<span>Marketplace.</span>
                  </h2>
                  <p>
                    Renter-centric search experiences to find your newest
                    residents.
                  </p>
                </div>
                <ul>
                  <li> Access to nearly 50 million visitors per month. </li>
                  <li>
                    {" "}
                    Attract and engage renters with videos, virtual tours,
                    online applications, and included photoshoots.{" "}
                  </li>
                  <li>
                    {" "}
                    Easily manage listing content, tools and performance reports
                    with the RentHQ. client portal.{" "}
                  </li>
                  <li>
                    {" "}
                    Stand out to renters in their search with Profile Sync,
                    which effortlessly syndicates property data and images on
                    your Google listing.{" "}
                  </li>
                </ul>
                <Button1 text={"Learn more"} />
              </div>
            </div>

            <div data-aos="fade-up" className={styles.item2}>
              <div className={styles.sol}>
                <div className={styles.head}>
                  <h2>
                    Rent<span>Social.</span>
                  </h2>
                  <p>
                    Fair-housing compliant social ads that generate high-quality
                    renter leads.
                  </p>
                </div>
                <ul>
                  <li>
                    {" "}
                    Rent. reaches 50x more in-market renters than traditional
                    targeting with hyper-targeting powered by our unmatched
                    proprietary data from RentMarketplace. visitors.⁵{" "}
                  </li>
                  <li>
                    {" "}
                    Choose from turnkey ads that go live in as little as 24
                    hours or custom strategy based on your specific campaign
                    needs.{" "}
                  </li>
                  <li>
                    {" "}
                    Reach renters like never before on Facebook, Instagram,
                    Snapchat or TikTok.{" "}
                  </li>
                  <li>
                    {" "}
                    Deliver in-market renter leads directly to your property
                    management system with campaigns powered by unmatched
                    proprietary data.{" "}
                  </li>
                </ul>
                <Button1 text={"Learn more"} />
              </div>

              <div className={styles.sag}>
                <div className={styles.overlay}></div>
                <div className={styles.imgg}>
                  {" "}
                  <img
                    src="https://solutions.rent.com/wp-content/uploads/2022/05/Rent.-LinkedIn-Covers-276-%C3%97-559-px-384-%C3%97-531-px.png"
                    alt=""
                  />
                </div>

                <div className={styles.mini1}>
                  <p>
                    Increase in leads per month (when added to RentMarketplace.)
                  </p>
                  <h5>35%</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.fourth_section}>
        <div className="container">
          <div className={styles.items}>
            <div data-aos="fade-up" className={styles.head}>
              <h3>Be a leasing legend.</h3>
              <p>
                Learn how WestCorp boosted occupancy rates to 99% with Google
                PPC Ads powered by our unmatched proprietary data on in-market
                renters.
              </p>
            </div>

            <div data-aos="fade-up" className={styles.total}>
              <div className={styles.overlay}></div>

              <div className={styles.text}>
                <h2>
                  Serena Y. from WestCorp Management Group found a better way to
                  bring in qualified renters.
                </h2>

                <ul>
                  <li>34% higher conversion rates</li>
                  <li> 15-20% higher click-through rate</li>
                  <li>98-99% occupancy rates</li>
                </ul>

            

                
              <Button className={styles.explore} onClick={onOpen}>
              Download Now <AiOutlineDownload />
                </Button>

                <Modal
                  blockScrollOnMount={false}
                  isOpen={isOpen}
                  onClose={onClose}
                >
                  <ModalOverlay />
                  <ModalContent className={styles.modalcontent}>
                    <ModalCloseButton className={styles.closebtn} />
                    <ModalHeader className={styles.mheader}>
                      Tell us about yourself!
                    </ModalHeader>

                    <ModalBody className={styles.mbody}>
                      <div ref={allinput1} className={styles.allinput}>
                        <FormControl>
                          <Input
                            onChange={(e) => setfname(e.target.value)}
                            className={styles.minput}
                            placeholder="First name*"
                          />

                          {merror && fname.length == 0 ? (
                            <p>This field is required</p>
                          ) : (
                            ""
                          )}
                        </FormControl>

                        <FormControl mt={4}>
                          <Input
                            onChange={(e) => setlname(e.target.value)}
                            className={styles.minput}
                            placeholder="Last name*"
                          />

                          {merror && lname.length == 0 ? (
                            <p>This field is required</p>
                          ) : (
                            ""
                          )}
                        </FormControl>
                        <FormControl mt={4}>
                          <Input
                            onChange={(e) => setcname(e.target.value)}
                            className={styles.minput}
                            placeholder="Company name*"
                          />

                          {merror && cname.length == 0 ? (
                            <p>This field is required</p>
                          ) : (
                            ""
                          )}
                        </FormControl>
                        <FormControl mt={4}>
                          <Input
                            onChange={(e) => setwebsite(e.target.value)}
                            className={styles.minput}
                            placeholder="PMC Website*"
                          />

                          {merror && website.length == 0 ? (
                            <p>This field is required</p>
                          ) : (
                            ""
                          )}
                        </FormControl>

                        <FormControl mt={4}>
                          <Input
                            onChange={(e) => setjob(e.target.value)}
                            className={styles.minput}
                            placeholder="JOb Title"
                          />

                          {merror && job.length == 0 ? (
                            <p>This field is required</p>
                          ) : (
                            ""
                          )}
                        </FormControl>
                        <FormControl mt={4}>
                          <Input
                            onChange={(e) => setphone(e.target.value)}
                            className={styles.minput}
                            placeholder="Phone Number*"
                          />

                          {merror && phone.length == 0 ? (
                            <p>This field is required</p>
                          ) : (
                            ""
                          )}
                        </FormControl>

                        <FormControl mt={4}>
                          <Input
                            onChange={(e) => setemail(e.target.value)}
                            className={styles.minput}
                            placeholder="Buisness Email Adress"
                          />

                          {merror && email.length == 0 ? (
                            <p>This field is required</p>
                          ) : (
                            ""
                          )}
                        </FormControl>
                      </div>

                      <Button onClick={modalbtn}>Go</Button>
                    </ModalBody>
                  </ModalContent>
                </Modal>

                <div className={styles.imgg}>
                  <img
                    src="https://solutions.rent.com/wp-content/uploads/2022/06/serena-yang-transparent.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.fiveth_section}>
        <div className="container">
          <div data-aos="fade-up" className={styles.item1}>
            <div className={styles.head}>
              <h3>Make Resident Connections Count</h3>
              <p>
                Simplify communications and automate repetitive tasks for your
                property team.
              </p>
            </div>
            <div className={styles.imgg}>
              <div className={styles.overlay}></div>

              <img
                src="https://solutions.rent.com/wp-content/uploads/2022/05/rent-connect.png"
                alt=""
              />
            </div>

            <div className={styles.textt}>
              <div className={styles.head}>
                <h2>
                  Rent<span>Engage.</span>
                </h2>
                <p>
                  Your leasing team’s key to communicating with renters and
                  residents stress-free.
                </p>
              </div>
              <ul>
                <li>
                  24/7 leasing center support handles incoming calls, emails and
                  online chat.{" "}
                </li>
                <li>
                  Trusted, FHA-compliant solutions safely answer questions, book
                  appointments and qualify renter leads.{" "}
                </li>
                <li>
                  {" "}
                  Reach renters like never before on Facebook, Instagram,
                  Snapchat or TikTok.{" "}
                </li>
                <li>
                  {" "}
                  Nurture prospects and residents to lease and renewal with
                  automated, two-way text and email messages from a centralized
                  platform.
                </li>
              </ul>
              <Button1 text={"Learn more"} />
            </div>
          </div>

          <div data-aos="fade-up" className={styles.item2}>
            <div className={styles.imgg}>
              <div className={styles.overlay}></div>

              <img
                src="https://solutions.rent.com/wp-content/uploads/2022/05/Screen-Shot-2022-07-21-at-10.56.43-AM.jpg"
                alt=""
              />
            </div>

            <div className={styles.textt}>
              <div className={styles.head}>
                <h2>
                  Rent<span>Rep.</span>
                </h2>
                <p>
                  Take control of your online reputation and social presence to
                  boost renter engagement and SEO.
                </p>
              </div>
              <ul>
                <li>
                  Fair Housing-trained experts handle your review responses and
                  social media.
                </li>
                <li>
                  Effectively manage reviews, social, listings, surveys and more
                  with a best-in-class dashboard powered by Reputation.
                </li>
                <li>
                  Deliver fast and personalized responses to resident reviews.
                </li>
                <li>Highest-rated reputation management solution available.</li>
              </ul>
              <Button1 text={"Learn more"} />
            </div>
          </div>

          <div className={styles.item3}>
            <div data-aos="fade-up" className={styles.sol}>
              <h2>Target intelligently</h2>
              <p>
                Boost your efforts with hyper-targeted advertising solutions
                powered by our proprietary in-market renter data.
              </p>
            </div>

            <div data-aos="fade-up" className={styles.sag}>
              <div className={styles.img}>
                <img
                  src="https://solutions.rent.com/wp-content/uploads/2022/05/RentTarget-Examples.png"
                  alt=""
                />
              </div>

              <div className={styles.textt}>
                <div className={styles.head}>
                  <h2>
                    Rent<span>Target.</span>
                  </h2>
                  <p>
                    Reach the right renters with targeted display and email
                    campaigns.
                  </p>
                </div>
                <ul>
                  <li>
                    Sophisticated targeting that drives 3X more clicks⁷ from
                    in-market renters.
                  </li>
                  <li>
                    Get in front of renters right when they step into your area
                    with geo-fencing technology.
                  </li>
                  <li>
                    Fair Housing trained experts to safely maximize your reach
                    with in-market renters.
                  </li>
                </ul>
                <Button1 text={"Learn more"} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div data-aos="fade-up" className={styles.sixth_section}>
        <div className="container">
          <div className={styles.items}>
            <div className={styles.sol}>
              <h1>Frequently Asked Questions</h1>
              <p>Got questions? We have answers.</p>
            </div>

            <div className={styles.sag}>
              <Accordion defaultIndex={[0]} allowMultiple>
                <AccordionItem>
                  <h2>
                    <AccordionButton className={styles.acbtn}>
                      <Box
                        className={styles.actext}
                        as="span"
                        flex="1"
                        textAlign="left"
                      >
                        What is Rent.?
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel className={styles.nexttext} pb={4}>
                    We’re here to simplify your entire leasing lifecycle,
                    whether you’re building your property’s brand, attracting
                    and converting new renter leads, or nurturing current
                    residents for renewals. The Rent. platform powers a full
                    suite of best-in-class digital marketing solutions across
                    search advertising, social media, email marketing, web chat,
                    resident communication, reputation management and more.
                    Powered by unmatched proprietary data from our marketplace,
                    Rent. solutions allow you to reach high-intent renters who
                    are actively searching in your area. With the fastest search
                    speeds¹ , we help home seekers quickly find your property
                    and request a tour on RentMarketplace. Our marketplace,
                    including Rent.com, ApartmentGuide.com, Rentals.com and
                    Redfin.com, Rent. connects property owners and managers with
                    nearly 50 million home seekers each month. Wondering what
                    happened to RentPath? That’s us! Learn more about our
                    upgrade to Rent. and our new and improved capabilities here.
                    ¹ Google Pagespeed Insights, Data based on 5 major U.S.
                    markets, June 2022.
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                  <h2>
                    <AccordionButton className={styles.acbtn}>
                      <Box
                        className={styles.actext}
                        as="span"
                        flex="1"
                        textAlign="left"
                      >
                        What services do you offer?
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel className={styles.nexttext} pb={4}>
                    Though we are recognized for our vast reach across a network
                    of listing services, Rent. is here to take the hassle out of
                    the entire leasing lifecycle for property owners and
                    operators. Think of us as your go-to for attracting new
                    renters, engaging prospects during their search for a place,
                    and nurturing resident relationships. Our property marketing
                    and advertising solutions allow you to generate awareness
                    around your property brand, get in front of in-market
                    renters, and capture new renter leads. Our marketing
                    solutions include:
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                  <h2>
                    <AccordionButton className={styles.acbtn}>
                      <Box
                        className={styles.actext}
                        as="span"
                        flex="1"
                        textAlign="left"
                      >
                        Where do you operate?
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel className={styles.nexttext} pb={4}>
                    Rent. supports property owners and operators all across the
                    United States. We have a diverse and connected team of
                    remote and in-office employees, and our headquarters is in
                    Atlanta.
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                  <h2>
                    <AccordionButton className={styles.acbtn}>
                      <Box
                        className={styles.actext}
                        as="span"
                        flex="1"
                        textAlign="left"
                      >
                        How do I get started?
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel className={styles.nexttext} pb={4}>
                    Let’s get you set up! Complete the form on our Contact Us
                    page and our team will connect with you as soon as possible
                    to talk through your needs. We look forward to hearing from
                    you.
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                  <h2>
                    <AccordionButton className={styles.acbtn}>
                      <Box
                        className={styles.actext}
                        as="span"
                        flex="1"
                        textAlign="left"
                      >
                        I used your solutions in the past, what should I expect
                        with the new improvements?
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel className={styles.nexttext} pb={4}>
                    Our network is stronger than ever, with close to 50M unique
                    visitors each month across our sites. The new Rent. is much
                    more than a marketplace. Whether you’re building your
                    property’s brand, attracting and converting new renter
                    leads, or nurturing current residents for renewals–the Rent.
                    platform is here to take on your biggest challenges. With
                    unmatched audience targeting fueled by proprietary data from
                    the RentMarketplace, you can reach in-market renters through
                    a combination of tactics that works best for your team.
                    Search, social, display and email advertising tools save you
                    budget and time by seamlessly integrating with your
                    marketplace listings. That said, we’ve also optimized our
                    renter-centric marketplaces. And with the fastest search
                    speeds, we empower home seekers to quickly find your
                    property and request a tour. We’re also thrilled to
                    introduce Profile Sync, which seamlessly manages your Google
                    Business Profile and has proven to more than double actions
                    taken on the profile listing. We’re focused on the future of
                    your property. Rent. will continue to innovate and remove
                    friction for both clients and renters alike with the
                    addition of new features like configurable, templated
                    property websites to further amplify Rent. clients’ online
                    presence.
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                  <h2>
                    <AccordionButton className={styles.acbtn}>
                      <Box
                        className={styles.actext}
                        as="span"
                        flex="1"
                        textAlign="left"
                      >
                        I signed up for services prior to June 21, 2022. Has my
                        service changed? What are the new product names?
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel className={styles.nexttext} pb={4}>
                    You still have the same pricing, access to powerful
                    solutions and quality customer service that are part of your
                    plan. Your MyRentPath account has been upgraded to RentHQ,
                    where you can easily access all of your solutions and
                    reporting.
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                  <h2>
                    <AccordionButton className={styles.acbtn}>
                      <Box
                        className={styles.actext}
                        as="span"
                        flex="1"
                        textAlign="left"
                      >
                        I’m a current customer, how do I contact customer
                        support?
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel className={styles.nexttext} pb={4}>
                    You can reach us by phone at 877.999.4472 from 9:00 am to
                    6:00 pm EDT. Or shoot us an email at
                    customersuccess@rent.com.
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                  <h2>
                    <AccordionButton className={styles.acbtn}>
                      <Box
                        className={styles.actext}
                        as="span"
                        flex="1"
                        textAlign="left"
                      >
                        Who can I contact for questions on billing and my
                        invoices?
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel className={styles.nexttext} pb={4}>
                    We’re happy to help! Call us at 866.236.2510 to talk through
                    your billing questions.
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>

              <button className={styles.lastbtn}>
                <Link to={"/faq"}>Explore FAQs</Link>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.seventh_section}>
        <div className="container">
          <div data-aos="fade-up" className={styles.items}>
            <div className={styles.sol}>
              <h2>We are Rent.TM a Redfin Company</h2>
              <div className={styles.img}>
                <img
                  src="https://solutions.rent.com/wp-content/uploads/2022/05/rent-about-us.png"
                  alt=""
                />
              </div>
            </div>

            <div className={styles.sag}>
              <p>
                We’re here to simplify your entire leasing lifecycle, whether
                you’re building your property’s brand, attracting and converting
                new renter leads, or nurturing current residents for renewals.{" "}
              </p>

              <div className={styles.foot}>
                <span className={styles.btns}>
                  Follow us on social:
                  <BsFacebook />
                  <GrTwitter />
                  <ImLinkedin />
                  <BsInstagram />
                </span>

                <Button1 text={"About Rent."} className={styles.btn1} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.eightth_section}>
        <div className="container">
          <div className={styles.items}>
            <h2>Recent News</h2>

            <div data-aos="fade-up" className={styles.cards}>
              <div className={styles.mini}>
                <img
                  src="https://solutions.rent.com/wp-content/uploads/2023/02/TikTok-News-Header-1.png"
                  alt=""
                />
                <div className={styles.middle}>
                  <h6>Rent.</h6>
                  <h6>Feb 14, 2023</h6>
                </div>

                <div className={styles.foot}>
                  <h1>
                    {" "}
                    BusinessWire: Rent. announces Property Sites, a website
                    solution for the multifamily industry.
                  </h1>
                </div>
              </div>
              <div className={styles.mini}>
                <img
                  src="https://solutions.rent.com/wp-content/uploads/2023/01/Copy-of-square-property-sites-image.jpg"
                  alt=""
                />
                <div className={styles.middle}>
                  <h6>Business Wire</h6>
                  <h6>Jan 20, 2023</h6>
                </div>

                <div className={styles.foot}>
                  <h1>
                    Now Available! RentSocial. for TikTok connects properties
                    with renter audiences
                  </h1>
                  <p>
                    RentMarketplace. Property Sites: A beautiful branded hub for
                    your property, created at lightning speed!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
