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
          <h2>Unity in Discomfort</h2>
        </div>
      </header>

      <div className="wrapper">
        <div className="inner">
        <h2>A Conversation about Gender and Sexuality in the A Cappella Community</h2>
          <p>
The Boston University a cappella community has been focusing on and working towards making the a cappella community an inclusive and safe space. In the fall, they held a conference around race and diversity, in addition to collaborating on a community-wide Inclusivity Statement. This semester, our 2020-2021 president, Becks, had the chance to help plan a conference talking about gender and sexuality. This 2-hour event provided education, a speaker, and a chance to engage in conversation with other members of the a cappella community. Although our group has not always engaged with many other a cappella groups, the increased connection this past semester and year has been really exciting!
          </p>
          <p>Watch the Benefit Concert HERE.</p>
        </div>
      </div>
    </section>
    <SmallFooter />
  </Layout>
);

export default IndexPage;
