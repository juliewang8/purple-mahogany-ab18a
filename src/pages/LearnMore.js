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
        <img className="image center" width="500px" height="auto" src="https://i.imgur.com/uzJcpNs.jpg" />
        <br></br>
        <br></br>
          <h3 className="major yellow">Why mustard seed?</h3>
          <p>
            For truly, I say to you, if you have faith like a grain of mustard seed, you will say to this mountain, 
            ‘Move from here to there,’ and it will move, and nothing will be impossible for you.” (Matthew 17:20 ESV)
          </p>

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
