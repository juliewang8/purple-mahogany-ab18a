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
          <h2>For Christ's Sake A Cappella Benefit Concert</h2>
        </div>
      </header>

      <div className="wrapper">
        <div className="inner">
          <p>
In the Spring 2021 semester, one of our group’s goal was to outreach to the community around us. So, we were honored to be invited by UC Berkeley’s For Christ’s Sake to participate in the Nationwide Christian A Cappella Benefit Concert. Our recording of “Brother x Deep Water”, a mashup by Kodaline and American Authors played at the show. In collaboration with a cappella groups all over the country, we were able to raise funds for various charitable foundations. Considering those in the area around us, Mustard Seed chose Boston Healthcare for the Homeless, who has been distributing COVID vaccines to the homeless and marginally house individuals. Praise the Lord we raised almost $150 for the organization. 
          </p>
          <p>Watch the Benefit Concert <a href="https://www.youtube.com/watch?v=PFm1DKC8Gas">HERE</a>
        </div>
      </div>
    </section>
    <SmallFooter />
  </Layout>
);

export default IndexPage;
