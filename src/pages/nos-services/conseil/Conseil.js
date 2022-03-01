import React, {useEffect} from 'react';
import "aos/dist/aos.css";
import Aos from 'aos';
import './conseil.css';
import hConseilImg from './conseil.svg' 


function Conseil(){

    useEffect(() => {
        Aos.init({});
       }, []);


    return(

        <div className="Conseil">
            <div className='Conseil-content'>
            <div className='header-ipa'>
            <div className='banniere-container'>
                <div className='banniere-footer'>
                    <div className='entitle-men'>
                        <h1>Conseil & SI</h1>
                    </div>
                </div>
            </div>
            </div>
                <section className="introC">
                    <div className="intro-head" >
                        <img src={hConseilImg} alt="principale conseil&SI" />
                        <div className="infoConseil">
                            <p>
                            Votre  système  de  pilotage  est <strong>essentiel</strong> pour  vous.  Il  vous  fournit  des informations   opérationnelles   de toute   nature   sur   vos   activités   et   leur évolution vers vos <strong>objectifs</strong> , il constitue une référence commune à toutes les parties prenantes et <strong>facilite</strong> le Reporting.
                            </p>
                        </div>
                    </div>
                <div className="need-savoir">
                    <div className="needConseil" data-aos="fade-up"
                                                    data-aos-duration="2000">
                        <div className="need-contentConseil">
                            <h1>Votre besoin</h1>
                            <div className='lineConseil'></div>
                            <div className="need-infoConseil">
                                <p>Améliorer vos process, réduire vos délais, répondre aux obligations légales et réglementaires,</p>
                                <p>Renforcement temporaire de vos équipes en interne, </p>
                                <p>Bénéficier d’une expertise métier,</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="missionConseil" data-aos="fade-up"
                                                    data-aos-duration="2200">
                        <div className="mission-contentConseil">
                        <h1>Exemples de mission</h1>
                        <div className='lineConseil'></div>
                        <div className="mission-infoConseil">
                                <div className="info-up">
                                    <p><strong> AMOA Trésorerie</strong></p>
                                <p className="ex">ERP: Kyriba</p>
                                <p className="ex">Expertise: Trésorerie / SI Finance</p>
                                <p className="ex">Secteur: Energie</p>
                                </div>
                                <div className="info-down">
                                <p><strong> Consultant technico-fonctionnel PEOPLESOFT SIRH</strong></p>
                                <p className="ex">ERP: PEOPLESOFT</p>
                                <p className="ex">Expertise: SI RH</p>
                                <p className="ex">Secteur: Banque</p>
                                </div>
                            </div>
                        </div>
                    </div>
                <div className="savoir-faireConseil"  data-aos="fade-up"
                                                        data-aos-duration="2500">
                        <div className="savoir-faire-contentConseil">
                            <h1>Notre savoir-faire</h1>
                            <div className='lineConseil lru'></div>
                            <div className="savoir-faire-infoConseil">
                            <p>Analyse des briefs, pilotage phase appel d’offre et aide au choix de solution,</p>
                            <p>Rédaction expression de besoin, cahier de charges, spécifications,</p>
                            <p>​Coordination des acteurs projets (développeurs, intégrateur, experts UX, métier, etc.)</p>
                            <p>​Gestion budget, suivi planning et risque projet,</p>
                            <p>Rédaction User stories, définition de la stratégie de recette fonctionnelle, rédaction cahier de recette et pilotage exécution,</p>
                            <p>Gestion du changement, maintenance et renforcement</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="prospect"></section>
           </div>

            <section className='Conseil-mob'>
                <div className='header-conseil-mob'>
                    <div className='banniere-container'>
                        <div className='banniere-footer'>
                            <div className='entitle-men'>
                                <h1>Conseil & SI</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="intro-mobC">
                    <div className="intro-head-mob" >
                        <img src={hConseilImg} alt="principale conseil&SI" />
                        <div className="infoConseil-mob">
                            <p>
                            Votre  système  de  pilotage  est <strong>essentiel</strong> pour  vous.  Il  vous  fournit  des informations   opérationnelles   de toute   nature   sur   vos   activités   et   leur évolution vers vos <strong>objectifs</strong> , il constitue une référence commune à toutes les parties prenantes et <strong>facilite</strong> le Reporting.
                            </p>
                        </div>
                    </div>
                </div>

                <section className="prospect-mobD">
                    <div className='need-mobC'>
                        <div className="need-contentConseil-mob">
                                <h1>Votre besoin</h1>
                                <div className='lineConseil-mob'></div>
                                <div className="need-infoConseil-mob">
                                    <p>Améliorer vos process, réduire vos délais, répondre aux obligations légales et réglementaires,</p>
                                    <p>Renforcement temporaire de vos équipes en interne, </p>
                                    <p>Bénéficier d’une expertise métier,</p>
                                </div>
                        </div>
                    </div>
                    <div className='savoir-mobC'>
                        <div className="savoir-faire-contentConseil-mob">
                            <h1>Notre savoir-faire</h1>
                            <div className='lineConseil'></div>
                            <div className="savoir-faire-infoConseil-mob">
                                <p>Analyse des briefs, pilotage phase appel d’offre et aide au choix de solution,</p>
                                <p>Rédaction expression de besoin, cahier de charges, spécifications,</p>
                                <p>​Coordination des acteurs projets (développeurs, intégrateur, experts UX, métier, etc.)</p>
                                <p>​Gestion budget, suivi planning et risque projet,</p>
                                <p>Rédaction User stories, définition de la stratégie de recette fonctionnelle, rédaction cahier de recette et pilotage exécution,</p>
                                <p>Gestion du changement, maintenance et renforcement</p>
                            </div>
                        </div>
                    </div>   
                    <div className='mission-mobC'>
                        <div className="mission-contentConseil-mob">
                        <h1>Exemples de mission</h1>
                        <div className='lineConseil'></div>
                            <div className="mission-infoConseil-mob">
                                <div className="info-up-mobC">
                                    <p><strong> AMOA Trésorerie</strong></p>
                                    <p className="ex">ERP: Kyriba</p>
                                    <p className="ex">Expertise: Trésorerie / SI Finance</p>
                                    <p className="ex">Secteur: Energie</p>
                                </div>
                                <div className="info-down-mobC">
                                    <p><strong> Consultant technico-fonctionnel PEOPLESOFT SIRH</strong></p>
                                    <p className="ex">ERP: PEOPLESOFT</p>
                                    <p className="ex">Expertise: SI RH</p>
                                    <p className="ex">Secteur: Banque</p>
                                </div>
                            </div>
                        </div>
                    </div>   
                </section>          
            </section>
       </div>

    )
}



export default Conseil;