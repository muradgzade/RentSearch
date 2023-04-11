import React from "react";
import styles from "./faq.module.scss";
import Accardion from "../../Components/Accardion/Accardion";

const Faq = () => {
  return (
    <>
      <div className={styles.header}>
        <div className="container">
          <div data-aos="fade-up" className={styles.items}>
            <div className={styles.sol}>
              <h1>Frequently Asked Questions.</h1>
            </div>
            <div className={styles.sag}>
              <div className={styles.overlay0}></div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.isotope}>
        <div className="container">
          <ul data-aos="fade-up">
            <li>General</li>
            <li>RentMarketplace.</li>
            <li>RentSocial.</li>
            <li>RentSearch.</li>
            <li>RentTarget.</li>
            <li>RentEngage.</li>
            <li>RentRep.</li>
          </ul>
        </div>
      </div>

      <div className={styles.accardion0}>
        <div className="container">
          <div data-aos="fade-up" className={styles.mini}>
            <h1>General</h1>
            <Accardion
              btnclassName={styles.total1}
              titleclass={styles.title}
              textclass={styles.text}
              title={
                "Who can I contact for questions on billing and my invoices?"
              }
              text={
                "We’re happy to help! Call us at 866.236.2510 to talk through your billing questions."
              }
            />
            <Accardion
              btnclassName={styles.total1}
              titleclass={styles.title}
              textclass={styles.text}
              title={
                "I signed up for services prior to June 21, 2022. Has my service changed? What are the new product names?"
              }
              text={
                "You still have the same pricing, access to powerful solutions and quality customer service that are part of your plan. Your MyRentPath account has been upgraded to RentHQ, where you can easily access all of your solutions and reporting. "
              }
            />
            <Accardion
              btnclassName={styles.total1}
              titleclass={styles.title}
              textclass={styles.text}
              title={
                "I’m a current customer, how do I contact customer support?"
              }
              text={
                "You can reach us by phone at 877.999.4472 from 9:00 am to 6:00 pm EDT. Or shoot us an email at customersuccess@rent.com."
              }
            />
            <Accardion
              btnclassName={styles.total1}
              titleclass={styles.title}
              textclass={styles.text}
              title={
                "I used your solutions in the past, what should I expect with the new improvements?"
              }
              text={
                "    With unmatched audience targeting fueled by proprietary data from the RentMarketplace, you can reach in-market renters through a combination of tactics that works best for your team. Search, social, display and email advertising tools save you budget and time by seamlessly integrating with your marketplace listings.   "
              }
            />
            <Accardion
              btnclassName={styles.total1}
              titleclass={styles.title}
              textclass={styles.text}
              title={"How do I get started?"}
              text={
                "Let’s get you set up! Complete the form on our Contact Us page and our team will connect with you as soon as possible to talk through your needs. We look forward to hearing from you."
              }
            />
            <Accardion
              btnclassName={styles.total1}
              titleclass={styles.title}
              textclass={styles.text}
              title={
                "Can I change my subscription or add on products at any time?"
              }
              text={
                "You can add on products at any time. For any questions regarding your current subscription, reach out to your dedicated Rent. representative or contact Customer Success to talk through your needs. "
              }
            />
            <Accardion
              btnclassName={styles.total1}
              titleclass={styles.title}
              textclass={styles.text}
              title={"What is Rent.?"}
              text={
                "We’re here to simplify your entire leasing lifecycle, whether you’re building your property’s brand, attracting and converting new renter leads, or nurturing current residents for renewals. The Rent. platform powers a full suite of best-in-class digital marketing solutions across search advertising, social media, email marketing, web chat, resident communication, reputation management and more. Powered by unmatched proprietary data from our marketplace, Rent. solutions allow you to reach high-intent renters who are actively searching in your area."
              }
            />
            <Accardion
              btnclassName={styles.total1}
              titleclass={styles.title}
              textclass={styles.text}
              title={"Where do you operate?"}
              text={
                "Rent. supports property owners and operators all across the United States. We have a diverse and connected team of remote and in-office employees, and our headquarters is in Atlanta.  "
              }
            />
          </div>

          <div data-aos="fade-up" className={styles.mini}>
            <h1>RentMarketplace.</h1>
            <Accardion
              btnclassName={styles.total1}
              titleclass={styles.title}
              textclass={styles.text}
              title={
                "I already use an ILS, is it worth spending money on more than one?"
              }
              text={
                "We’re happy to help! Call us at 866.236.2510 to talk through your billing questions."
              }
            />
            <Accardion
              btnclassName={styles.total1}
              titleclass={styles.title}
              textclass={styles.text}
              title={
                "I signed up for services prior to June 21, 2022. Has my service changed? What are the new product names?"
              }
              text={
                "You still have the same pricing, access to powerful solutions and quality customer service that are part of your plan. Your MyRentPath account has been upgraded to RentHQ, where you can easily access all of your solutions and reporting. "
              }
            />
          </div>
          <div data-aos="fade-up" className={styles.mini}>
            <h1>RentSocial.</h1>
            <Accardion
              btnclassName={styles.total1}
              titleclass={styles.title}
              textclass={styles.text}
              title={"Is there a direct competitor product?"}
              text={
                "No competitor offers the winning combination of leveraging data to target in-market renters, 24-hour go-live setup, and real-time CRM integration and campaign reporting that is possible with RentSocial."
              }
            />
            <Accardion
              btnclassName={styles.total1}
              titleclass={styles.title}
              textclass={styles.text}
              title={
                "What impressions, clicks, and lead counts should I expect with RentSocial"
              }
              text={
                "We optimize to the best result no matter the market and prioritize action over impressions. With RentSocial., every user that sees our ads has displayed the behavior of an in-market renter. Our products are differentiated by the quality of our audience, not the number of impressions. The size of your market and competing properties can also influence performance. For example, small markets like Laramie, WY have a small population of renters. Competitive markets like Seattle could also have higher costs due to the many ad buyers. "
              }
            />

            <Accardion
              btnclassName={styles.total1}
              titleclass={styles.title}
              textclass={styles.text}
              title={
                "I can already target interest groups on Facebook, how can I get better results with first-party data?"
              }
              text={
                "Targeting interest groups does not guarantee that your ad will reach an in-market renter audience. With interest groups, you can target people based on a subject, or page, that they have “liked”. Yet, interests do not indicate whether someone is currently looking for an apartment. You can actually reach 50x more in-market renters with RentSocial, which is powered by unmatched proprietary data to drive results. RentSocial is the data-driven way to reach in-market, high-intent renters on Facebook using our Marketplace’s first-party data from millions of monthly visitors to Rent. and ApartmentGuide. On average, Rent. customers who added turnkey social advertising to their Marketplace package saw a 35% increase in leads per month. "
              }
            />

            <Accardion
              btnclassName={styles.total1}
              titleclass={styles.title}
              textclass={styles.text}
              title={
                "We can create Facebook campaigns on our own, what are the benefits of investing in outside support?"
              }
              text={
                "You would have to spend at least 50x more with another provider to reach the same number of in-market renters. Without access to first-party data, you can only target broad interest groups that do not indicate whether someone is looking for an apartment. This leads to wasted ad budget from targeting a broad audience of users who are not necessarily in the market for a new place. You’re essentially putting up a digital billboard and hoping an in-market renter sees it.  "
              }
            />
          </div>
          <div data-aos="fade-up" className={styles.mini}>
            <h1>RentSearch.</h1>
            <Accardion
              btnclassName={styles.total1}
              titleclass={styles.title}
              textclass={styles.text}
              title={
                "Do I need a high ad budget to get started with RentSearch.?"
              }
              text={
                "We’re happy to help! Call us at 866.236.2510 to talk through your billing questions."
              }
            />
            <Accardion
              btnclassName={styles.total1}
              titleclass={styles.title}
              textclass={styles.text}
              title={
                "We currently run our own PPC campaigns. What are the benefits of investing in third-party support?"
              }
              text={
                "You still have the same pricing, access to powerful solutions and quality customer service that are part of your plan. Your MyRentPath account has been upgraded to RentHQ, where you can easily access all of your solutions and reporting. "
              }
            />
          </div>
          <div data-aos="fade-up" className={styles.mini}>
            <h1>RentTarget.</h1>
            <Accardion
              btnclassName={styles.total1}
              titleclass={styles.title}
              textclass={styles.text}
              title={"What is geofencing?"}
              text={
                "We’re happy to help! Call us at 866.236.2510 to talk through your billing questions."
              }
            />
            <Accardion
              btnclassName={styles.total1}
              titleclass={styles.title}
              textclass={styles.text}
              title={
                "I’m already getting leads with listings and/or other advertising. What are the benefits of adding more capabilities?"
              }
              text={
                "You still have the same pricing, access to powerful solutions and quality customer service that are part of your plan. Your MyRentPath account has been upgraded to RentHQ, where you can easily access all of your solutions and reporting. "
              }
            />
          </div>

          <div data-aos="fade-up" className={styles.mini}>
            <h1>RentEngage.</h1>
            <Accardion
              btnclassName={styles.total1}
              titleclass={styles.title}
              textclass={styles.text}
              title={
                "Calls are typically handled by our internal team. What are the benefits of getting outside support?"
              }
              text={
                "We’re happy to help! Call us at 866.236.2510 to talk through your billing questions."
              }
            />
            <Accardion
              btnclassName={styles.total1}
              titleclass={styles.title}
              textclass={styles.text}
              title={"Does this integrate with my current software? "}
              text={
                "You still have the same pricing, access to powerful solutions and quality customer service that are part of your plan. Your MyRentPath account has been upgraded to RentHQ, where you can easily access all of your solutions and reporting. "
              }
            />
            <Accardion
              btnclassName={styles.total1}
              titleclass={styles.title}
              textclass={styles.text}
              title={
                "What are the RentEngage. messaging capabilities and what else is included in the marketing platform?"
              }
              text={
                "You can reach us by phone at 877.999.4472 from 9:00 am to 6:00 pm EDT. Or shoot us an email at customersuccess@rent.com."
              }
            />
            <Accardion
              btnclassName={styles.total1}
              titleclass={styles.title}
              textclass={styles.text}
              title={
                "I used your solutions in the past, what should I expect with the new improvements?"
              }
              text={
                "  How does RentEngage. make my communications with renters and residents simpler? "
              }
            />
          </div>

          <div data-aos="fade-up" className={styles.mini}>
            <h1>RentEngage.</h1>
            <Accardion
              btnclassName={styles.total1}
              titleclass={styles.title}
              textclass={styles.text}
              title={"How does online reputation impact my property?"}
              text={
                "We’re happy to help! Call us at 866.236.2510 to talk through your billing questions."
              }
            />
            <Accardion
              btnclassName={styles.total1}
              titleclass={styles.title}
              textclass={styles.text}
              title={
                "What are the benefits of reputation management solutions versus relying on my in-house team?"
              }
              text={
                "You still have the same pricing, access to powerful solutions and quality customer service that are part of your plan. Your MyRentPath account has been upgraded to RentHQ, where you can easily access all of your solutions and reporting. "
              }
            />
            <Accardion
              btnclassName={styles.total1}
              titleclass={styles.title}
              textclass={styles.text}
              title={"What is reputation management?"}
              text={
                "You can reach us by phone at 877.999.4472 from 9:00 am to 6:00 pm EDT. Or shoot us an email at customersuccess@rent.com."
              }
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
