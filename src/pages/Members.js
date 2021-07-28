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
          <h2 className="major align-center">Current members</h2>
             <div className="box alt">
                    <div className="row gtr-uniform aln-center">
                        <div className="col-4"><span className="image fit"><img src={pic5} alt="" className="image member"/>
                        </span>
                        <h2 className="nopadding align-center">Jenna Riedl</h2><p className="lesspadding align-center">PRESIDENT</p>
                        <p className="nopadding align-center">Jenna is a junior studying Painting, Art History, and Statistics at Boston University. 
                        On the rare occasions when she is not reading or making art, she can be found deep in the woods attempting to befriend squirrels.</p>
                        </div>
                        <div className="col-4"><span className="image fit"><img src={https://static.wixstatic.com/media/149ad6_ebcaca4e62af4086b22fb2d9578d70bd~mv2.jpg/v1/fill/w_286,h_286,al_c,q_80,usm_0.66_1.00_0.01/jenna_edited.webp} alt="" /></span
                        ><h3 className="nopadding align-center">Jeremy Yeung</h3><p className="align-center">VP / MUSICAL DIRECTOR</p></div>
                        <div className="col-4"><span className="image fit"><img src={pic6} alt="" /></span
                        ><h3 className="nopadding align-center">Timothy Li</h3><p className="align-center">TREASURER</p></div>
                                                <div className="col-4"><span className="image fit"><img src={pic6} alt="" /></span
                        ><h3 className="nopadding align-center">Julia Chang</h3><p className="align-center">SECRETARY</p></div>
                                                <div className="col-4"><span className="image fit"><img src={pic6} alt="" /></span
                        ><h3 className="nopadding align-center">Helen Cai</h3><p className="align-center">INTERPERSONAL COORDINATOR</p></div>
                                                <div className="col-4"><span className="image fit"><img src={pic6} alt="" /></span
                        ><h3 className="nopadding align-center">Julie Wang</h3><p className="align-center">PUBLIC RELATIONS CHAIR</p></div>

            </div>

            <div className="inner">
            <h2 className="minor"> </h2>
            <div className="row gtr-uniform aln-center">
                        <div className="col-4 align-center"><span className="image fit"><img src={pic5} alt="" /></span><h3>member</h3></div>
                        <div className="col-4 align-center"><span className="image fit"><img src={pic6} alt="" /></span><h3>member</h3></div>
                        <div className="col-4 align-center"><span className="image fit"><img src={pic7} alt="" /></span><h3>member</h3></div>
                        <div className="col-4 align-center"><span className="image fit"><img src={pic7} alt="" /></span><h3>member</h3></div>
                        <div className="col-4 align-center"><span className="image fit"><img src={pic5} alt="" /></span><h3>member</h3></div>
                        <div className="col-4 align-center"><span className="image fit"><img src={pic6} alt="" /></span><h3>member</h3></div>
                        <div className="col-4 align-center"><span className="image fit"><img src={pic6} alt="" /></span><h3>member</h3></div>
            </div>
           
        </div>
        </div>

          <h2 className="major align-center">Alumni</h2>
            <div className="inner">
            <div className="row gtr-uniform aln-center">
                        <div className="col-4 align-center"><span className="image fit"><img src={pic5} alt="" /></span><h3>member</h3></div>
                        <div className="col-4 align-center"><span className="image fit"><img src={pic6} alt="" /></span><h3>member</h3></div>
                        <div className="col-4 align-center"><span className="image fit"><img src={pic7} alt="" /></span><h3>member</h3></div>
                        <div className="col-4 align-center"><span className="image fit"><img src={pic7} alt="" /></span><h3>member</h3></div>
                        <div className="col-4 align-center"><span className="image fit"><img src={pic5} alt="" /></span><h3>member</h3></div>
                        <div className="col-4 align-center"><span className="image fit"><img src={pic6} alt="" /></span><h3>member</h3></div>
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
