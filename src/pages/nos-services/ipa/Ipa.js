import React, {useEffect} from 'react';
import "aos/dist/aos.css";
import Aos from 'aos';
import './ipa.scoped.css';
import hIpaImg from './ipa.svg' 


function Ipa(){

    useEffect(() => {
        Aos.init({});
       }, []);


    return(

        <div className="Ipa">
            <div className='Ipa-content'>
            <div className='header-ipa'>
            <div className='banniere-container'>
                <div className='banniere-footer'>
                    <div className='entitle-men'>
                        <h1>IPA & RPA</h1>
                    </div>
                </div>
            </div>
            </div>
            <section className="intro">
                <div className="intro-head">
                    <img src={hIpaImg} alt="Principale ipa & RPA" />
                    <div className="infoI">
                        <p>
                            Vous souhaitez <strong>fiabiliser</strong> vos nouveaux déploiements en industrialisant vos tests existants par des procédés techniques qui s’intègrent au geste métier et permettent une collaboration humain/machine. <br />
                            Nous vous proposons un <strong>accompagnement</strong> sur mesure, évolutive, collaborative en nous concentrant sur les résultats attendus et en tenant compte de <strong>l’impact humain</strong>.
                        </p>
                    </div>
                </div>
               <div className="need-savoir">
                   <div className="needIpa" data-aos="fade-up"
                                                data-aos-duration="2000">
                       <div className="need-contentIpa">
                           <h1>Votre besoin</h1>
                           <div className='lineIpa'></div>
                           <div className="need-infoIpa">
                               <p>Industrialiser les tests existants</p>
                               <p>Structurer et fiabiliser le processus de recette fonctionnel</p>
                               <p>Automatiser des tâches répétitives à moindre valeur générant un taux d’erreur important</p>
                               <p>Réduire vos coûts opérationnels en réduction les délais d’interaction avec les utilisateurs</p>
                               <p>Bénéficier d’une expertise métier</p>
                           </div>
                       </div>
                   </div>
               </div>
               <div className="missionIpa" data-aos="fade-up"
                                                data-aos-duration="2000">
                       <div className="mission-contentIpa">
                           <h1>Exemples de mission</h1>
                           <div className='lineIpa'></div>
                           <div className="mission-infoIpa">
                               <div className="info-up">
                                   <p><strong> Automatisation de la recette fonctionnelle</strong></p>
                                   <p className="ex">ERP : Appli web & mobile</p>
                                   <p className="ex">Expertise : Dev (Javascript, Python)</p>
                                   <p className="ex">Secteur : Transport</p>
                               </div>
                               <div className="info-down">
                                   <p><strong> Automatisation des tests de non régression</strong></p>
                                   <p className="ex">ERP : Appli web</p>
                                   <p className="ex">Expertise : Dev (Javascript, Python)</p>
                                   <p className="ex">Secteur : Secteur public</p>
                               </div>
                           </div>
                       </div>
                   </div>
                   <div className="savoir-faireIpa" data-aos="fade-up"
                                                data-aos-duration="2000">
                   <div className="savoir-faire-contentIpa">
                       <h1>Notre savoir-faire</h1>
                       <div className='lineIpa'></div>
                       <div className="savoir-faire-infoIpa">
                           <p>Analyse, définition du besoin métier et création d’une feuille de route</p>
                           <p>Elaboration d’un modèle opérationnel et sélection des outils d’automatisation</p>
                           <p>Conception de la solution, définition de l’architecture</p>
                           <p>​Implémentation, déploiement et lancement progressif</p>
                           <p>​Traçabilité des exécutions et résultats</p>
                           <p>Versionning, Reporting d’aide à la décision</p>
                           <p>Gestion du changement, maintenance et renforcement</p>
                       </div>
                       </div>
                    </div>
           </section>
           <section className="prospectI">
            </section>
            </div>

            <section className='ipa-mob'>
            <div className='header-conseil-mob'>
                    <div className='banniere-container'>
                        <div className='banniere-footer'>
                            <div className='entitle-men'>
                                <h1>IPA & RPA</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='intro-mobI'>
                    <div className="intro-head-mobI">
                        <img src={hIpaImg} alt="Principale ipa & RPA" />
                        <div className="info-mobI">
                            <p>
                                Vous souhaitez <strong>fiabiliser</strong> vos nouveaux déploiements en industrialisant vos tests existants par des procédés techniques qui s’intègrent au geste métier et permettent une collaboration humain/machine. <br />
                                Nous vous proposons un <strong>accompagnement</strong> sur mesure, évolutive, collaborative en nous concentrant sur les résultats attendus et en tenant compte de <strong>l’impact humain</strong>.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='prospect-mobIpa'>
                <div className='need-mobI'>
                <div className="need-contentIpa-mob">
                           <h1>Votre besoin</h1>
                           <div className='lineIpa-mob'></div>
                           <div className="need-infoIpa-mob">
                               <p>Industrialiser les tests existants</p>
                               <p>Structurer et fiabiliser le processus de recette fonctionnel</p>
                               <p>Automatiser des tâches répétitives à moindre valeur générant un taux d’erreur important</p>
                               <p>Réduire vos coûts opérationnels en réduction les délais d’interaction avec les utilisateurs</p>
                               <p>Bénéficier d’une expertise métier</p>
                           </div>
                       </div>
                </div>
                <div className='savoir-mobI'>
                    <div className="savoir-faire-contentIpa-mob">
                        <h1>Notre savoir-faire</h1>
                        <div className='lineIpa-mob'></div>
                        <div className="savoir-faire-infoIpa-mob">
                            <p>Analyse, définition du besoin métier et création d’une feuille de route</p>
                            <p>Elaboration d’un modèle opérationnel et sélection des outils d’automatisation</p>
                            <p>Conception de la solution, définition de l’architecture</p>
                            <p>​Implémentation, déploiement et lancement progressif</p>
                            <p>​Traçabilité des exécutions et résultats</p>
                            <p>Versionning, Reporting d’aide à la décision</p>
                            <p>Gestion du changement, maintenance et renforcement</p>
                        </div>
                    </div>
                </div>
                <div className='mission-mobI'>
                    <div className="mission-contentIpa">
                           <h1>Exemples de mission</h1>
                           <div className='lineIpa'></div>
                           <div className="mission-infoIpa-mob">
                               <div className="info-up-mobI">
                                   <p><strong> Automatisation de la recette fonctionnelle</strong></p>
                                   <p className="ex">ERP : Appli web & mobile</p>
                                   <p className="ex">Expertise : Dev (Javascript, Python)</p>
                                   <p className="ex">Secteur : Transport</p>
                               </div>
                               <div className="info-down-mobI">
                                   <p><strong> Automatisation des tests de non régression</strong></p>
                                   <p className="ex">ERP : Appli web</p>
                                   <p className="ex">Expertise : Dev (Javascript, Python)</p>
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



export default Ipa;