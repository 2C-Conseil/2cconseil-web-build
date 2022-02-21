import React, {useEffect} from 'react';
import './home.scoped.css';
import headImg from './img/head-index.svg';
import Cfao from './img/references/cfao-group.svg';
import Dpd from './img/references/dpd.svg';
import Geopost from './img/references/geopost.svg';
import Alten from './img/references/alten.svg';
import Jojo from './img/references/jojo.png';
import Ratpdev from './img/references/ratpdev.png';
import "aos/dist/aos.css";
import Aos from 'aos';
import {Link} from 'react-router-dom';


function Home() {

    useEffect(() => {
        Aos.init({});
       }, []);

    return (
        <div className='Home'> 

                                                
                                                     {/* Section Slogan Image */}


            <section className="slog-img">
                <div className="slogan" data-aos="fade-up"
                                        data-aos-duration="2200">

                    <h1>Challenged <span>By you,</span><br />
                        Succeded <span>With you</span>
                    </h1>
                </div>
                <div className="img-container-home">
                    <img className="img-header-home" src={headImg} alt="Image page d'accueil" />
                </div>
            </section>

                                                     {/* Section Qui sommes-nous */}


            <section className="are-us">
                <div className="are-us-container" data-aos="fade-right"
                                                  data-aos-offset="300"
                                                  data-aos-easing="ease-in-sine">
                                        
                    <div className="are-us-content">
                       <h1>Qui sommes-nous ?</h1>
                       <div className="line-are"></div>
                       <p><span>2C Conseil</span> est une Entreprise de Services du Numérique (ESN) basé en région parisienne offrant des            prestations à forte valeur ajoutée pour ses clients. <br />
                            Notre mission consiste à accompagner nos clients dans le processus de digitalisation de leurs activités en leur proposant une offre complète de service. <br />
                            Pour favoriser le changement et la montée en compétence de vos équipes en interne, nous collaborons durant toute la phase de projet en dynamisant la participation de chacun par l’implication de tous.
                        </p>
                    </div>
                </div>
            </section>


                                                     {/* Section Nos services*/}


            <section className="services">
            <div className="banniere">
                <div className="title-service">
                    <h1>Nos services</h1>
                    <h3>Nous vous proposons une offre globale, allant de l’identification de la problématique à la mise en œuvre de la solution structurée, en étroite collaboration avec vos équipes.</h3>
                </div>
            </div>
            <div className="bloc-bu-home">
                <div className="blocH conseil"data-aos="fade-up"
                                              data-aos-duration="2200">

                    <div className="bloc-bu-content">
                    <h2>Conseil & SI </h2>
                    <p>Votre système de pilotage est essentiel pour vous. Il vous fournit des informations opérationnelles...</p>
                   <Link to='/nos-services/conseil'> <a class="bu-btn" >+ En savoir plus</a></Link>
                    </div>
                </div>
                <div className="blocH bdown migration"data-aos="fade-up"
                                                data-aos-duration="1900">

                    <div className="bloc-bu-content">
                    <h2>Migration ERP</h2>
                    <p>Votre Enterprise Resource Management vous aide à mieux gérer les informations des différents domaines...</p>
                    <Link to='/nos-services/migration'><a class="bu-btn">+ En savoir plus</a></Link>
                    </div> 
                </div>
                <div className="blocH  bdown data"data-aos="fade-up"
                                           data-aos-duration="1600">

                    <div className="bloc-bu-content">
                    <h2>Data</h2>
                    <p>La data est au cœur des activités économiques, commerciales et financières. La valoriser c’est s’ajouter un puissant support... </p>
                 <Link to='/nos-services/data'><a class="bu-btn" >+ En savoir plus</a></Link>
                    </div>
                </div>
                <div className="blocH  bdown ipa" data-aos="fade-up"
                                           data-aos-duration="1300">

                    <div className="bloc-bu-content">
                    <h2>IPA & RPA </h2>
                    <p>Vous souhaitez fiabiliser vos nouveaux déploiements en industrialisant vos tests existants...</p>
                    <Link to='/nos-services/ipa'><a class="bu-btn">+ En savoir plus</a></Link>
                    </div>
                </div>
                </div>
            </section>

                                                    {/* Section Nos references*/}


            <section className="references">
            <h1>Nos Références</h1>
            <div className="references-content">
                <div className="ref up">
                <div className="ref-bloc">
                    <img className='menos' src={Alten} alt="Alten logo" /> 
                </div>
                <div className="ref-bloc">
                    <img className="plus"  src={Cfao} alt="Cfao logo" />
                </div>
                <div className="ref-bloc">
                    <img className=""  src={Dpd} alt="Dpd logo" />
                </div>
                </div>
                <div className="ref down">
                <div className="ref-bloc">
                    <img className='plus'  src={Geopost} alt="Geopost logo" />
                </div>
                <div className="ref-bloc">
                    <img  src={Jojo} alt="OFII logo" />
                </div>
                <div className="ref-bloc">
                    <img className="plus"  src={Ratpdev} alt="Ratp dev logo" />
                </div>
                </div>
            </div>
    </section>
  </div>
    )
}

export default Home;