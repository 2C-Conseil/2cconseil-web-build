import React, {useEffect} from 'react';
import "aos/dist/aos.css";
import Aos from 'aos';
import { Link } from 'react-router-dom';
import './joinUs.scoped.css';
import hJoinImg from './img/head-join-us.svg';
import OneLos from './img/one-losange.svg';
import TwoLos from './img/two-losange.svg';
import ThreeLos from './img/three-losange.svg';
import FourLos from './img/four-losange.svg';
import FiveLos from './img/five-losange.svg';
import SixLos from './img/six-losange.svg';
import LeftOfferImg from './img/img-left-offer.svg';

function JoinUs() {

    useEffect(() => {
        Aos.init({});
       }, []);

    return (
        <div className="JoinUs">
            <div className='JoinUs-content'>
            <div className="header-join">
                <img className="head-img" src={hJoinImg} alt="" />
                <div className="intitled-page" data-aos="fade-right"
                                              data-aos-offset="300"
                                              data-aos-easing="ease-in-sine">

                    <h1 className="title-join-us">Nous rejoindre</h1>
                </div> 
            </div>

            <section className="sentences">
    
                <div className="t-intro" data-aos="fade-right" data-aos-duration="700">
                    <h3>Intégrer 2C Conseil :</h3>
                </div>
                <div className="box right"  data-aos="zoom-in-up" data-aos-duration="700">
                    <img className="los" src={OneLos} alt="" />
                    <h3>Une entreprise à taille humaine</h3>
                </div>
                <div className="box left" data-aos="zoom-in-up" data-aos-duration="700">
                    <img className="los" src={TwoLos} alt="" />
                    <h3>Avec un fort esprit start up</h3>
                </div>
                <div className="box right" data-aos="zoom-in-up" data-aos-duration="700">
                    <img className="los" src={ThreeLos} alt="" />
                    <h3>Soucieux du bien-être de ses collaborateurs</h3>
                </div>
                <div className="box left" data-aos="zoom-in-up" data-aos-duration="700">
                    <img className="los" src={FourLos} alt="" />
                    <h3>Mettant en place un parcours RH sur mesure</h3>
                </div>
                <div className="box right" data-aos="zoom-in-up" data-aos-duration="700">
                    <img className="los" src={FiveLos} alt="" />
                    <h3>Proposant des missions diverses variées multi-secteurs chez des clients prestigieux</h3>
                </div>
                <div className="box left" data-aos="zoom-in-up" data-aos-duration="700">
                    <img className="los" src={SixLos} alt="" />
                    <h3>Plaçant l’humain au cœur de notre stratégie</h3>
                </div>
            </section>
            <section className="offer"data-aos="fade-up" data-aos-duration="1000">
                <div className="offer-up">
                <img src={LeftOfferImg} alt="" />
                    <div className="annonce">               
                        <div className="annonce-content">
                            <h2>Offre d'emploi</h2>
                            <div className="line"></div>
                            <div className="infos">
                                <Link to="/en-cours-de-production"><a href="">CDI Consultant SI/Finance H/F</a></Link>
                            </div>
                            <div className="infos">
                                <a href="">A ajouter</a>
                            </div>
                            <div className='mo-container'>
                            <Link to="/en-cours-de-production"><p className='more-offer'>Accédez à toutes nos offres</p></Link>

                            </div>
                           
                        </div>
                    </div>
                </div>
                <div className="candsp">
                    <h2>Nous sommes toujours à la recherche de nouveaux talents ! <br /> 
                        Adressez-nous votre candidature spontanée !!
                    </h2>

                    <Link class="cand-btn" to="/candisp">Candidature spontanée</Link>

                </div>
            </section>
            </div>

            <div className='JoinUs-mob'>
                <div className='intro-mobJoin'>
                    <img className="head-img" src={hJoinImg} alt="" />
                    <div className="intitled-page-mob">
                        <h1 className="title-join-us-mob">Nous rejoindre</h1> 
                    </div> 
                </div>
                <div className='icones-mobJoin'>
                    <div className="t-intro-mJ" data-aos="fade-right" data-aos-duration="700">
                        <h3>Intégrer 2C Conseil :</h3>
                    </div>
                    <div className="box-mJ"  data-aos="zoom-in-up" data-aos-duration="700">
                        <img className="los-mJ" src={OneLos} alt="" />
                        <h3>C'est rejoindre une entreprise à taille humaine</h3>
                    </div>
                    <div className="box-mJ left" data-aos="zoom-in-up" data-aos-duration="700">
                        <img className="los-mJ" src={TwoLos} alt="" />
                        <h3>Avec un fort esprit start up</h3>
                    </div>
                    <div className="box-mJ" data-aos="zoom-in-up" data-aos-duration="700">
                        <img className="los-mJ" src={ThreeLos} alt="" />
                        <h3>Soucieux du bien-être de ses collaborateurs</h3>
                    </div>
                    <div className="box-mJ left" data-aos="zoom-in-up" data-aos-duration="700">
                        <img className="los-mJ" src={FourLos} alt="" />
                        <h3>Mettant en place un parcours RH sur mesure</h3>
                    </div>
                    <div className="box-mJ" data-aos="zoom-in-up" data-aos-duration="700">
                        <img className="los-mJ" src={FiveLos} alt="" />
                        <h3>Proposant des missions diverses variées multi-secteurs chez des clients prestigieux</h3>
                    </div>
                    <div className="box-mJ left" data-aos="zoom-in-up" data-aos-duration="700">
                        <img className="los-mJ" src={SixLos} alt="" />
                        <h3>Plaçant l’humain au cœur de notre stratégie</h3>
                    </div>
                </div>
                <div className='offer-mob'>
                    <img src={LeftOfferImg} ></img>
                    <div className="annonce-content-mob">
                            <h2>Offre d'emploi</h2>
                            <div className="line-offer-mob"></div>
                            <div className="infos-mob one">
                                <Link to="/en-cours-de-production"><p href="">CDI Consultant SI/Finance H/F</p></Link>
                            </div>
                            <div className="infos-mob two">
                                <p href="">A ajouter</p>
                            </div>
                            <div className='mo-container-mob'>
                            
                            <Link to="/en-cours-de-production"><p className='more-offer'>Accédez à toutes nos offres</p></Link>

                            </div>
                    </div>
                    <div className="candsp-mob">
                        <h2>Nous sommes toujours à la recherche de nouveaux talents ! <br />
                            Adressez-nous votre candidature spontanée !!
                        </h2>

                        <Link class="cand-btn-mob" to="/candisp">
                            <i class="bi bi-arrow-right" data-aos="fade-right" data-aos-duration="700"></i>
                            <p>C'est par ici</p></Link>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default JoinUs;