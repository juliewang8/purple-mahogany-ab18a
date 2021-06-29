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
          <h2>Meet the Seeds</h2>
        </div>
      </header>

      <div className="wrapper">
        <div className="inner">
          <h3 className="major">Current members</h3>
        <div className="box alt">
							<div className="row gtr-uniform">
								<div className="col-4"><span className="image fit"><img src={'https://i.imgur.com/kAz2mcZ.jpeg'} alt="" /></span><h3>Amanda Kong</h3></div>
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

          <p>
            Vestibulum ultrices risus velit, sit amet blandit massa auctor sit
            amet. Sed eu lectus sem. Phasellus in odio at ipsum porttitor mollis
            id vel diam. Praesent sit amet posuere risus, eu faucibus lectus.
            Vivamus ex ligula, tempus pulvinar ipsum in, auctor porta quam.
            Proin nec commodo, vel scelerisque nisi scelerisque. Suspendisse id
            quam vel tortor tincidunt suscipit. Nullam auctor orci eu dolor
            consectetur, interdum ullamcorper ante tincidunt. Mauris felis nec
            felis elementum varius.
          </p>

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
