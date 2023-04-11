import React, { useRef, useState } from "react";
import Button1 from "../../Button/Button";
import styles from "./navbar.module.scss";
import { AiOutlineDown, AiOutlineArrowLeft } from "react-icons/ai";
import { VscThreeBars } from "react-icons/vsc";
import { BsArrowRightCircle } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Aos } from "aos";
import "aos/dist/aos.css";

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

const Navbar = () => {
  const Nextotal = useRef();
  const opensvg = useRef();
  const closesvg = useRef();
  const Solution = useRef();
  const Company = useRef();
  const Resources = useRef();
  const Openmenu = () => {
    // Nextotal.current.style.display="block"
    Nextotal.current.style.transform = "translateX(0)";
    opensvg.current.style.display = "none";
    closesvg.current.style.display = "block";
  };
  const Closemenu = () => {
    // Nextotal.current.style.display="none"

    Nextotal.current.style.transform = "translateX(1560px)";
    closesvg.current.style.display = "none";
    opensvg.current.style.display = "block";
  };

  const SolutionOpen = () => {
    Solution.current.style.transform = "translateY(-390px)";
  };
  const CloseSolution = () => {
    Solution.current.style.transform = "translateY(550px)";
  };

  const CompanyOpen = () => {
    Company.current.style.transform = "translateY(-870px)";
  };
  const CloseCompany = () => {
    Company.current.style.transform = "translateY(550px)";
  };

  const ResourcesOpen = () => {
    Resources.current.style.transform = "translateY(-1375px)";
  };
  const CloseResources = () => {
    Resources.current.style.transform = "translateY(550px)";
  };

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
    <nav>
      <div className={styles.bigsize_nav}>
        <div className="container">
          <div className={styles.nav_head}>
            <div className="row ">
              <div className="col-2">
                <div className={styles.img}>
                  <Link to={"/"}>
                    {" "}
                    <img
                      src="https://solutions.rent.com/wp-content/uploads/2022/06/2x-res.png"
                      alt=""
                    />
                  </Link>
                </div>
              </div>
              <div className="col-7">
                <ul>
                  <li className={styles.lii}>
                    <Link to={"/"}>Home</Link>
                  </li>
                  <li className={styles.solutionli}>
                    <div className={styles.solution}>
                      Solutions <AiOutlineDown />
                    </div>
                    <div className={styles.solution_text}>
                      <div className={styles.totall}>
                        <div className={styles.sol}>
                          <h1>Solutions</h1>
                          <div className={styles.total_ul}>
                            <ul>
                              <li>
                                Rent <span>Marketplace</span>
                              </li>
                              <li>
                                Rent <span>Social</span>
                              </li>
                              <li>
                                Rent <span>Engage</span>
                              </li>
                            </ul>
                            <ul>
                              <li>
                                Rent <span>Search</span>
                              </li>
                              <li>
                                Rent <span>Target</span>
                              </li>
                              <li>
                                Rent <span>Rep</span>
                              </li>
                            </ul>
                          </div>
                          <Button1 text={"Explore all"} />
                        </div>

                        <div className={styles.sag}>
                          <div className={styles.total}>
                            <div className={styles.imgg}>
                              <img
                                src="https://solutions.rent.com/wp-content/uploads/2022/09/budget-season-1-header-image.jpg"
                                alt=""
                              />
                            </div>
                            <div className={styles.textt}>
                              <div className={styles.head}>
                                <Button1 text={"Featured"} />
                                <h5>09/14/2022</h5>
                              </div>
                              <div className={styles.body}>
                                <p>
                                  3 ways to get more from your property’s
                                  marketing budget
                                </p>
                                <h6>
                                  Explore <AiOutlineArrowLeft />{" "}
                                </h6>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className={styles.company}>
                    Company <AiOutlineDown />
                    <div className={styles.company_nextall}>
                      <div className={styles.company_next}>
                        <div className={styles.sag}>
                          <p>
                            <Link to={"/about"}>About</Link>
                          </p>
                          <p>
                            <Link to={"/news"}>News</Link>
                          </p>
                        </div>
                        <div className={styles.sol}>
                          <p>
                            <Link to={"/faq"}>Faq</Link>
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className={styles.lii}>
                    <Link to={"/blog"}>Blog</Link>{" "}
                  </li>

                  <li className={styles.resourceli}>
                    <div className={styles.resource}>
                      Resources <AiOutlineDown />
                    </div>
                    <div className={styles.resource_text}>
                      <div className={styles.totall}>
                        <div className={styles.sol}>
                          <h1>Resources</h1>
                          <div className={styles.total_ul}>
                            <ul>
                              <li>
                                <span>Webinars</span>
                              </li>
                              <li>
                                <span>Checklists</span>
                              </li>
                            </ul>
                            <ul>
                              <li>
                                <span>Reports</span>
                              </li>
                              <li>
                                <span>Assessments</span>
                              </li>
                            </ul>
                          </div>
                          <Button1 text={"Explore all"} />
                        </div>

                        <div className={styles.sag}>
                          <div className={styles.total}>
                            <div className={styles.imgg}>
                              <img
                                src="https://solutions.rent.com/wp-content/uploads/2022/12/Great-Resigation-Webinar-Thumbnail-image.jpg"
                                alt=""
                              />
                            </div>
                            <div className={styles.textt}>
                              <div className={styles.head}>
                                <Button1 text={"Featured"} />
                                <h5>09/14/2022</h5>
                              </div>
                              <div className={styles.body}>
                                <p>
                                  How Property Teams Can Overcome Staff Turnover
                                </p>
                                <h6>
                                  Explore <AiOutlineArrowLeft />
                                </h6>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="col-3 ">
                <div className={styles.sag_nav}>
                  <p>Client login</p>

                  <Button className={styles.btn_nav} onClick={onOpen}>
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
            </div>
          </div>
        </div>
      </div>

      <div className={styles.mobile_nav}>
        <div className={styles.mobile_head}>
          <div className={styles.sol}>
            <Link to={"/"}>
              <img
                src="https://solutions.rent.com/wp-content/uploads/2022/06/2x-res.png"
                alt=""
              />
            </Link>
          </div>

          <div className={styles.sag}>
            <div ref={opensvg} className={styles.svg1}>
              <VscThreeBars onClick={Openmenu} />
            </div>

            <div ref={closesvg} className={styles.svg2}>
              <AiOutlineClose onClick={Closemenu} />
            </div>
          </div>
        </div>

        <div className={styles.next_total} ref={Nextotal}>
          <div className="row align-items-center">
            <div className="col-6">
              <ul>
                <li onClick={SolutionOpen}>
                  Solutions <BsArrowRightCircle />
                </li>
                <li onClick={CompanyOpen}>
                  Company <BsArrowRightCircle />
                </li>
                <li onClick={Closemenu} ><Link to={'./blog'} >Blog</Link></li>
                <li onClick={ResourcesOpen}>
                  Resources <BsArrowRightCircle />
                </li>
              </ul>
              <div className={styles.buttons}>

                <Button className={styles.touch} onClick={onOpen}>
                    Get in touch
                  </Button>

                  <Modal
                  className={styles.modalll}
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
                <Button1 text={"Client login"} className={styles.client} />
              </div>

              <div className={styles.next_itemss}>
                <div className={styles.solutions_items} ref={Solution}>
                  <p onClick={CloseSolution}>Back</p>
                  <ul>
                    <li>
                      Rent<span>Marketplace</span>
                    </li>
                    <li>
                      Rent<span>Social</span>
                    </li>
                    <li>
                      Rent<span>Engage</span>
                    </li>

                    <li>
                      Rent<span>Search</span>
                    </li>
                    <li>
                      Rent<span>Target</span>
                    </li>
                    <li>
                      Rent<span>Rep</span>
                    </li>
                  </ul>
                </div>

                <div className={styles.company_items} ref={Company}>
                  <p onClick={CloseCompany}>Back</p>
                  <ul>
                    <li onClick={Closemenu} >
                      <Link to={"/about"}> About</Link>
                    </li>
                    <li onClick={Closemenu} >
                      <Link to={"/news"}> News</Link>
                    </li>
                    <li onClick={Closemenu} >
                      <Link to={"/faq"}> Faq</Link>
                    </li>
                  </ul>
                </div>

                <div className={styles.resources_items} ref={Resources}>
                  <p onClick={CloseResources}>Back</p>
                  <ul>
                    <li>Webinars</li>
                    <li>Reports</li>
                    <li>Checklists</li>

                    <li>Assessments</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-6">
              <div className={styles.overlay}></div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
