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
          <h2>Virtual Break it Down Boston</h2>
        </div>
      </header>

      <div className="wrapper">
        <div className="inner">
          <p>
          Despite doing the Spring 2021 semester remotely, we had the opportunity to put on a virtual showcase! Our members spent the semester working hard to prepare mini projects in groups of two to four. A few members were also able to share testimonies about how God has been working in their lives, especially during this pandemic. Performances include songs from the Greatest Showman, HSMTMTS and by Pentatonix, Daniel Caesar, and Jon Bellion/Hillsong! 
          </p>
          <p>Check out the music, testimonies, and bad jokes HERE</p>
        </div>
      </div>
    </section>
    <SmallFooter />
  </Layout>
);

export default IndexPage;
