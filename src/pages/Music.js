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
                  <iframe src="https://open.spotify.com/embed/album/6dIzQjsSJbw8qI8mzzVe0l" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            <br></br>
             <br></br>
          <h2 className="major">Mustard Seed Presents: metamorphosis</h2>
          <div>

          <p> We are so proud to present our very first album, Metamorphosis! Since the group wasn't able to meet in person 
          for the second half of the Spring '20 semester and the entirety of the Fall '20 semester, 
          we decided to record some of our songs and get them mixed into an album. In this album you'll also find songs performed by alumni that we are honored
          to release alongside songs from our current members.</p>
          <p>
          The name <i>metamorphosis</i> is representative of the transformation that we have in Jesus Christ, a theme 
          that is woven throughout the lyrics of these five songs. From cries of desperation to shouts of joy, Metamorphosis represents the journeys that we take as believers.</p>
           </div>

          <h2 className="major">Listen to our music</h2>
          <p>
          Below you'll find some of the music videos for the virtual performances we did over the Fall '20 semester. Enjoy!
          <br></br>
          <br></br>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/8GkZw-oxZdM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <br></br><br></br>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/YEdJiYG-6wQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </p>

          <section className="features">
            <article>
              <a href="/#" className="image">
                <img src={pic4} alt="" />
              </a>
              <h3 className="major">Spring 2021 Showcase</h3>
              <a href="/S" className="special">
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
         <h3>Current</h3>
         Rain - Nick Fabian (arr. Jeremy Yeung) <br/>
        I Wanna Know You - Dante Bowe (arr. Julie Wang) <br/>
        How Deep is Your Love - PJ Morton ft. Yebba (arr. Hannah Loo)<br/>
        Hollow - Tori Kelly<br/>
        Rather Be - Clean Bandit ft. Jess Glynn (arr. Timothy Li)<br/>
        <br></br>
         <a href="/PastRep"><h3>Click here for past repertoire</h3></a> 
         <h2 className="major"></h2>
        </div>
      </div>
    </section>
    <SmallFooter />
  </Layout>
);

export default IndexPage;
