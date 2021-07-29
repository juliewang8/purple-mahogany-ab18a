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
          <h2>About us</h2>
        </div>
      </header>

      <div className="wrapper">
        <div className="inner">
          <h3 className="major">Why mustard seed?</h3>
          <p>
            For truly, I say to you, if you have faith like a grain of mustard seed, you will say to this mountain, 
            ‘Move from here to there,’ and it will move, and nothing will be impossible for you.” (Matthew 17:20 ESV)
          </p>

          <h3 className="major">Mission Statement</h3>
          <p>As one of the Christian a cappella groups in Boston, Mustard Seed hopes to share the love of Christ and the transformative power of the Holy Spirit in our lives through song. 
          </p>
          <ul>
          <li></li>
          <li></li>
          <li></li>
          </ul>

        </div>
      </div>
    </section>
    <SmallFooter />
  </Layout>
);

export default IndexPage;
