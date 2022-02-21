import React from 'react';
import './valeur.css'


function Valeurs(){
    return(

        <div class="Valeurs-container">
            <div class="head-ban">
                <div class="ban"></div>
                <div class="title"><p>Nos Valeurs</p></div>
            </div>
            <section class="valeurs">
                <div class="esprit-acc">
                    <h1>Esprit Agile dans l’accueil</h1>
                    <p>Selon l’esprit Agile, nous sommes ouverts aux
                        besoins de nos clients, tant dans la forme de
                        l’accueil sur mesure que nous leur
                        proposons que dans la diversité des contenus apportés.</p>
                </div>
                <div class="esprit-eq">
                    <h1>Esprit Agile dans le vécu de nos équipes</h1>
                    <p>Dans nos équipes prévalent les notions de
                    diversité professionnelle et humaine, d’égalité de chances,
                    de solidarité et de partage des connaissances
                    et compétences entre les associés et seniors et les juniors.</p>

                </div>
                <div class="esprit-client">
                    <h1>Esprit Agile dans l’interaction avec nos clients</h1>
                    <p>
                    Tout au long de notre parcours avec vous,
                    nous interagissons avec vous
                    et restons à l’écoute de toute nécessité de réorientation
                    </p>
                </div>
            </section>
        </div>
    )
}


export default Valeurs;