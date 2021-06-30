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
          <h2>Our music</h2>
        </div>
      </header>

      <div className="wrapper">
        <div className="inner">
          <h2 className="major">Mustard Seed Presents: metamorphosis</h2>
          <p>
           not sure what this is going to look like yet but links to our album!! spotify, apple music, youtube(???)
          </p>

          <h2 className="major">Listen to our music</h2>
          <p>
            here there will be links to our youtube virtual performances + any recent stuff (embedded/linked), bigger past events such as concerts will be in different articles
          </p>

          <section className="features">
            <article>
              <a href="/#" className="image">
                <img src={pic4} alt="" />
              </a>
              <h3 className="major">Spring 2021 Showcase</h3>
              <a href="/#" className="special">
                See more
              </a>
            </article>
            <article>
              <a href="/#" className="image">
                <img src={pic5} alt="" />
              </a>
              <h3 className="major">Fall 2019 Concert</h3>
              <a href="/#" className="special">
                See more
              </a>
            </article>
          </section>
         <h2 className="major">Repertoire</h2>
         <h4>Current</h4>
         rain <br/> i wanna know you <br/><br/>
         <h4>Past</h4> <p>things to include in this section: title, original artist, soloist, arranger(???), and semester</p>
        </div>
      </div>
    </section>
    <SmallFooter />
  </Layout>
);

export default IndexPage;
