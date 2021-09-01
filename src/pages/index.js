import React from 'react';

import Layout from '../components/Layout';
import Footer from '../components/Footer';

import pic1 from '../assets/images/pic01.jpg';
import pic2 from '../assets/images/pic02.jpg';
import pic3 from '../assets/images/pic03.jpg';
import pic4 from '../assets/images/pic04.jpg';
import pic5 from '../assets/images/pic05.jpg';
import pic6 from '../assets/images/pic06.jpg';
import pic7 from '../assets/images/pic07.jpg';

import { Link } from 'gatsby';

import config from '../../config';
const IndexPage = () => (
  <Layout>
    <section id="banner">
      <div className="inner">
         <div style="border-radius:100%;">
          <img src="https://i.imgur.com/VAm8oLG.png?1" alt="" />
        </div> 
        <h2>{config.heading}</h2>
        <p>{config.subHeading}</p>
      </div>
    </section>

    <section id="wrapper">
      <section id="one" className="wrapper spotlight style1">
        <div className="inner">
                <a width="200px" height="200px" overflow="hidden" href="/LearnMore" className="image">
                    {/* <img src="https://static.wixstatic.com/media/149ad6_dbdf221a507d4096a26f5dd6131e7e05~mv2.jpg/v1/fill/w_2000,h_2000,al_c,q_85/149ad6_dbdf221a507d4096a26f5dd6131e7e05~mv2.webp" alt="" /> */}
                    <img src="https://i.imgur.com/7C3PTLH.jpg?1" alt="" />
                </a>
          <div className="content">
            <h2 className="major">Why mustard seed?</h2>
            <p>
The parable of the <i>mustard seed</i> is a story about a small dose of faith accomplishing much. Following this formula, Mustard Seed seeks to move heaven in two ways: to move the heart of God and to bring heaven to those who are empty. We exist to glorify God and to spread His love and message of salvation through song to the BU campus and beyond. Though the medium is music, the method is faith. God does all the work and we just get to believe and sing about it!
</p>
            <a href="/LearnMore" className="special">
              Learn more
            </a>
          </div>
        </div>
      </section>

      <section id="two" className="wrapper alt spotlight style2">
        <div className="inner">
          <a href="/Music" className="image">
          <div width="200px" height="200px" overflow="hidden">
            <img src="https://i.imgur.com/L6VN7Dt.jpg?1" alt="" />
            </div>
          </a>
          <div className="content">
            <h2 className="major">We have an album!</h2>
            <p>
              Metamorphosis is our very first album, and it is a representation of collaboration between current members and alumni as well as a testament to God's provision for our group through the pandemic.
            </p>
            <a href="/Music" className="special">
              Click to listen
            </a>
          </div>
        </div>
      </section>

      <section id="three" className="wrapper spotlight style3">
        <div className="inner">
          <a href="/Members" className="image">
            <img src="https://static.wixstatic.com/media/149ad6_dbdf221a507d4096a26f5dd6131e7e05~mv2.jpg/v1/fill/w_2000,h_2000,al_c,q_85/149ad6_dbdf221a507d4096a26f5dd6131e7e05~mv2.webp" alt="" />
          </a>
          <div className="content">
            <h2 className="major">Meet the Seeds</h2>
            <p>
            Get to know more about the members (and alumni!) of Mustard Seed from favorite shows to niche hobbies!
            </p>
            <a href="/Members" className="special">
              Read more
            </a>
          </div>
        </div>
      </section>

      <section id="four" className="wrapper alt style1">
        <div className="inner">
          <h2 className="major">the latest happenings</h2>
          <p>
            From concerts to auditions coming up soon, 
            make sure to keep up with the latest Mustard Seed events and news! 
          </p>
          <section className="features">
            <article>
              <a href="/FallAuditions" className="image">
                <img src={pic4} alt="" />
              </a>
              <h3 className="major">Fall 2021 auditions soon!</h3>
              <p>
                We will be in person for the Fall 2021 Semester!! Auditions will be held at Boston University’s CFA building in September. 
              </p>
              <a href="/FallAuditions" className="special">
                Learn more
              </a>
            </article>
            <article>
              <a href="/SpringShowcase" className="image">
                <img src="https://i.imgur.com/BRCE5xF.png" alt="" />
              </a>
              <h3 className="major">Spring 2021 Showcase</h3>
              <p>
                Despite doing the Spring 2021 semester remotely, we had the opportunity to put on a virtual showcase!
              </p>
              <a href="/SpringShowcase" className="special">
                Learn more
              </a>
            </article>
            <article>
              <a href="/OnlineBIDB" className="image">
                <img src={pic6} alt="" />
              </a>
              <h3 className="major">Online BIDB 2021</h3>
              <p>
                Mustard Seed had the honor of virtually hosting the annual “Break it Down Boston” event, or BIDB, this past Spring!
              </p>
              <a href="/OnlineBIDB" className="special">
                Learn more
              </a>
            </article>
            <article>
              <a href="/FCSConcert" className="image">
                <img src={pic7} alt="" />
              </a>
              <h3 className="major">FCS A Cappella Benefit Concert</h3>
              <p>
            We are honored to have been invited by UC Berkeley’s For Christ’s Sake to participate in the Nationwide Christian A Cappella Benefit Concert!

              </p>
              <a href="/FCSConcert" className="special">
                Learn more
              </a>
            </article>
          </section>
          <ul className="actions">
            <li>
              <a href="/Events" className="button">
             Browse All
              </a>
            </li>
          </ul>
        </div>
      </section>
    </section>
    <Footer />
  </Layout>
);

export default IndexPage;
