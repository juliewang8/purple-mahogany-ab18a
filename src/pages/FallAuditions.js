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
          <h2>Fall 2021 Auditions</h2>
        </div>
      </header>

      <div className="wrapper">
        <div className="inner">
        <center>
            <img className="image" src="https://i.imgur.com/L6VN7Dt.jpg?1"></img>
        </center>
          <p>
          We will be in person for the Fall 2021 Semester!! 
          Auditions will be held at Boston University’s CAS building in September. 
          The audition cycle typically consists of the initial audition where 
          auditionees sing a verse and chorus of a song for the group, callbacks, 
          and a social event. 
          <br/><br/>
            Auditions this year will be held on Saturday, 9/11 from 2-6 PM AND Sunday, 9/12 from 2-6 PM. 
            Check out THIS WEBSITE for more information, and sign up for auditions <a href="https://docs.google.com/forms/d/1LjR3jaxAs4TdpHVfu0H3D_NzbFKOu8oSkv9iMBPQLio/edit">HERE</a>.
          Feel free to reach out to us with any questions and we look forward to hearing from you!
          </p>

        </div>
      </div>
    </section>
    <SmallFooter />
  </Layout>
);

export default IndexPage;
