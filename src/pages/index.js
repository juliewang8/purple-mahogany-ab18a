import React from 'react';

import Layout from '../components/Layout';
import Footer from '../components/Footer';

import pic1 from '../assets/images/pic01.jpg';
import pic2 from '../assets/images/pic02.jpg';
import pic3 from '../assets/images/pic03.jpg';
import pic4 from '../assets/images/pic04.jpg';
import pic5 from '../assets/images/pic05.jpg';
import pic6 from '../assets/images/pic06.jpg';
import pic7 from '../assets/images/pic07.jpg';

import { Link } from 'gatsby';

import config from '../../config';
const IndexPage = () => (
  <Layout>
    <section id="banner">
      <div className="inner">
        <div className="logo">
          <span className="icon fa-smile-o"></span>
        </div>
        <h2>{config.heading}</h2>
        <p>{config.subHeading}</p>
      </div>
    </section>

    <section id="wrapper">
      <section id="one" className="wrapper spotlight style1">
        <div className="inner">
          <a href="/#" className="image">
            <img src={pic1} alt="" />
          </a>
          <div className="content">
            <h2 className="major">Why mustard seed?</h2>
            <p>
              The mustard seed, which is the smallest of all seeds, is mentioned several times throughout the Bible.</p>
        <p>
Matthew 17:20
So Jesus said to them, "Because of your unbelief; for assuredly, I say to you, if you have faith as a mustard seed, you will say to this mountain, 'Move from here to there,' and it will move; and nothing will be impossible for you.
​
Jesus Christ, our Lord and Savior, tells His children that even with just a tiny amount of faith, great things that seem impossible can be possible. Christ also mentions the mustard seed in the Parable of the Mustard Seed.
​
Matthew 13:31-32
Another parable He put forth to them, saying: "The kingdom of heaven is like a mustard seed, which a man took and sowed in his field, which indeed is the least of all seeds; but when it is grown it is greater than the herbs and becomes a tree, so that the birds of the air come and nest in its branches."
​
Through parables, Jesus imparted truth using stories that were relatable to the people. The sower is Jesus Christ himself, sowing the mustard seed, which represents the Gospel. Although at first the seed is very tiny, it can grow into a large shrub about 10 feet high. Likewise, the Gospel starts out very small but can grow to reach millions of people throughout the world, providing refuge to the birds in its branches.
            </p>
            <a href="/LearnMore" className="special">
              Learn more
            </a>
          </div>
        </div>
      </section>

      <section id="two" className="wrapper alt spotlight style2">
        <div className="inner">
          <a href="/#" className="image">
            <img src={pic2} alt="" />
          </a>
          <div className="content">
            <h2 className="major">Meet the Seeds</h2>
            <p>
              not sure what to include here suggestions welcome lmao
            </p>
            <a href="/Members" className="special">
              Read more
            </a>
          </div>
        </div>
      </section>

      <section id="three" className="wrapper spotlight style3">
        <div className="inner">
          <a href="/#" className="image">
            <img src={pic3} alt="" />
          </a>
          <div className="content">
            <h2 className="major">We have an album!</h2>
            <p>
              blurb about something something recorded album virtual collab w alumni something 
            </p>
            <a href="/Music" className="special">
              click to listen
            </a>
          </div>
        </div>
      </section>

      <section id="four" className="wrapper alt style1">
        <div className="inner">
          <h2 className="major">the latest happenings</h2>
          <p>
            haven't really finalized what i want on this page yet – i'm thinking we can use it as like
            a news page and we can include things like: auditions soon!! or: we just had a concert yay!!
            and in the music page some of the bigger events would point back to a "news page". and some of the 
            concert/music stuff would also point back to our music page, etc etc
          </p>
          <section className="features">
            <article>
              <a href="/#" className="image">
                <img src={pic4} alt="" />
              </a>
              <h3 className="major">Sed feugiat lorem</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id
                nulla dignissim dapibus ultrices.
              </p>
              <a href="/#" className="special">
                Learn more
              </a>
            </article>
            <article>
              <a href="/#" className="image">
                <img src={pic5} alt="" />
              </a>
              <h3 className="major">Nisl placerat</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id
                nulla dignissim dapibus ultrices.
              </p>
              <a href="/#" className="special">
                Learn more
              </a>
            </article>
            <article>
              <a href="/#" className="image">
                <img src={pic6} alt="" />
              </a>
              <h3 className="major">Ante fermentum</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id
                nulla dignissim dapibus ultrices.
              </p>
              <a href="/#" className="special">
                Learn more
              </a>
            </article>
            <article>
              <a href="/#" className="image">
                <img src={pic7} alt="" />
              </a>
              <h3 className="major">Fusce consequat</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id
                nulla dignissim dapibus ultrices.
              </p>
              <a href="/#" className="special">
                Learn more
              </a>
            </article>
          </section>
          <ul className="actions">
            <li>
              <a href="/Elements" className="button">
             Browse All
              </a>
            </li>
          </ul>
        </div>
      </section>
    </section>
    <Footer />
  </Layout>
);

export default IndexPage;
