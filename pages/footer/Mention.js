import React from 'react';
import './mention.css'


function Mention(){
    return(

        <div class="Mention-container">
            <div className='banniere-container'>
                <div className='banniere-footer'>
                    <div className='entitle-men'>
                        <h1>Mentions légales</h1>
                    </div>
                </div>
            </div>
            <section class="mention">
                <div className='mention-content'>
                    <div class="droit">
                        <h1>Droits de propriété intellectuelle</h1>
                        <p>L’ensemble du contenu de ce site comme sa dénomination sa présentation et son contenu constituent une œuvre originale éditée par 2C Conseil, et protégée par les lois en vigueur sur la propriété intellectuelle. Toute reproduction, représentation, utilisation ou modification, par quelque procédé que ce soit et sur quelque support que ce soit, de tout ou partie du site, de sa dénomination, de tout ou partie des différentes œuvres et modèles de produits qui le composent, sans avoir obtenu l’autorisation préalable de 2C Conseil, est strictement interdite et constitue un délit de contrefaçon puni de deux ans d’emprisonnement et de 150 000 euros d’amende.</p>
                    </div>
                    <div class="info">
                        <h1>Informations et contenus</h1>
                        <p>Les informations présentées et disponibles dans nos pages ne représentent que nos avis et points de vue exprimés à la date de publication de chaque page. Elles peuvent présenter des inexactitudes et n’ont comme objectif que de prodiguer des informations les plus complètes et utiles aux internautes.
                        Nous nous réservons le droit de les modifier ou supprimer sans préavis. Nous ne fournissons aucune garantie explicite ou implicite et ne saurions être tenu pour responsable de quelque dommage pouvant résulter d’une quelconque utilisation de ces informations.
                        Toutes informations et éléments qui nous seront transmises, seront réputées comme non confidentielles.</p>

                    </div>
                    <div class="design">
                        <h1>Design logo</h1>
                        <p>Dribbble: Cordell Orel U <br />
                            Instagram: Abralazam <br />
                            Twitter: @Abralazam
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}


export default Mention;