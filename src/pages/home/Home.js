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
            <div className='Home-pc'>
                                                
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
                        <p><span className='2c-home'>2C Conseil</span> est une Entreprise de Services du Numérique (ESN), issue du bassin
                                Parisien, offrant des prestations à forte valeur ajoutée pour ses clients.<br />
                                Notre mission consiste à accompagner nos clients dans ce tortueux processus de
                                digitalisation d’activités en vous proposant une offre complète de services.<br />
                                Notre objectif réside dans la valorisation d’outils numériques, le développement de
                                solutions à partir de d’outils et de vous permettre d’exploiter leur plein potentiel.<br />
                                Pour favoriser le changement et la montée en compétence des équipes en interne
                                de nos clients, nous nous intégrons, avec souplesse, au sein de la structure,
                                pendant toute la durée du projet, en dynamisant la participation de chacun par
                                l’implication de tous.
                            </p>
                        </div>
                    </div>
                </section>


                                                     {/* Section Nos services*/}


                <section className="services">
                    <div className="banniere">
                        <div className="title-service">
                            <h1>Nos services</h1>
                            <h3>Notre offre globale permet de répondre, avec minutie, à l’identification d’une
                                problématique et à l’élaboration d’une solution structurée et adaptée pour sondéploiement.
                                Maintenant une forte communication avec les équipes de nos clients, nous les
                                accompagnons dans la compréhension de l’outil et sa prise en main pour maximiser
                                notre transfert de connaissance et optimiser leur expérience utilisateur.
                            </h3>
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
                    <h1>Ils nous font confiance</h1>
                    <div className="references-content">
                        <div className="ref up">
                            <div className="ref-bloc">
                                <img className='al' src={Alten} alt="Alten logo" /> 
                            </div>
                            <div className="ref-bloc">
                                <img className="cf"  src={Cfao} alt="Cfao logo" />
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

            <div className='Home-mob'>

                <section className="img-mob">
                    <div className="img-container-home-mob">
                        <img className="img-header-home" src={headImg} alt="Image page d'accueil" />
                    </div>
                </section>

                <section className="are-us-mob">
                        <div className="are-us-back-mob" data-aos="fade-right"
                                                        data-aos-offset="300"
                                                        data-aos-easing="ease-in-sine">
                                                
                            <div className="are-us-content-mob">
                            <h1>Qui sommes-nous ?</h1>
                            <div className="line-are-mob"></div>
                            <p><span className='2c-home-mob'>2C Conseil</span> est une Entreprise de Services du Numérique (ESN), issue du bassin
                                    Parisien, offrant des prestations à forte valeur ajoutée pour ses clients.<br />
                                    <span className='mission-Home'>Notre mission</span> consiste à accompagner nos clients dans ce tortueux processus de
                                    digitalisation d’activités en vous proposant une offre complète de services.<br />
                                    <span className='objec-Home'>Notre objectif</span> réside dans la valorisation d’outils numériques, le développement de
                                    solutions à partir de d’outils et de vous permettre d’exploiter leur plein potentiel.<br />
                                    Pour favoriser le changement et la montée en compétence des équipes en interne
                                    de nos clients, nous nous intégrons, avec souplesse, au sein de la structure,
                                    pendant toute la durée du projet, en dynamisant la participation de chacun par
                                    l’implication de tous
                                </p>
                            </div>
                        </div>
                </section>

                <section className="services-mob">
                        <div className="banniere-mob">
                            <div className="title-service-mob">
                                <h1>Nos services</h1>
                                <h3>Notre offre globale permet de répondre, avec minutie, à l’identification d’une
                                    problématique et à l’élaboration d’une solution structurée et adaptée pour son déploiement.
                                    Maintenant une forte communication avec les équipes de nos clients, nous les
                                    accompagnons dans la compréhension de l’outil et sa prise en main pour maximiser
                                    notre transfert de connaissance et optimiser leur expérience utilisateur.
                                </h3>
                            </div>
                        </div>
                        <div className="bloc-bu-home-mob">
                            <div className="blocH-mob conseil"data-aos="fade-up"
                                                        data-aos-duration="2200">

                                <div className="bloc-bu-content-mob">
                                    <h2>Conseil & SI </h2>
                                    <Link to='/nos-services/conseil'> <a class="bu-btn-mob" >+ En savoir plus</a></Link>
                                </div>
                            </div>
                            <div className="blocH-mob bdown migration"data-aos="fade-up"
                                                            data-aos-duration="1900">

                                <div className="bloc-bu-content-mob">
                                    <h2>Migration ERP</h2>
                                    <Link to='/nos-services/migration'><a class="bu-btn-mob">+ En savoir plus</a></Link>
                                </div> 
                            </div>
                            <div className="blocH-mob  bdown data"data-aos="fade-up"
                                                    data-aos-duration="1600">

                                <div className="bloc-bu-content-mob">
                                    <h2>Data</h2>
                                    <Link to='/nos-services/data'><a class="bu-btn-mob" >+ En savoir plus</a></Link>
                                </div>
                            </div>
                            <div className="blocH-mob  bdown ipa" data-aos="fade-up"
                                                    data-aos-duration="1300">

                                <div className="bloc-bu-content-mob">
                                    <h2>IPA & RPA </h2>
                                    <Link to='/nos-services/ipa'><a class="bu-btn-mob">+ En savoir plus</a></Link>
                                </div>
                            </div>
                        </div>
                </section>

                <section className="references-mob">
                        <h1>Ils nous font confiance</h1>
                        <div className="references-content-mob">
                            <div className="ref-mob">
                                <div className="ref-bloc-mob">
                                    <img className='almob' src={Alten} alt="Alten logo" /> 
                                </div>
                                <div className="ref-bloc-mob">
                                    <img className="cfmob"  src={Cfao} alt="Cfao logo" />
                                </div>
                                <div className="ref-bloc-mob">
                                    <img className="dpdmob"  src={Dpd} alt="Dpd logo" />
                                </div>
                                <div className="ref-bloc-mob">
                                    <img className='geomob'  src={Geopost} alt="Geopost logo" />
                                </div>
                                <div className="ref-bloc-mob">
                                    <img className='jojomob'  src={Jojo} alt="OFII logo" />
                                </div>
                                <div className="ref-bloc-mob">
                                    <img className="ratpmob"  src={Ratpdev} alt="Ratp dev logo" />
                                </div>
                            </div>
                        </div>
                </section>

            </div>

            <div className='Home-tab'>

                <section className="slog-img-mob">
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

                <section className="are-us-mob">
                        <div className="are-us-container" data-aos="fade-right"
                                                        data-aos-offset="300"
                                                        data-aos-easing="ease-in-sine">
                                                
                            <div className="are-us-content">
                            <h1>Qui sommes-nous ?</h1>
                            <div className="line-are"></div>
                            <p><span className='2c-home'>2C Conseil</span> est une Entreprise de Services du Numérique (ESN), issue du bassin
                                    Parisien, offrant des prestations à forte valeur ajoutée pour ses clients.<br />
                                    Notre mission consiste à accompagner nos clients dans ce tortueux processus de
                                    digitalisation d’activités en vous proposant une offre complète de services.<br />
                                    Notre objectif réside dans la valorisation d’outils numériques, le développement de
                                    solutions à partir de d’outils et de vous permettre d’exploiter leur plein potentiel.<br />
                                    Pour favoriser le changement et la montée en compétence des équipes en interne
                                    de nos clients, nous nous intégrons, avec souplesse, au sein de la structure,
                                    pendant toute la durée du projet, en dynamisant la participation de chacun par
                                    l’implication de tous
                                </p>
                            </div>
                        </div>
                </section>

                <section className="services-mob">
                        <div className="banniere">
                            <div className="title-service">
                                <h1>Nos services</h1>
                                <h3>Notre offre globale permet de répondre, avec minutie, à l’identification d’une
                                    problématique et à l’élaboration d’une solution structurée et adaptée pour sondéploiement.
                                    Maintenant une forte communication avec les équipes de nos clients, nous les
                                    accompagnons dans la compréhension de l’outil et sa prise en main pour maximiser
                                    notre transfert de connaissance et optimiser leur expérience utilisateur.
                                </h3>
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

                <section className="references-mob">
                        <h1>Ils nous font confiance</h1>
                        <div className="references-content-mob">
                            <div className="ref-mob up">
                                <div className="ref-bloc-mob">
                                    <img className='alt' id='alten' src={Alten} alt="Alten logo" /> 
                                </div>
                                <div className="ref-bloc-mob">
                                    <img className="cf  plus"  src={Cfao} alt="Cfao logo" />
                                </div>
                                <div className="ref-bloc-mob">
                                    <img className="dpd plus"  src={Dpd} alt="Dpd logo" />
                                </div>
                            </div>
                            <div className="ref down">
                                <div className="ref-bloc-mob">
                                    <img className='geo plus'  src={Geopost} alt="Geopost logo" />
                                </div>
                                <div className="ref-bloc-mob">
                                    <img className='jojo plus'  src={Jojo} alt="OFII logo" />
                                </div>
                                <div className="ref-bloc-mob">
                                    <img className="ratp plus"  src={Ratpdev} alt="Ratp dev logo" />
                                </div>
                            </div>
                        </div>
                </section>
                
            </div>
        </div>
    )
}

export default Home;