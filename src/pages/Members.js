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

                        <div className="col-4">
                                <div className="image fit wrap">
                                    <img src="https://static.wixstatic.com/media/149ad6_ebcaca4e62af4086b22fb2d9578d70bd~mv2.jpg/v1/fill/w_286,h_280,al_c,q_80,usm_0.66_1.00_0.01/jenna_edited.webp" alt="" className="image fit img"/>
                                        <div className="image fit overlay overlay-primary">
                                            <div class="image fit title">title</div>
                                            <p class="image fit description">Jenna is a junior studying Painting, Art History, and Statistics at Boston University. 
                        On the rare occasions when she is not reading or making art, she can be found deep in the woods attempting to befriend squirrels.</p>
                                        </div>
                                </div>

                        <h3 className="nopadding align-center yellow">Jenna Riedl</h3><p className="lesspadding align-center">PRESIDENT</p>
                        <p className="nopadding align-center">Soprano | CFA'23</p> <p className="nopadding align-center">she/her | ISFP | Type 9</p>
                        </div>

                        <div className="col-4">
                                <div className="image fit wrap">
                                    <img src="https://static.wixstatic.com/media/149ad6_9e03af96c0884d7391a56de6b9f5bdf3~mv2.jpg/v1/crop/x_0,y_20,w_2000,h_1960/fill/w_286,h_280,al_c,q_80,usm_0.66_1.00_0.01/jeremy_edited.webp" alt="" className="image fit img"/>
                                        <div className="image fit overlay overlay-primary">
                                            <div class="image fit title">title</div>
                                            <p class="image fit description">Jenna is a junior studying Painting, Art History, and Statistics at Boston University. 
                        On the rare occasions when she is not reading or making art, she can be found deep in the woods attempting to befriend squirrels.</p>
                                        </div>
                                </div>

                        <h3 className="nopadding align-center yellow">Jeremy Yeung</h3><p className="lesspadding align-center">VP / MUSICAL DIRECTOR</p>
                        <p className="nopadding align-center">Soprano | CFA'23</p> <p className="nopadding align-center">she/her | ISFP | Type 9</p>
                        </div>


                        <div className="col-4"><span className="image fit"><img src="https://static.wixstatic.com/media/149ad6_5781cd442b714590b69f1f6993f94950~mv2.jpg/v1/fill/w_286,h_280,al_c,q_80,usm_0.66_1.00_0.01/tim_edited.webp" alt="" /></span
                        ><h3 className="nopadding align-center">Timothy Li</h3><p className="align-center">TREASURER</p></div>
                                                <div className="col-4"><span className="image fit"><img src="https://static.wixstatic.com/media/149ad6_bdf034fba9f34c13a5baa8dd56f79e10~mv2.jpg/v1/crop/x_472,y_152,w_1466,h_1466/fill/w_286,h_286,al_c,q_80,usm_0.66_1.00_0.01/juila_edited.webp" alt="" /></span
                        ><h3 className="nopadding align-center">Julia Chang</h3><p className="align-center">SECRETARY</p></div>
                                                <div className="col-4"><span className="image fit"><img src="https://static.wixstatic.com/media/149ad6_f11f8e9aa45c47778aaa5f867b7af3fd~mv2.jpg/v1/crop/x_903,y_326,w_1768,h_1736/fill/w_286,h_280,al_c,q_80,usm_0.66_1.00_0.01/helen.webp" alt="" /></span
                        ><h3 className="nopadding align-center">Helen Cai</h3><p className="align-center">INTERPERSONAL COORDINATOR</p></div>
                                                <div className="col-4"><span className="image fit"><img src="https://static.wixstatic.com/media/149ad6_cda1e56f658741c6a73f97e39434026f~mv2.jpg/v1/crop/x_0,y_20,w_2000,h_1960/fill/w_286,h_280,al_c,q_80,usm_0.66_1.00_0.01/julie_edited.webp" alt="" /></span
                        ><h3 className="nopadding align-center">Julie Wang</h3><p className="align-center">PUBLIC RELATIONS CHAIR</p></div>

            </div>

            <div className="inner">
            <h2 className="minor"> </h2>
            <div className="row gtr-uniform aln-center">
                        <div className="col-4 align-center"><span className="image fit"><img src="https://static.wixstatic.com/media/149ad6_72e1a85d149343e7a426cbc0410d2fd1~mv2.jpg/v1/crop/x_0,y_20,w_2000,h_1960/fill/w_286,h_280,al_c,q_80,usm_0.66_1.00_0.01/carissa_edited.webp" alt="" /></span><h3>Carissa Mok</h3></div>
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
