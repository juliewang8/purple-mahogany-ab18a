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
We were even able to put together the traditional group song: Check out “The Lord Bless You and Keep You” here. 
          </p>
          <p>
The theme of the night was “Towards the Son”. With the struggles that have come along with the past year, many have had a difficult time. But in this darkness there is a constant and loving light we can look towards and depend on. Jesus is the son and sun (haha)- a model of how to fully trust in God’s love for us and also the light we are moving towards. 
          </p>
        </div>
      </div>
    </section>
    <SmallFooter />
  </Layout>
);

export default IndexPage;
