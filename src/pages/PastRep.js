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
          <h3 className="major">2020-2021</h3>
          <h3 className="major">2019-2020</h3>
          <h3 className="major">2018-2019</h3>
          <h3 className="major">2017-2018</h3>

          <h3 className="major">2018-2019</h3>
          <h3 className="major">2017-2018</h3>

          <h3 className="major">2016-2017</h3>
          <h3 className="major">2015-2016</h3>

          <h3 className="major">2014-2015</h3>
          <h3 className="major">2013-2014</h3>

          <h3 className="major">2012-2013</h3>
          <h3 className="major">2011-2012</h3>

          <h3 className="major">pre-2008</h3>

        </div>
      </div>
    </section>
    <SmallFooter />
  </Layout>
);

export default IndexPage;
