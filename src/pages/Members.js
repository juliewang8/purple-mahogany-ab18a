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
          <h2 className="major">Current members</h2>
             <div className="box alt">
                    <div className="row gtr-uniform aln-center">
                        <div className="col-4"><span className="image fit"><img src={pic5} alt="" /></span>
                        <h3 className="nopadding align-center">Jenna Riedl</h3><p className="align-center">PRESIDENT</p></div>
                        <div className="col-4"><span className="image fit"><img src={pic6} alt="" /></span
                        ><h3 className="nopadding align-center">Jeremy Yeung</h3><p className="align-center">VP / MUSICAL DIRECTOR</p></div>
                        <div className="col-4"><span className="image fit"><img src={pic6} alt="" /></span
                        ><h3 className="nopadding align-center">Jeremy Yeung</h3><p className="align-center">VP / MUSICAL DIRECTOR</p></div>
                                                <div className="col-4"><span className="image fit"><img src={pic6} alt="" /></span
                        ><h3 className="nopadding align-center">Jeremy Yeung</h3><p className="align-center">VP / MUSICAL DIRECTOR</p></div>
                                                <div className="col-4"><span className="image fit"><img src={pic6} alt="" /></span
                        ><h3 className="nopadding align-center">Jeremy Yeung</h3><p className="align-center">VP / MUSICAL DIRECTOR</p></div>
                                                <div className="col-4"><span className="image fit"><img src={pic6} alt="" /></span
                        ><h3 className="nopadding align-center">Jeremy Yeung</h3><p className="align-center">VP / MUSICAL DIRECTOR</p></div>
                        
            </div>

            <div className="inner">
            <h2 className="minor"> </h2>
            <div className="row gtr-uniform aln-center">
                        <div className="col-4"><span className="image fit"><img src={pic5} alt="" /></span><h3>member</h3></div>
                        <div className="col-4"><span className="image fit"><img src={pic6} alt="" /></span><h3>member</h3></div>
                        <div className="col-4"><span className="image fit"><img src={pic7} alt="" /></span><h3>member</h3></div>
                        <div className="col-4"><span className="image fit"><img src={pic7} alt="" /></span><h3>member</h3></div>
                        <div className="col-4"><span className="image fit"><img src={pic5} alt="" /></span><h3>member</h3></div>
                        <div className="col-4"><span className="image fit"><img src={pic6} alt="" /></span><h3>member</h3></div>
                        <div className="col-4"><span className="image fit"><img src={pic6} alt="" /></span><h3>member</h3></div>
            </div>
           
        </div>
        </div>

          <h2 className="major">Alumni</h2>
            <div className="inner">
            <div className="row gtr-uniform aln-center">
                        <div className="col-4"><span className="image fit"><img src={pic5} alt="" /></span><h3>member</h3></div>
                        <div className="col-4"><span className="image fit"><img src={pic6} alt="" /></span><h3>member</h3></div>
                        <div className="col-4"><span className="image fit"><img src={pic7} alt="" /></span><h3>member</h3></div>
                        <div className="col-4"><span className="image fit"><img src={pic7} alt="" /></span><h3>member</h3></div>
                        <div className="col-4"><span className="image fit"><img src={pic5} alt="" /></span><h3>member</h3></div>
                        <div className="col-4"><span className="image fit"><img src={pic6} alt="" /></span><h3>member</h3></div>
            </div>
            <h2 className="major"></h2>
        </div>
      </div>
      </div>
    </section>
    <SmallFooter />
  </Layout>
);

export default IndexPage;
