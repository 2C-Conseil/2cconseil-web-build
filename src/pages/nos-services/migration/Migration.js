import React, {useEffect} from 'react';
import "aos/dist/aos.css";
import Aos from 'aos';
import './migration.scoped.css';
import hMigrationImg from './migration.svg' 


function Migration(){

    useEffect(() => {
        Aos.init({});
       }, []);


    return(

        <div className="Migration">
            <div className='Migration-content'>
                <div className='header-migration'>
                    <div className='banniere-container'>
                        <div className='banniere-footer'>
                            <div className='entitle-men'>
                                <h1>Migration ERP</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="intro">
                    <div className="intro-head">
                        <img src={hMigrationImg} alt="image principale migration" />
                        <div className="infoM">
                            <p>
                                Votre Enterprise Resource Management vous aide à mieux <strong>gérer les informations</strong> des différents domaines de votre activité. Lorsque vous désirez rationaliser, optimaliser ou modifier votre logiciel de gestion intégrée, nous vous <strong>conseillons</strong> et <strong>accompagnons</strong> durant toutes les phases du projet.
                            </p>
                        </div>
                    </div>
                    <div className="need-savoir">
                        <div className="needMigr">
                            <div className="need-contentMigr">
                                <h1>Votre besoin</h1>
                                <div className='lineMigr'></div>
                                <div className="need-infoMigr">
                                    <p>Choix d’un nouvel outil en adéquation avec vos exigences légales et réglementaires</p>
                                    <p>Renforcer temporairement vos équipes en interne</p>
                                    <p>Bénéficier d’une expertise métier</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="missionConseil">
                        <div className="mission-contentMigr">
                            <h1>Exemples de mission</h1>
                            <div className='lineMigr'></div>
                            <div className="mission-infoMigr">
                                <div className="info-up">
                                    <p><strong>Chef de projet migration vers Sage X3</strong></p>
                                    <p className="ex">ERP : Sage X3</p>
                                    <p className="ex">Expertise : SI Finance</p>
                                    <p className="ex">Secteur : Retail</p>
                                </div>
                                <div className="info-down">
                                    <p><strong>Consultant fonctionnel SAP FICO</strong></p>
                                    <p className="ex">ERP : SAP FICO</p>
                                    <p className="ex">Expertise : SI Finance</p>
                                    <p className="ex">Secteur : Secteur public</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="savoir-faireMigr">
                    <div className="savoir-faire-contentMigr">
                        <h1>Notre savoir-faire</h1>
                        <div className='lineMigr'></div>
                        <div className="savoir-faire-infoMigr">
                            <p>Analyse, définition du besoin métier</p>
                            <p>Rédaction expression de besoin, cahier de charges, spécifications fonctionnelles</p>
                            <p>Préparation, animation et restitution atelier de conception et d’adéquation</p>
                            <p>Définition de la stratégie de recette fonctionnelle, rédaction cahier de recette et mise en œuvre</p>
                            <p>Reprise de données, mise en service de la solution</p>
                            <p>Conduite de changement, TMA</p>
                        </div>
                        </div>
                    </div>
                </section>
                <section className="prospect"></section>
            </div>

            <section className='Migration-mob'>
                <div className='header-migration'>
                    <div className='banniere-container'>
                        <div className='banniere-footer'>
                            <div className='entitle-men'>
                                <h1>Migration ERP</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="intro-head-mobM">
                    <img src={hMigrationImg} alt="image principale migration" />
                    <div className="infoM-mob">
                        <p>
                            Votre Enterprise Resource Management vous aide à mieux <strong>gérer les informations</strong> des différents domaines de votre activité. Lorsque vous désirez rationaliser, optimaliser ou modifier votre logiciel de gestion intégrée, nous vous <strong>conseillons</strong> et <strong>accompagnons</strong> durant toutes les phases du projet.
                        </p>
                    </div>
                </div>
                <div className='prospect-mobM'>
                    <div className='need-mobM'>
                            <div className="need-contentMigr-mob">
                                <h1>Votre besoin</h1>
                                <div className='lineMigr-mob'></div>
                                <div className="need-infoMigr-mob">
                                    <p>Choix d’un nouvel outil en adéquation avec vos exigences légales et réglementaires</p>
                                    <p>Renforcer temporairement vos équipes en interne</p>
                                    <p>Bénéficier d’une expertise métier</p>
                                </div>
                            </div>
                    </div>
                    <div className='savoir-mobM'>
                        <div className="savoir-faire-contentMigr-mob">
                            <h1>Notre savoir-faire</h1>
                            <div className='lineMigr-mob'></div>
                            <div className="savoir-faire-infoMigr-mob">
                                <p>Analyse, définition du besoin métier</p>
                                <p>Rédaction expression de besoin, cahier de charges, spécifications fonctionnelles</p>
                                <p>Préparation, animation et restitution atelier de conception et d’adéquation</p>
                                <p>Définition de la stratégie de recette fonctionnelle, rédaction cahier de recette et mise en œuvre</p>
                                <p>Reprise de données, mise en service de la solution</p>
                                <p>Conduite de changement, TMA</p>
                            </div>
                        </div>
                        
                    </div>
                    <div className='mission-mobM'>
                        <div className="mission-contentMigr-mob">
                                <h1>Exemples de mission</h1>
                                <div className='lineMigr-mob'></div>
                                <div className="mission-infoMigr-mob">
                                    <div className="info-up-mobM">
                                        <p><strong>Chef de projet migration vers Sage X3</strong></p>
                                        <p className="ex">ERP : Sage X3</p>
                                        <p className="ex">Expertise : SI Finance</p>
                                        <p className="ex">Secteur : Retail</p>
                                    </div>
                                    <div className="info-down-mobM">
                                        <p><strong>Consultant fonctionnel SAP FICO</strong></p>
                                        <p className="ex">ERP : SAP FICO</p>
                                        <p className="ex">Expertise : SI Finance</p>
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



export default Migration;