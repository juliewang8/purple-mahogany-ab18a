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

        </div>
      </div>
    </section>
    <SmallFooter />
  </Layout>
);

export default IndexPage;
