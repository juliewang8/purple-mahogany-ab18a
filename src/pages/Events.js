import React from 'react';

import Layout from '../components/Layout';
import SmallFooter from '../components/SmallFooter';
import pic4 from '../assets/images/pic04.jpg';
import pic5 from '../assets/images/pic05.jpg';

const IndexPage = () => (
  <Layout fullMenu>
    <section id="wrapper">
      <header>
        <div className="inner">
          <h2>Events</h2>
        </div>
      </header>

      <div className="wrapper">
        <div className="inner">
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
                <img src={pic5} alt="" />
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
                Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id
                nulla dignissim dapibus ultrices.
              </p>
              <a href="/FCSConcert" className="special">
                Learn more
              </a>
            </article>


          </section>
        </div>
      </div>
    </section>
    <SmallFooter />
  </Layout>
);

export default IndexPage;
