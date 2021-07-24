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
          <h2>About us</h2>
          <p></p>
        </div>
      </header>

      <div className="wrapper">
        <div className="inner">
          <h3 className="major">Lorem ipsum dolor</h3>
          <p>
            Morbi mattis mi consectetur tortor elementum, varius pellentesque
            velit convallis. Aenean tincidunt lectus auctor mauris maximus, ac
            scelerisque ipsum tempor. Duis vulputate ex et ex tincidunt, quis
            lacinia velit aliquet. Duis non efficitur nisi, id malesuada justo.
            Maecenas sagittis felis ac sagittis semper. Curabitur purus leo
            donec vel dolor at arcu tincidunt bibendum. Interdum et malesuada
            fames ac ante ipsum primis in faucibus. Fusce ut aliquet justo.
            Donec id neque ipsum. Integer eget ultricies odio. Nam vel ex a orci
            fringilla tincidunt. Aliquam eleifend ligula non velit accumsan
            cursus. Etiam ut gravida sapien.
          </p>

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

          <h3 className="major">Vitae phasellus</h3>
          <p>
            Cras mattis ante fermentum, malesuada neque vitae, eleifend erat.
            Phasellus non pulvinar erat. Fusce tincidunt, nisl eget mattis
            egestas, purus ipsum consequat orci, sit amet lobortis lorem lacus
            in tellus. Sed ac elementum arcu. Quisque placerat auctor laoreet.
          </p>

        </div>
      </div>
    </section>
    <SmallFooter />
  </Layout>
);

export default IndexPage;
