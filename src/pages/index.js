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
        <div className="logo">
          <span className="icon fa-heart-o"></span>
        </div>
        <h2>{config.heading}</h2>
        <p>{config.subHeading}</p>
      </div>
    </section>

    <section id="wrapper">
      <section id="one" className="wrapper spotlight style1">
        <div className="inner">
          <a href="/LearnMore" className="image">
            <img src={pic1} alt="" />
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
            <img src={pic2} alt="" />
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
            <img src={pic3} alt="" />
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
              <a href="/#" className="image">
                <img src={pic4} alt="" />
              </a>
              <h3 className="major">Sed feugiat lorem</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id
                nulla dignissim dapibus ultrices.
              </p>
              <a href="/#" className="special">
                Learn more
              </a>
            </article>
            <article>
              <a href="/#" className="image">
                <img src={pic5} alt="" />
              </a>
              <h3 className="major">Nisl placerat</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id
                nulla dignissim dapibus ultrices.
              </p>
              <a href="/#" className="special">
                Learn more
              </a>
            </article>
            <article>
              <a href="/#" className="image">
                <img src={pic6} alt="" />
              </a>
              <h3 className="major">Ante fermentum</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id
                nulla dignissim dapibus ultrices.
              </p>
              <a href="/#" className="special">
                Learn more
              </a>
            </article>
            <article>
              <a href="/#" className="image">
                <img src={pic7} alt="" />
              </a>
              <h3 className="major">Fusce consequat</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id
                nulla dignissim dapibus ultrices.
              </p>
              <a href="/#" className="special">
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
