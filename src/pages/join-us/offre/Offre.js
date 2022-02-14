import React from 'react';
import { Link } from 'react-router-dom';
import './offre.css'


function Offre() {
    return(
        <div className="Offre">
            <div className='headerO'>
                <div class="ban">
                    <div class="title" data-aos="fade-up">
                        <p>Nos offres</p>
                    </div>
                </div>
            </div>
            <section className='offer-cont'>
                <div className='offer-back'>
                    <div className='offer-back-content'>
                        <h1 className='titleO'>Consultez nos offres d'emploi</h1>
                        <div className='line'></div>
                        <div className='entete'>
                            <p>Intitulé de l'offre</p>
                            <p>Type de Contrat</p>
                        </div>
                        <div className='blocO'>
                            <Link to><p className='typeO'>CDI Consultant SI/Finance H/F</p></Link>
                            <p className='typeO'>CDD</p>
                        </div>
                        <div className='blocO'>
                            <p className='typeO'>CDI Consultant SI/Finance H/F</p>
                        </div>
                        <div className='blocO'></div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Offre;