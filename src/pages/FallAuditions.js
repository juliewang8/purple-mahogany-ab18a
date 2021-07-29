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
          <h2>Fall 2021 Auditions</h2>
        </div>
      </header>

      <div className="wrapper">
        <div className="inner">
          <p>

          We will be in person for the Fall 2021 Semester!! Auditions will be held at Boston University’s CFA building in September. The audition cycle typically consists of the initial audition where auditionees sing a verse and chorus of a song for the group, callbacks, and a social event. Dates and details are still yet to be determined but keep an eye out on our website and social media channels for more details as the Fall semester gets closer. Feel free to reach out to us with any questions and we look forward to hearing from you!

          </p>

          <h3 className="major yellow">More information</h3>
          <p className="no-padding">As one of the Christian a cappella groups in Boston, Mustard Seed hopes to share the love of Christ and the transformative power of the Holy Spirit in our lives through song. 
          </p>
          <ul className="no-padding">
          <li>To communicate Christ-centered messages of love and joy through a cappella.</li>
          <li>To grow in our relationships with God and one another. </li>
          <li>To respond to the needs of the church and greater Boston community. </li>
          </ul>

        </div>
      </div>
    </section>
    <SmallFooter />
  </Layout>
);

export default IndexPage;
