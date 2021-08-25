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
          <h2>Past Repertoire</h2>
        </div>
      </header>

      <div className="wrapper">
        <div className="inner">
          <h3 className="major yellow">Why mustard seed?</h3>
          <h3 className="major yellow">Mission Statement</h3>
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
