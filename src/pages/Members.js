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
                                    <img src="https://i.imgur.com/PD3nEsN.jpg?1" alt="" width="300px" height="auto" className="image fit img"/>
                                        <div className="image fit overlay overlay-primary">
                                            <div class="image fit title">title</div>
                                            <p class="image fit description">Jenna is a junior studying Painting, Art History, and Statistics at Boston University. 
                        On the rare occasions when she is not reading or making art, she can be found deep in the woods attempting to befriend squirrels.</p>
                                        </div>
                                </div>

                        <h3 className="nopadding align-center yellow">Jenna Riedl</h3><p className="lesspadding align-center">PRESIDENT</p>
                        <p className="nopadding align-center">Soprano – BU'23</p> <p className="nopadding align-center">she/her | INFJ-A | Type 2</p>
                        </div>

                        <div className="col-4">
                                <div className="image fit wrap">
                                    <img src="https://i.imgur.com/QAMhL8R.jpg" alt="" className="image fit img"/>
                                        <div className="image fit overlay overlay-primary">
                                            <div class="image fit title">title</div>
                                            <p class="image fit description">In Mustard Seed, Jeremy is known for make drum noise with mouth dum tss. He likes cashews, Pokémon games, and long walks on the beach 
</p>
                                        </div>
                                </div>

                        <h3 className="nopadding align-center yellow">Jeremy Yeung</h3><p className="lesspadding align-center">VP / MUSICAL DIRECTOR</p>
                        <p className="nopadding align-center">Bass/VP – BU'23</p> <p className="nopadding align-center">he/him | INFP-T | Type 2</p>
                        </div>

                        <div className="col-4">
                                <div className="image fit wrap">
                                    <img src="https://i.imgur.com/SXRwxaG.jpg" alt="" className="image fit img"/>
                                        <div className="image fit overlay overlay-primary">
                                            <div class="image fit title">title</div>
                                            <p class="image fit description">As a Boston University Finance major and Economics minor, his mind is in Boston yet his heart is in Hong Kong (figuratively speaking). He has an idiosyncratic set of hobbies that range from investing to working on a start-up to cooking Bo Zai Fan and even perfecting his behind-the-back Billiards cue shot.
</p>
                                        </div>
                                </div>

                        <h3 className="nopadding align-center yellow">Timothy Li</h3><p className="lesspadding align-center">TREASURER</p>
                        <p className="nopadding align-center">Tenor – BU'22</p> <p className="nopadding align-center">he/him | ISTJ-A | Type 3w4</p>
                        </div>


                        <div className="col-4">
                                <div className="image fit wrap">
                                    <img src="https://i.imgur.com/JnnZItp.jpg"alt="" className="image fit img"/>
                                        <div className="image fit overlay overlay-primary">
                                            <div class="image fit title">title</div>
                                            <p class="image fit description">Julia is a junior studying MIS and the Health and Life Sciences Sector at BU. Her perfect day would have to consist of eating a harvest bowl from sweetgreen, watching a thriller movie, and taking a walk in a garden. 
</p>
                                        </div>
                                </div>

                        <h3 className="nopadding align-center yellow">Julia Chang</h3><p className="lesspadding align-center">SECRETARY</p>
                        <p className="nopadding align-center">Alto – BU'23</p> <p className="nopadding align-center">she/her | ISFP | Type 9w1</p>
                        </div>

                        <div className="col-4">
                                <div className="image fit wrap">
                                    <img src="https://static.wixstatic.com/media/149ad6_f11f8e9aa45c47778aaa5f867b7af3fd~mv2.jpg/v1/crop/x_903,y_326,w_1768,h_1736/fill/w_286,h_280,al_c,q_80,usm_0.66_1.00_0.01/helen.webp"alt="" className="image fit img"/>
                                        <div className="image fit overlay overlay-primary">
                                            <div class="image fit title">title</div>
                                            <p class="image fit description">Helen Cai (she/hers, 7w6, ENFP-T) is an aspiring photographer who enjoys paddleboarding, making spotify playlists, and graphic design while being a big advocate for dental hygiene!
</p>
                                        </div>
                                </div>

                        <h3 className="nopadding align-center yellow">Helen Cai</h3><p className="lesspadding align-center">INTERPERSONAL COORDINATOR</p>
                        <p className="nopadding align-center">Soprano – NEU'24</p> <p className="nopadding align-center">she/her | ENFP | Type 7w6</p>
                        </div>


                        <div className="col-4">
                                <div className="image fit wrap">
                                    <img src="https://i.imgur.com/wXgTeJF.jpg"alt="" className="image fit img"/>
                                        <div className="image fit overlay overlay-primary">
                                            <div class="image fit title">title</div>
                                            <p class="image fit description">Some of Julie's favorite things (besides Mustard Seed, of course): a good niche Spotify playlist, jalapeno kettle chips, and long naps!
</p>
                                        </div>
                                </div>

                        <h3 className="nopadding align-center yellow">Julie Wang</h3><p className="lesspadding align-center">PUBLIC RELATIONS CHAIR</p>
                        <p className="nopadding align-center">Soprano/Alto – NEU'23</p> <p className="nopadding align-center">she/her | ISFP | Type 9</p>
                        </div>

            </div>

            <div className="inner">
            <h2 className="minor"> </h2>
            <div className="row gtr-uniform aln-center">
                        <div className="col-4">
                                <div className="image fit wrap">
                                    <img src="https://i.imgur.com/WeuDLXR.jpg"alt="" className="image fit img"/>
                                        <div className="image fit overlay overlay-primary">
                                            <div class="image fit title">title</div>
                                            <p class="image fit description">Outside of worshipping God with her voice and a cappella of course, Carissa is obsessed with YA books, iced caramel lattes, and MCU fan theories!</p>
                                        </div>
                                </div>

                        <h3 className="nopadding align-center yellow">Carissa Mok</h3>
                        <p className="nopadding align-center">Soprano – NEU'23</p> <p className="nopadding align-center">she/her | ISFJ | Type 2</p>
                        </div>

                        <div className="col-4">
                                <div className="image fit wrap">
                                    <img src="https://static.wixstatic.com/media/149ad6_b41308db715941ff99691885e9fd0510~mv2.png/v1/crop/x_139,y_175,w_377,h_369/fill/w_286,h_280,al_c,q_85,usm_0.66_1.00_0.01/Jeanette.webp"alt="" className="image fit img"/>
                                        <div className="image fit overlay overlay-primary">
                                            <div class="image fit title">title</div>
                                            <p class="image fit description">Jeanette is a second-year Economics and Business Administration major at Northeastern University from Orange County, California. During her free time she enjoys jamming out to Taylor Swift, playing tennis, and watching Formula 1 racing.</p>
                                        </div>
                                </div>

                        <h3 className="nopadding align-center yellow">Chelsie Li</h3>
                        <p className="nopadding align-center">Soprano– BU'25</p> <p className="nopadding align-center">she/her | aaaa | Type aa</p>
                        </div>

                        <div className="col-4">
                                <div className="image fit wrap">
                                    <img src="https://static.wixstatic.com/media/149ad6_2037c41e557e4e0d90bc0a81f59b650f~mv2.jpg/v1/fill/w_286,h_280,al_c,q_80,usm_0.66_1.00_0.01/amanda%2520for%2520edit_edited.webp"alt="" className="image fit img"/>
                                        <div className="image fit overlay overlay-primary">
                                            <div class="image fit title">title</div>
                                            <p class="image fit description">Outside of Mustard Seed, Amanda likes to crochet, watch crime shows, and defend the use of the Oxford comma (all at the same time).</p>
                                        </div>
                                </div>

                        <h3 className="nopadding align-center yellow">Amanda Kong</h3>
                        <p className="nopadding align-center">Alto – BU'22</p> <p className="nopadding align-center">she/her | ESFP-T | Type 6</p>
                        </div>

                        <div className="col-4">
                                <div className="image fit wrap">
                                    <img src="https://static.wixstatic.com/media/149ad6_977ca8610f69499e85eab44c5751a82e~mv2.jpg/v1/crop/x_0,y_20,w_2000,h_1960/fill/w_286,h_280,al_c,q_80,usm_0.66_1.00_0.01/anabelle_edited.webp"alt="" className="image fit img"/>
                                        <div className="image fit overlay overlay-primary">
                                            <div class="image fit title">title</div>
                                            <p class="image fit description">Anabelle frequently surprises the group with random facts. Ask her about a topic, and she may know something about it. 
</p>
                                        </div>
                                </div>

                        <h3 className="nopadding align-center yellow">Anabelle Lee</h3>
                        <p className="nopadding align-center">Alto – BU'22</p> <p className="nopadding align-center">she/her | ISFP | Type 2</p>
                        </div>

                        <div className="col-4">
                                <div className="image fit wrap">
                                    <img src="https://static.wixstatic.com/media/149ad6_977ca8610f69499e85eab44c5751a82e~mv2.jpg/v1/crop/x_0,y_20,w_2000,h_1960/fill/w_286,h_280,al_c,q_80,usm_0.66_1.00_0.01/anabelle_edited.webp"alt="" className="image fit img"/>
                                        <div className="image fit overlay overlay-primary">
                                            <div class="image fit title">title</div>
                                            <p class="image fit description">Anabelle frequently surprises the group with random facts. Ask her about a topic, and she may know something about it. 
</p>
                                        </div>
                                </div>

                        <h3 className="nopadding align-center yellow">June Lim</h3>
                        <p className="nopadding align-center">Alto – BU'24</p> <p className="nopadding align-center">she/her | ahh | Type ah</p>
                        </div>


                        <div className="col-4">
                                <div className="image fit wrap">
                                    <img src="https://static.wixstatic.com/media/149ad6_c02c3eb2af214b6dbcaad0b996f1a45e~mv2.jpg/v1/fill/w_280,h_280,al_c,q_80,usm_0.66_1.00_0.01/joon_edited.webp"alt="" className="image fit img"/>
                                        <div className="image fit overlay overlay-primary">
                                            <div class="image fit title">title</div>
                                            <p class="image fit description">Joon is a elementary education major who loves watching movies or listening to music. He is from Fort Lee, NJ and loves sweet potato casserole</p>
                                        </div>
                                </div>

                        <h3 className="nopadding align-center yellow">Joon Shin</h3>
                        <p className="nopadding align-center">Tenor – BU'22</p> <p className="nopadding align-center">she/her | INFP | Type 2</p>
                        </div>

                        <div className="col-4">
                                <div className="image fit wrap">
                                    <img src="https://i.imgur.com/x7BR8fv.jpg?1"alt="" className="image fit img"/>
                                        <div className="image fit overlay overlay-primary">
                                            <div class="image fit title">title</div>
                                            <p class="image fit description">becks two favorite things in life are making tik tok dances with friends and his dog tinker. he is a psychology major hoping to go into social work to support and care for the lgbtq+ community! </p>
                                        </div>
                                </div>

                        <h3 className="nopadding align-center yellow">Becks Loo</h3>
                        <p className="nopadding align-center">Baritone – BU'22</p> <p className="nopadding align-center">he/his | INFP | Type 2</p>
                        </div>

                         <div className="col-4">
                                <div className="image fit wrap">
                                    <img src="https://i.imgur.com/x7BR8fv.jpg?1"alt="" className="image fit img"/>
                                        <div className="image fit overlay overlay-primary">
                                            <div class="image fit title">title</div>
                                            <p class="image fit description">becks two favorite things in life are making tik tok dances with friends and his dog tinker. he is a psychology major hoping to go into social work to support and care for the lgbtq+ community! </p>
                                        </div>
                                </div>

                        <h3 className="nopadding align-center yellow">David Leigh</h3>
                        <p className="nopadding align-center">Bass/VP – NEU'24</p> <p className="nopadding align-center">he/his | ahh | Type ahh</p>
                        </div>

                        <div className="col-4">
                                <div className="image fit wrap">
                                    <img src="https://static.wixstatic.com/media/149ad6_18e74471b2b3478cbf87e5e9d0ad0279~mv2.jpg/v1/crop/x_112,y_88,w_954,h_934/fill/w_286,h_280,al_c,q_80,usm_0.66_1.00_0.01/stefan_JPG.webp"alt="" className="image fit img"/>
                                        <div className="image fit overlay overlay-primary">
                                            <div class="image fit title">title</div>
                                            <p class="image fit description">While studying computer engineering, Stefan is hoping to invent something that makes a positive impact on the world. He also enjoys outdoor sports and is a big fan of Pixar.
</p>
                                        </div>
                                </div>

                        <h3 className="nopadding align-center yellow">Stefan Wong</h3>
                        <p className="nopadding align-center">Bass – BU'22</p> <p className="nopadding align-center">he/his | ISFP | Type 9</p>
                        </div>
            </div>
           
        </div>
        </div>

          {/* <h2 className="major align-center">Alumni</h2>
            <div className="inner">
            <div className="row gtr-uniform aln-center">
                        <div className="col-4 align-center"><span className="image fit"><img src={pic5} alt="" /></span><h3>member</h3></div>
                        <div className="col-4 align-center"><span className="image fit"><img src={pic6} alt="" /></span><h3>member</h3></div>
                        <div className="col-4 align-center"><span className="image fit"><img src={pic7} alt="" /></span><h3>member</h3></div>
                        <div className="col-4 align-center"><span className="image fit"><img src={pic7} alt="" /></span><h3>member</h3></div>
                        <div className="col-4 align-center"><span className="image fit"><img src={pic5} alt="" /></span><h3>member</h3></div>
                        <div className="col-4 align-center"><span className="image fit"><img src={pic6} alt="" /></span><h3>member</h3></div>
            </div> */}
            {/* <h2 className="major"></h2> */}
        {/* </div> */}
      </div>
      </div>
    </section>
    <SmallFooter />
  </Layout>
);

export default IndexPage;
