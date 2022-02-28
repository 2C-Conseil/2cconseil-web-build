import React, {useEffect} from 'react';
import "aos/dist/aos.css";
import Aos from 'aos';
import './data.scoped.css';
import hDataImg from './data.svg' 


function Data(){

    useEffect(() => {
        Aos.init({});
       }, []);


    return(

        <div className="Data">
            <div className='Data-content'>
                <div className='header-conseil'>
                <div className='banniere-container'>
                    <div className='banniere-footer'>
                        <div className='entitle-men'>
                            <h1>Data</h1>
                        </div>
                    </div>
                </div>
                </div>
                <section className="intro">
                    <div className="intro-head">
                        <img src={hDataImg} alt="principale de la data" />
                        <div className="infoData">
                        <p>
                            <strong> La data</strong> est au cœur des activités économiques, commerciales et financières. La valoriser, c’est s’ajouter un puissant support en termes d’efficacité et de développement. <br />
                            Nous vous proposons de vous accompagner ou de réaliser avec vous des valorisations de la data, que ce soit en analyse de données, en <strong>Data Science</strong> ou  en <strong>Machine Learning</strong>, en données structurées ou en données textuelles non structurées.
                        </p>
                        </div>
                    </div>
                <div className="need-savoir">
                    <div className="needData" data-aos="fade-up"
                                                    data-aos-duration="2000">
                        <div className="need-contentData">
                            <h1>Votre besoin</h1>
                            <div className='lineData'></div>
                            <div className="need-info">
                                <p>Réaliser une valorisation de la data, que ce soit en analyse de données, en Data Science, en Machine Learning, en données structurées, en données textuelles structurées ou non</p>
                                <p>Mise en place projet prédictif de défaut sur prêt bancaire, d’aide à la prospection de prêt bancaire</p>
                                <p>Développer une application web, mobile responsive avec respect des contraintes de performances et d'UX/UI afin d'optimiser la SEO du site</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="missionData" data-aos="fade-up"
                                                    data-aos-duration="2200">
                        <div className="mission-contentData">
                            <h1>Exemples de mission</h1>
                            <div className='lineData'></div>
                            <div className="mission-infoData">
                                <div className="info-up">
                                    <p><strong>Chef de projet Big Data pour la production de la position extérieure globale</strong></p>
                                    <p className="ex">SI: Application métier</p>
                                    <p className="ex">Expertise: Data</p>
                                    <p className="ex">Secteur : Transport</p>
                                </div>
                                <div className="info-down">
                                    <p><strong>Création application mobile incluant calcul kilométrique, géolocalisation</strong></p>
                                    <p className="ex">SI: Application mobile</p>
                                    <p className="ex">Expertise: Lead Tech </p>
                                    <p className="ex">Secteur : Secteur public</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="savoir-faireData" data-aos="fade-up"
                                                    data-aos-duration="2500">
                    <div className="savoir-faire-contentData">
                        <h1>Notre savoir-faire</h1>
                        <div className='lineData'></div>
                        <div className="savoir-faire-infoData">
                            <p>Gestion projet Big Data de collecte, traitement et diffusion de statistiques d’investissements de portefeuille en valeurs mobilières,</p>
                            <p>Analyse fonctionnelle: algorithmes de traitement des données (scoring, valeurs par défaut, etc.); <br /> modélisation mathématique; <br /> design des bases de données</p>
                            <p>Rédaction User stories, définition de la stratégie de recette fonctionnelle, rédaction cahier de recette et pilotage exécution.</p>
                        </div>
                        </div>
                        </div>
                    </section>
                    <section className="prospect">
                    </section>
            </div>

            <section className='data-mob'>
            
                <div className='intro-mobD'>
                    <img src={hDataImg} alt="principale de la data" />
                        <div className="infoData-mob">
                            <p>
                                <strong> La data</strong> est au cœur des activités économiques, commerciales et financières. La valoriser, c’est s’ajouter un puissant support en termes d’efficacité et de développement. <br />
                                Nous vous proposons de vous accompagner ou de réaliser avec vous des valorisations de la data, que ce soit en analyse de données, en <strong>Data Science</strong> ou  en <strong>Machine Learning</strong>, en données structurées ou en données textuelles non structurées.
                            </p>
                        </div>
                </div>
                <div className='prospect-mobData'>
                    <div className='need-mobD'>
                      
                            <div className="need-contentData">
                                <h1>Votre besoin</h1>
                                <div className='lineData-mob'></div>
                                <div className="need-info-mobD">
                                    <p>Réaliser une valorisation de la data, que ce soit en analyse de données, en Data Science, en Machine Learning, en données structurées, en données textuelles structurées ou non</p>
                                    <p>Mise en place projet prédictif de défaut sur prêt bancaire, d’aide à la prospection de prêt bancaire</p>
                                    <p>Développer une application web, mobile responsive avec respect des contraintes de performances et d'UX/UI afin d'optimiser la SEO du site</p>
                                </div>
                            </div>
                    </div>

                    <div className='savoir-mobD'>
                        <div className="savoir-faire-contentData">
                           <h1>Notre savoir-faire</h1>
                           <div className='lineData-mob'></div>
                           <div className="savoir-faire-infoData">
                                <p>Gestion projet Big Data de collecte, traitement et diffusion de statistiques d’investissements de portefeuille en valeurs mobilières,</p>
                                <p>Analyse fonctionnelle: algorithmes de traitement des données (scoring, valeurs par défaut, etc.); <br /> modélisation mathématique; <br /> design des bases de données</p>
                                <p>Rédaction User stories, définition de la stratégie de recette fonctionnelle, rédaction cahier de recette et pilotage exécution.</p>
                            </div>
                        </div>
                    </div>
                    <div className='mission-mobD'>
                        <div className="mission-contentData-mob">
                            <h1>Exemples de mission</h1>
                            <div className='lineData'></div>
                            <div className="mission-infoData-mob">
                                <div className="info-up-mobD">
                                    <p><strong>Chef de projet Big Data pour la production de la position extérieure globale</strong></p>
                                    <p className="ex">SI: Application métier</p>
                                    <p className="ex">Expertise: Data</p>
                                    <p className="ex">Secteur : Transport</p>
                                </div>
                                <div className="info-down-mobD">
                                    <p><strong>Création application mobile incluant calcul kilométrique, géolocalisation</strong></p>
                                    <p className="ex">SI: Application mobile</p>
                                    <p className="ex">Expertise: Lead Tech </p>
                                    <p className="ex">Secteur : Secteur public</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </section>
       </div>

    )
}



export default Data;