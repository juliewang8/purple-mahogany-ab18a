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
Mustard Seed had the honor of virtually hosting the annual “Break it Down Boston” event, or BIDB, this past Spring! In a typical year, Christian a cappella groups from up and down the East Coast gather in Boston to perform and fellowship with one another. Because of the pandemic, we decided to go online. With around 70 attendees from our friends at Carnegie Mellon University, Johns Hopkins University, Rutgers University and many more, we had a blessed time of worship, games, and workshops. 
          </p>
          <p>
          Check out the music, testimonies, and bad jokes HERE
          </p>
        </div>
      </div>
    </section>
    <SmallFooter />
  </Layout>
);

export default IndexPage;
