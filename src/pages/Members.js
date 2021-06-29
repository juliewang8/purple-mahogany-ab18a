import React from 'react';

import Layout from '../components/Layout';
import SmallFooter from '../components/SmallFooter';
import pic4 from '../assets/images/pic04.jpg';
import pic5 from '../assets/images/pic05.jpg';
import pic6 from '../assets/images/pic06.jpg';
import pic7 from '../assets/images/pic07.jpg';

const IndexPage = () => (
  <Layout fullMenu>
    <section id="wrapper">
      <header>
        <div className="inner">
          <h2>Meet the Seeds</h2>
        </div>
      </header>

      <div className="wrapper">
        <div className="inner">
          <h3 className="major">Current members</h3>
             <div className="box alt">
							<div className="row gtr-uniform">
								<div className="col-4"><span className="image fit"><img src={pic5} alt="" /></span><p>Amanda Kong</p></div>
								<div className="col-4"><span className="image fit"><img src={pic6} alt="" /></span><h3>Amanda Kong</h3></div>
								<div className="col-4"><span className="image fit"><img src={pic7} alt="" /></span><h3>Amanda Kong</h3></div>
								<div className="col-4"><span className="image fit"><img src={pic7} alt="" /></span><h3>Amanda Kong</h3></div>
								<div className="col-4"><span className="image fit"><img src={pic5} alt="" /></span><h3>Amanda Kong</h3></div>
								<div className="col-4"><span className="image fit"><img src={pic6} alt="" /></span><h3>Amanda Kong</h3></div>
								<div className="col-4"><span className="image fit"><img src={pic6} alt="" /></span><h3>Amanda Kong</h3></div>
								<div className="col-4"><span className="image fit"><img src={pic7} alt="" /></span><h3>Amanda Kong</h3></div>
								<div className="col-4"><span className="image fit"><img src={pic5} alt="" /></span><h3>Amanda Kong</h3></div>
							</div>
						</div>
          <h3 className="major">Alumni</h3>
          <p>
            Cras mattis ante fermentum, malesuada neque vitae, eleifend erat.
            Phasellus non pulvinar erat. Fusce tincidunt, nisl eget mattis
            egestas, purus ipsum consequat orci, sit amet lobortis lorem lacus
            in tellus. Sed ac elementum arcu. Quisque placerat auctor laoreet.
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
          </section>
        </div>
      </div>
    </section>
    <SmallFooter />
  </Layout>
);

export default IndexPage;
